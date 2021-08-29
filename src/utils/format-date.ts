import { format } from 'date-fns'

export default function formatDate(date: Date): string {
  const newDate = format(date, "MMM' 'dd', 'yyyy")

  return newDate
}
