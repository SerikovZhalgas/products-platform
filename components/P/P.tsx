import { PProps } from './P.props'
import styles from './P.module.css'
import cn from 'classnames';

export const P = ({ children, size = 'm', className, ...otherProps }: PProps) => {
	return (
		<p
			className={cn('', className, styles[size])}
			{...otherProps}
		>
			{children}
		</p>
	)
}