import { Router } from 'express'
import appointmentsRouter from './appointments.routes'

const routes = Router()

routes.get('/', (request, response) => response.json({ itWorks: true }))
routes.use('/appointments', appointmentsRouter)

export default routes
