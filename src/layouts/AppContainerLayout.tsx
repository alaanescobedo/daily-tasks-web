import { NavLink } from 'react-router-dom'
import styles from './AppContainerLayout.module.css'

interface Props {
  children: React.ReactNode
}

export const AppContainerLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.super_container}>
      <div className={styles.container}>
        {children}
      </div>
      <div className={styles.return_container}>
        <NavLink to='/' className={styles.return}>
          Return
        </NavLink>
      </div>
    </div>
  )
}