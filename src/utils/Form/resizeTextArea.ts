import { ChangeEvent } from 'react'

export const resizeTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
  const textarea = e.target
  textarea.style.height = '2.6rem'
  if (textarea.scrollHeight < textarea.offsetHeight) return

  const scrollHeight = textarea.scrollHeight
  textarea.style.height = `${scrollHeight}px`
}