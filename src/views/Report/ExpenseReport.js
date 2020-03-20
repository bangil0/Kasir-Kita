import React, { Component, Fragment } from 'react'
import DatePicker from 'react-datepicker'
import '../../../node_modules/react-datepicker/dist/react-datepicker.css'
import Table from '../../components/Table'

class ExpenseReport extends Component {
    state = {
        start_date: new Date(),
        end_date: new Date(),
        ordering: {
            type: 'name',
            sort: 'asc'
        }
    }

    handleSorting = (e) => {
        const type = e.target.id
        const sort = this.state.ordering.sort
        this.setState({
			...this.state,
            ordering: {
                type: type,
                sort: sort === 'asc' ? 'desc' : 'asc'
            }
        })
    }

    changeDate = (name, date) => {
        this.setState({
            ...this.state,
            [name]: date
        })
    }

    render() {
        const { start_date, end_date, ordering } = this.state
        const theads = [
            { name: 'name', value: 'Nama', sortable: true },
            { name: 'price', value: 'Harga', sortable: true },
            { name: 'qty', value: 'Qty', sortable: true },
            { name: 'total', value: 'Total', sortable: true },
        ]
        return (
           <Fragment>
               <div className="row p-3"> 
                    <div className="col-md-12">
                        <h1>Laporan Pembelian Peralatan</h1>
                        <hr/>
                    </div>

                    <div className="col-md-12 mt-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Dari tanggal</label>
                                            <DatePicker className="form-control" selected={start_date} onChange={date => this.changeDate('start_date', date)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Sampai tanggal</label>
                                            <DatePicker className="form-control" selected={end_date} onChange={date => this.changeDate('end_date', date)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex justify-content-end">
                                    <div className="form-group">
                                        <label className="control-label">Pencarian</label>
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control" placeholder="Kata kunci"/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-secondary" type="button"><i className="mdi mdi-magnify"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="mdi mdi-download mr-2"></i>Unduh
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#"><i className="mdi mdi-file-pdf mr-2"></i>PDF</a>
                                        <a class="dropdown-item" href="#"><i className="mdi mdi-file-excel mr-2"></i>Excel</a>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 mt-3">
                        <Table theads={theads} ordering={ordering} handleSorting={this.handleSorting}>
                            <tr>
                               <td>Lampu Toko</td>
                               <td className="text-right">Rp.12,500</td>
                               <td>1 pcs</td>
                               <td>Rp.12,500</td>
                            </tr>
                        </Table>
                        <table className="table table-bordered">
                            <tfoot>
                                <tr>
                                    <td colSpan="4" className="text-right">Total Pembelian Peralatan</td>
                                    <td className="text-right">1</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="text-right">Total Pembelian</td>
                                    <td className="text-right">Rp.12,500</td>
                                </tr>
                            </tfoot>
                        </table>
                        <hr/>
                    </div>

                    <div className="col-md-6 mt-2">
                        <p>Menampilkan 0 s/d 0 dari 0 data</p>
                    </div>

                    <div className="col-md-6 mt-2 text-right">
                        <div className="d-flex justify-content-end">
                            <div className="form-group">
                                <label className="control-label">Tampilkan data perhalaman</label>
                                <select className="form-control">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
           </Fragment>
        )
    }
}

export default ExpenseReport
