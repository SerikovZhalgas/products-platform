import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames';

export const Tag = ({ children, className, href, size = 's', color = 'ghost', ...otherProps }: TagProps) => {
	return (
		<div
			className={cn(styles.tag, className, styles[size], styles[color])}
			{...otherProps}
		>
			{href ? <a>{children}</a> : children}
		</div>
	)
}