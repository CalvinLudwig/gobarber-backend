import Appointment from '../models/Appointment'
import { startOfHour } from 'date-fns'
import AppointmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository

  constructor (appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository
  }

  public execute ({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date)

    if (!this.isDataAvailable(appointmentDate)) {
      throw Error('This appointment is already booked.')
    }

    return this.appointmentsRepository.create({
      provider,
      date: appointmentDate
    })
  }

  private isDataAvailable (date: Date): boolean {
    return !this.appointmentsRepository.findByDate(date)
  }
}

export default CreateAppointmentService
