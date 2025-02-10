import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames';

export const Header = ({ ...otherProps }: HeaderProps) => {
	return (
		<div {...otherProps}>
			Header
		</div>
	)
}