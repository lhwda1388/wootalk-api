import express, { Request, Response, NextFunction } from 'express'
import { User } from '../db/sequelize'
import config from '../config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = express.Router()
const jwtSecret = config.jwt.secret

/* GET users listing. */
router.get('/signin', async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const email: string = <string>req.query.email
    const pwd: string = <string>req.query.pwd

    const user: any = await User.findOne({
      where: { email: email },
    })

    if (user.pwd === pwd) {
      const token: string = jwt.sign(
        {
          email: user.email,
        },
        jwtSecret,
        { expiresIn: '5m' }
      )
      res.cookie('user', token)
      res.status(200).json({
        access_token: token,
        message: 'ok',
      })
    } else {
      res.status(403).cookie('user', '')
      res.json({
        access_token: '',
        message: 'no auth',
      })
    }
  } catch (error) {
    res.status(500).json({
      access_token: '',
      message: error.toString(),
    })
  }
})

export default router
