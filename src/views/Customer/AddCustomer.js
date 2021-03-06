import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select';
import { saveCustomer } from '../../store/actions/CustomerActions';
import Error from '../Errors/Error';
import { connect } from 'react-redux';
import { withToastManager } from 'react-toast-notifications';

class AddCustomer extends Component {

    state = {
        name: '',
        email: '',
        phone_number: '',
        type_label: 'Pengecer',
        type_value: 'retailer',
        address: ''
    }

    handleSave = () => {
        this.props.saveCustomer(this.state)
    }

    handleReset = () => {

        this.setState({
            name: '',
            email: '',
            phone_number: '',
            type_label: '',
            type_value: '',
            address: ''
        })
    }

    handleChange = (name) => (e) => {
        this.setState({
            ...this.state,
            [name]: e.target.value
        })
    }

    handleChangeSelect = (name) => (e) => {
        
        if (e !== null) {
            this.setState({
                ...this.state,
                [`${name}_label`]: e.label,
                [`${name}_value`]: e.value
            })

        } else {
            this.setState({
                ...this.state,
                [`${name}_label`]: null,
                [`${name}_value`]: null
            })
        }
    }

    componentDidUpdate = (prevProps) => {
       
        if (prevProps.type !== this.props.type || prevProps.success !== this.props.success) {
            if (this.props.type === 'save') {
                const { toastManager } = this.props;
                
                if (this.props.success) {
    
                    toastManager.add(this.props.message, {
                        appearance: 'success',
                        autoDismiss: true
                    });
    
                    return this.props.history.push('/customer')
    
                } else {
    
                    toastManager.add(this.props.message, {
                        appearance: 'error',
                        autoDismiss: true
                    });
                }
            }
        }
    }

    render() {

        const { error, fetching } = this.props

        const {
            name,
            email,
            phone_number,
            type_label,
            type_value,
            address
        } = this.state

        const validate = error && error.data && error.data.errors

        if (error && error.status !== 422)
            return <Error title={error.statusText} message={error.data.message} code={error.status} connection={error.connection} />

        return (
            <Fragment>
                <div className="row p-3"> 
                   
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-8">
                                <h1>Tambah Pelanggan</h1>
                            </div>
                            <div className="col-md-4 text-right">
                                <Link className="btn btn-secondary" to="/customer"><i className="mdi mdi-arrow-left mr-2"></i>Kembali</Link>
                            </div>
                        </div>
                        <hr/>
                    </div>
                

                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="control-label">Nama <span className="text-danger">*</span></label>
                            <input value={name} onChange={this.handleChange('name')} type="text" className={`form-control  ${ validate && validate.name && 'is-invalid'}`} placeholder="Nama Pelanggan"/>
                            {
                                validate && validate.name  && (
                                    <div className="invalid-feedback">{ validate.name[0] }</div>
                                )
                            }
                        </div>
                        
                        
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input value={email} onChange={this.handleChange('email')} type="email" className={`form-control  ${ validate && validate.email && 'is-invalid'}`} placeholder="Email Pelanggan"/>
                            {
                                validate && validate.email  && (
                                    <div className="invalid-feedback">{ validate.email[0] }</div>
                                )
                            }
                        </div>
                    
                        <div className="form-group">
                            <label className="control-label">Nomor Telefon</label>
                            <input value={phone_number} onChange={this.handleChange('phone_number')} type="text" className="form-control" placeholder="Nomor Telefon"/>
                        </div>
                    


                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="form-group">
                            <label className="control-label">Tipe</label>
                            <Select 
                                value={type_label && {
                                    label: type_label,
                                    value: type_value
                                }}
                                onChange={this.handleChangeSelect('type')} 
                                placeholder="Pilih tipe"
                                options={[
                                {
                                    label: 'Pengecer',
                                    value: 'retailer'
                                },
                                {
                                    label: 'Grosir',
                                    value: 'wholesaler'
                                }
                            ]}
                            />
                        </div>
                
                        <div className="form-group">
                            <label className="control-label">Alamat</label>
                            <textarea value={address} onChange={this.handleChange('address')} rows="5" className="form-control" placeholder="Nama Jalan RT/RW Desa Kecamatan, Kabupaten, Kode Pos" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-2 text-right mb-5">
                    <hr/>
                    {
                        fetching ? (
                            <button className="btn btn-primary btn-disabled mr-2" disabled><i className="mdi mdi-loading mdi-spin mr-2"></i>Simpan</button>
                        ) : (
                            <button className="btn btn-primary mr-2" onClick={this.handleSave}><i className="mdi mdi-content-save mr-2"></i>Simpan</button>
                        )
                    }
                    <button className="btn btn-secondary" onClick={this.handleReset}><i className="mdi mdi-reload mr-2"></i>Reset</button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state,
        message: state.customer.message,
        fetching: state.customer.fetching,
        error: state.customer.error,
        success: state.customer.success,
        type: state.customer.type
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        saveCustomer: data => dispatch(saveCustomer(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withToastManager(AddCustomer))
