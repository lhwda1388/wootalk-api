import express, { Request, Response, NextFunction } from 'express'
import { User } from '../db/sequelize'
import config from '../config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import passport from 'passport'
import ResponseEntity from '../entity/response-entity'

const router = express.Router()
const jwtSecret = config.jwt.secret

/* 이메일, 패스워드 로그인 */
router.post('/signin', async function (req: Request, res: Response, next: NextFunction) {
  try {
    console.log(`signin jwtSecret : ${jwtSecret}`)
    const email: string = <string>req.body.email
    const pwd: string = <string>req.body.pwd

    const user: any = await User.findOne({
      where: { email: email }
    })

    const result: boolean = await bcrypt.compare(pwd, user.pwd)
    if (result) {
      const token: string = jwt.sign(
        {
          email: user.email
        },
        jwtSecret,
        { expiresIn: '5m' }
      )

      res
        .status(200)
        .cookie('token', token)
        .json(
          new ResponseEntity(200, 'ok', {
            access_token: token
          })
        )
    } else {
      res
        .status(403)
        .cookie('token', '')
        .json(
          new ResponseEntity(403, 'no auth', {
            access_token: ''
          })
        )
    }
  } catch (error) {
    res
      .status(500)
      .cookie('token', '')
      .json(
        new ResponseEntity(403, error.toString(), {
          access_token: ''
        })
      )
  }
})

// 구글인증
router.get('/signin/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/signin/googleRedirect', passport.authenticate('google'), function (req: Request, res: Response) {
  console.log('redirect!!!')
  //console.log(req)
  res.status(200).json(new ResponseEntity(200, 'googleRedirect', {}))
})

export default router
