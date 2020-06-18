import express, { Request, Response, NextFunction } from 'express'
import passport from 'passport'
const router = express.Router()

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  console.log('user')
  res.send('respond with a resource')
})

/**
 * mypage
 */
router.get('/mypage', passport.authenticate('jwt', { session: false }), function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(200).json({
    message: 'mypage'
  })
})

export default router
