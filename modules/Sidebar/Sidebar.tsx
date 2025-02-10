import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { getMenu } from '@/api/menu';

export default async function Sidebar({ ...otherProps }: SidebarProps) {
	const firstCategory = 0;
	const menu = await getMenu(firstCategory);

	return (
		<div {...otherProps}>
			<Menu menuData={menu} firstCategory={firstCategory} />
		</div>
	)
}