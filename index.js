var fs = require('fs')
var path = require('path')
var streamArray = require('stream-array')

var words = fs.readFileSync(path.resolve(__dirname, './words.txt'))
			  .toString()
			  .trim()
			  .split('\n')

var len = words.length

module.exports = words

module.exports.stream = function stream() {
	return streamArray(words)
}

module.exports.random = function random() {
	var i = Math.floor(Math.random()*len)
	return words[i]
}