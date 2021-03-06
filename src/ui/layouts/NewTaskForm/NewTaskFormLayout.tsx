import { AppContainerLayout } from '@layouts'
import { KeyboardEvent } from 'react'
import styles from './NewTaskFormLayout.module.css'

export interface NewTaskFormLayoutProps {
  children: React.ReactNode
  id: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleKeyDown?: (event: KeyboardEvent<HTMLFormElement>) => void
  title?: string
  sendLabel?: string
}

export const NewTaskFormLayout = ({ children, id, handleSubmit, handleKeyDown, title = 'New Task', sendLabel = 'Send' }: NewTaskFormLayoutProps): JSX.Element => {
  return (
    <AppContainerLayout>
      <h1 className={styles.heading}>{title}</h1>
      <form className={styles.form} onSubmit={handleSubmit} id={id} onKeyDown={handleKeyDown}>
        {children}
        <button type='submit' className={styles.input_submit}>{sendLabel}</button>
      </form>
    </AppContainerLayout>
  )
}
