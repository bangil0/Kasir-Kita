import React from 'react'
import Login from "./views/Login";
import FullScreen from "./components/FullScreen";
import { Redirect } from "react-router-dom";
import DefaultScreen from './components/DefaultScreen';
import Dashboard from './views/Dashboard';
import Cashier from './views/Cashier';
import Product from './views/Product/Product';
import AddProduct from './views/Product/AddProduct';
import Category from './views/Category/Category';
import Sales from './views/Sales';
import Purchase from './views/Purchase/Purchase';
import AddPurchase from './views/Purchase/AddPurchase';
import Expense from './views/Expense/Expense';
import AddExpense from './views/Expense/AddExpense';
import Stock from './views/Stock/Stock';
import User from './views/User/User';
import AddUser from './views/User/AddUser';
import Customer from './views/Customer/Customer';
import AddCustomer from './views/Customer/AddCustomer';
import Supplier from './views/Supplier/Supplier';
import AddSupplier from './views/Supplier/AddSupplier';
import Role from './views/Role/Role';
import AddRole from './views/Role/AddRole';

export default [
    {
        path: '/',
        exact: true,
        layout: FullScreen,
        component: () => <Redirect to="/login" />
    },
    {
        path: '/login',
        exact: true,
        layout: FullScreen,
        component: Login
    },
    {
        path: '/dashboard',
        exact: true,
        layout: DefaultScreen,
        component: Dashboard
    },
    {
        path: '/cashier',
        exact: true,
        layout: DefaultScreen,
        component: Cashier
    },
    {
        path: '/product',
        exact: true,
        layout: DefaultScreen,
        component: Product
    },
    {
        path: '/product/create',
        exact: true,
        layout: DefaultScreen,
        component: AddProduct
    },
    {
        path: '/category',
        exact: true,
        layout: DefaultScreen,
        component: Category
    },
    {
        path: '/sales',
        exact: true,
        layout: DefaultScreen,
        component: Sales
    },
    {
        path: '/purchase',
        exact: true,
        layout: DefaultScreen,
        component: Purchase
    },
    {
        path: '/purchase/create',
        exact: true,
        layout: DefaultScreen,
        component: AddPurchase
    },
    {
        path: '/expense',
        exact: true,
        layout: DefaultScreen,
        component: Expense
    },
    {
        path: '/expense/create',
        exact: true,
        layout: DefaultScreen,
        component: AddExpense
    },
    {
        path: '/stock',
        exact: true,
        layout: DefaultScreen,
        component: Stock
    },
    {
        path: '/user',
        exact: true,
        layout: DefaultScreen,
        component: User
    },
    {
        path: '/user/create',
        exact: true,
        layout: DefaultScreen,
        component: AddUser
    },
    {
        path: '/customer',
        exact: true,
        layout: DefaultScreen,
        component: Customer
    },
    {
        path: '/customer/create',
        exact: true,
        layout: DefaultScreen,
        component: AddCustomer
    },
    {
        path: '/supplier',
        exact: true,
        layout: DefaultScreen,
        component: Supplier
    },
    {
        path: '/supplier/create',
        exact: true,
        layout: DefaultScreen,
        component: AddSupplier
    },
    {
        path: '/role',
        exact: true,
        layout: DefaultScreen,
        component: Role
    },
    {
        path: '/role/create',
        exact: true,
        layout: DefaultScreen,
        component: AddRole
    }
]