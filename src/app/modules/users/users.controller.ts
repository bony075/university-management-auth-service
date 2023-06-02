import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const results = await usersService.createUser(user)
    res.status(200).json({
      sucess: true,
      message: 'user created successfully!!',
      data: results,
    })
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: 'failed to create user',
    })
  }
}
export default {
  createUser,
}
