export interface InputGroupProps {
  children: React.ReactNode
  label: string
  htmlFor: string
  className?: string
}

export const InputGroup = ({ children, label, htmlFor, className }: InputGroupProps): JSX.Element => {
  return (
    <div className={className}>
      {children}
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}
