import { memo, type FC } from 'react'
import styles from './Button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  custom?: 'bg' | 'sm',
}

const Button: FC<IButtonProps> = memo(({children, type, onClick, disabled}) => {

  return (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick} 
        className={styles.button}
    >
      {children}
    </button>
  )
})

export default Button
