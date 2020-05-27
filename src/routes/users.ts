import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  console.log('user!!')
  res.send('respond with a resource')
})

export default router
