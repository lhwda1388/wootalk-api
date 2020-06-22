import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import config from './config'
import { VerifiedCallback, StrategyOptions, Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import cors from 'cors'

// router
import indexRouter from './routes/index'
import usersRouter from './routes/users'
import authRouter from './routes/auth'

const app: express.Application = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())

const jwtSecret = config.jwt.secret
const opts: StrategyOptions = {
  jwtFromRequest: function (req: Request) {
    var token = null
    if (req && req.cookies) {
      token = req.cookies['token']
    }
    console.log(`token : ${token}`)
    return token
  },
  secretOrKey: jwtSecret
}

const verify: VerifiedCallback = function (jwtPayload, done) {
  return done(null, jwtPayload)
}

passport.use(new JwtStrategy(opts, verify))

passport.use(
  new GoogleStrategy(
    {
      clientID: '921618801654-0339qbekdd6c2e29kc1tjmvb25i1gfr8.apps.googleusercontent.com',
      clientSecret: '',
      callbackURL: 'http://localhost:3000/auth/signin/googleRedirect'
    },
    function (accessToken, refreshToken, profile, cb) {
      // console.log(accessToken, refreshToken, profile)
      console.log('GOOGLE BASED OAUTH VALIDATION GETTING CALLED')
      return cb(undefined, profile)
    }
  )
)
passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

app.use(cors())
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

export default app
