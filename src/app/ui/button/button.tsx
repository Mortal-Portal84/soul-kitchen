import * as React from 'react'
import { ComponentProps, FC } from "react"
import { Button as BaseButton } from '@base-ui/react/button'

import styles from './button.module.scss'

const Button: FC<ComponentProps<typeof BaseButton>> = ({children, className, ...props}) =>
  <BaseButton className={className ?? styles.Button} {...props}>
    {children}
  </BaseButton>


export default Button
