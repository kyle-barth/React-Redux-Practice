import validator from 'validator'

console.log(validator.isEmail('foo@bar.com'), validator.isEmail('foo'))

import React from 'react'
import ReactDOM from 'react-dom'

const template = <p>This is JSX from webpack</p>
ReactDOM.render(template, document.getElementById('app'))