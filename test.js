var jargon = require('./index.js')

var chai = require('chai')
chai.should()

jargon.stream.should.be.instanceof(Function)

jargon.random.should.be.instanceof(Function)

jargon.random().should.be.a.string

jargon.stream()
	.on('data', function (datum) {
		datum.should.be.a.string
	})
	.on('end', function (e) {
		(e === undefined).should.be.true
	})

console.log('everythings gonna be ok')