import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AuthLayout as AuthLayoutComponent, AuthLayoutProps } from './AuthLayout'

import styles from '../App.module.css'

const AuthLayoutStory: ComponentMeta<typeof AuthLayoutComponent> = {
  title: 'Layout/AuthLayout',
  component: AuthLayoutComponent
}
export default AuthLayoutStory

const Template: ComponentStory<typeof AuthLayoutComponent> = (args) => (
  <span className={styles.app_container}>
    <AuthLayoutComponent {...args} />
  </span>
)

export const AuthLayout = Template.bind({})
const AuthLayoutArgs: AuthLayoutProps = {
  children: <span style={{ color: 'white', flex: '1' }}>ʕ•́ᴥ•̀ʔっayo!</span>,
  navigateTo: '/',
  title: 'AuthLayout'
}
AuthLayout.args = AuthLayoutArgs
