const fs = require('fs')

function handleStyle (id) {
  fs.createReadStream('./src/asset/style.css')
  .pipe(fs.createWriteStream(`./build/${id}/style.css`))

  this.page = `
    <head>
      <link href="http://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">
      <link href="./style.css" rel="stylesheet">
    </head>
    <body>${this.page}</body>
  `
}

module.exports = handleStyle