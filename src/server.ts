import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'express-async-errors'
import chalk from 'chalk'
import routes from './routes'
import AppError from './errors/AppError'

import './database'
import uploadConfig from './config/upload'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory))
app.use(routes)
app.use((error: Error, request: Request, response: Response, _: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			status: 'error',
			message: error.message
		})
	}
	console.error(error.message)
	return response.status(500).json({
		status: 'error',
		message: 'Internal server error.'
	})
})
app.listen(3333, () => {
	let msg = '                                                                  \n'
	msg += '                    SERVER STARTED AT PORT 3333                   \n'
	msg += '                                                                  \n'

	console.log(chalk.bgGreen.white.bold(msg))
})
