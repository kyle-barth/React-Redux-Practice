import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'

// Styling
import 'normalize.css/normalize.css'
import './styles/styles.scss'

// AppRouter
import AppRouter from './routers/AppRouter'

ReactDOM.render(<AppRouter />, document.getElementById('app'))