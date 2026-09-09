import * as React from 'react'
import { FC, PropsWithChildren } from "react"
import { Button as BaseButton } from '@base-ui/react/button'

import styles from './button.module.scss'

const Button: FC<PropsWithChildren> = ({children}) =>
  <BaseButton className={styles.Button}>
    {children}
  </BaseButton>


export default Button