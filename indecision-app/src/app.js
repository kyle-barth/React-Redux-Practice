import React from 'react'
import ReactDOM from 'react-dom'

// App
import IndecisionApp from './components/IndecisionApp'

// Styling
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'))