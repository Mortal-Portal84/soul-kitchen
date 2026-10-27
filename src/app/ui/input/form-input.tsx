import { ComponentProps, FC } from "react"
import { Input } from '@base-ui/react/input'

import styles from './form-input.module.scss'

type Props = {
  label?: string
}

const FormInput: FC<ComponentProps<typeof Input> & Props> = ({label, ...rest}) => {
  return (
    <label className={styles.Label}>
      {label}
      <Input className={styles.Input} {...rest}/>
    </label>
  )
}

export default FormInput
