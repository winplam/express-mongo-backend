import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
// import App from '../examples_tests/App'
// import App from '../examples_tests/AppAxios'

hydrate(<App/>, document.getElementById('root'))
