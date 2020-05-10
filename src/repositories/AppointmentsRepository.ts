import Appointment from '../models/Appointment'
import { isEqual } from 'date-fns'

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[]

  constructor () {
    this.appointments = []
  }

  public all (): Appointment[] {
    return this.appointments
  }

  public create ({ provider, date }: CreateAppointmentDTO): Appointment {
    const newAppointment: Appointment = new Appointment({ provider, date })

    this.appointments.push(newAppointment)

    return newAppointment
  }

  public findByDate (date: Date): Appointment | null {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date)
    )

    return findAppointment || null
  }
}

export default AppointmentsRepository
