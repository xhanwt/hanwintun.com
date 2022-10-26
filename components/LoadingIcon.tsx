import * as React from 'react'
import cs from 'classnames'
import styles from './styles.module.css'

export const LoadingIcon = (props) => {
  const { className, ...rest } = props
  return (
    <div
      className={cs(styles.loadingIcon, className)}
      {...rest}
      viewBox='0 0 24 24'
    >
    </div>
  )
}
