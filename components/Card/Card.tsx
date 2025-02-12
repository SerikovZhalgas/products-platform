import { CardProps } from './Card.props'
import styles from './Card.module.css'
import cn from 'classnames';

export const Card = ({ children, color = 'blue', className, ...otherProps }: CardProps) => {
	return (
		<div
			className={cn(styles.card, className, styles[color])}
			{...otherProps}
		>
			{children}
		</div>
	)
}