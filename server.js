const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.get('/', serveStatic(path.join(__dirname, '/dist')))

const PORT = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log(`Server is running on port ${ PORT }`)
})
