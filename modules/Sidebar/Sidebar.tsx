import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { getMenu } from '@/api/menu';
import Logo from '../app-logo.svg';

export default async function Sidebar({ className, ...otherProps }: SidebarProps) {
	const firstCategory = 0;
	const menu = await getMenu(firstCategory);

	return (
		<div {...otherProps} className={cn(className, styles.sidebar)}>
			<Logo className={styles.logo} />
			<div>Поиск</div>
			<Menu menuData={menu} firstCategory={firstCategory} />
		</div>
	)
}