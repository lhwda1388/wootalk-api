import 'mocha'
import { expect } from 'chai'
import bcrypt from 'bcrypt'

describe('Bcrypt password', function () {
  it('password encrypt', function (done) {
    bcrypt.genSalt(10, function (err, salt) {
      console.log(`salt : ${salt}`)
      bcrypt.hash('qwer123!', salt, function (err, hash) {
        console.log(`hash: ${hash}`)
        done()
        expect(true).to.equal(true)
      })
    })
  })
})
