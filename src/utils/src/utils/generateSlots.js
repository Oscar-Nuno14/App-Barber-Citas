import { schedules } from "../constants/schedules"

// Obtiene el nombre del día
const getDayName = (date) => {
  const days = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
  ]

  return days[new Date(date).getDay()]
}

export const generateSlots = (date) => {
  const dayName = getDayName(date)

  const slots = schedules[dayName] || []

  return slots
}