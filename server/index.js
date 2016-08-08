const express = require('express')
const path = require('path')
const colors = require('colors')

const app = express()
const port = process.env.PORT || 4200
app.use(express.static(path.join(__dirname, '/../public')))

console.log('********************************************'.grey)
console.log('  Server status: '.yellow + 'Online'.green)
console.log('********************************************'.grey)
console.log('  Reuser is listening on port: '.yellow + port)
console.log('********************************************'.grey)
console.log('  Cleaning the world...'.cyan)
console.log('  One item at a time!'.cyan)
console.log('********************************************'.grey)
app.listen(port)
