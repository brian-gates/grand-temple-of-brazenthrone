const fs = require('fs')
const mv = require('mv')

mv('tmp/Build/', 'Build/', {mkdirp: true}, err => {
    console.log(err || 'Done')
    debugger
})