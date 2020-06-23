const fs = require('fs')
function saveContent(content, path) {
    //fs.writeFileSync(path,content)
    //fs.appendFileSync(path,content)

    //append old data that we enter each time on the same file
    let oldData = fs.readFileSync(path)
    let newData = oldData + content
    fs.writeFileSync(path,newData)
}

module.exports = {
    saveContent
}