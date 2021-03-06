// TODO: Update types and interfaces
import { forwardRef } from 'react'
import { InputGroup } from '../Input'
import { CheckboxBase } from './BaseCheckbox/CheckboxBase'

export interface InputCheckboxProps {
  idIcon?: string
}

export const CheckboxField = forwardRef(({
  id,
  name,
  error,
  hint,
  label,
  align,
  gap,
  vertical,
  required,
  size,
  labelPosition,
  hideErrorField = false,
  keepHint = false,
  ...props
}: any, ref: any): JSX.Element => {
  const fieldProps = {
    id,
    name,
    error,
    hint,
    label,
    required,
    size
  }

  const stackProps = {
    gap,
    align,
    vertical
  }

  const baseProps = {
    size,
    ...props
  }

  return (
    <InputGroup
      {...fieldProps}
      {...stackProps}
      labelPosition={labelPosition}
      hideErrorField={hideErrorField}
      keepHint={keepHint}
    >
      <CheckboxBase {...baseProps} ref={ref} />
    </InputGroup>
  )
})
