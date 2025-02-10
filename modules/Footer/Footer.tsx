import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames';
import classNames from 'classnames';
import { format } from 'date-fns';

export const Footer = ({ className, ...otherProps }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...otherProps}>
			<div>
				ZhalgasSerikov 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href="#" target='_blank'>Пользовательское соглашение</a>
			<a href="#" target='_blank'>Политика конфедициальности</a>
		</footer>
	)
}