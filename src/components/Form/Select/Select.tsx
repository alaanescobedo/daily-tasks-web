import { ChangeEvent } from 'react'
import sharedStyles from '../shared/styles.module.css'

export type PriorityId = 'low' | 'medium' | 'high'
export type WeekdaysId = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export type WeekdaysLabel = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'Today' | 'Tomorrow'
export type PriorityLabel = 'Low' | 'Medium' | 'High'

interface Props {
  id: string
  options: Array<{ id: PriorityId | WeekdaysId, label: PriorityLabel | WeekdaysLabel }>
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  defaultValue: string
}

export const Select = ({ id, options, handleChange, defaultValue }: Props): JSX.Element => {
  return (
    <select name={id} id={id} className={`${sharedStyles.input_select}`} onChange={handleChange} defaultValue={defaultValue}>
      {options.map((option, index) => (
        <option key={index} value={option.id}>{option.label}</option>
      ))}
    </select>
  )
}