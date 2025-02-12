'use client'

import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuItem, MenuItem, PageItem } from '@/interfaces/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { firstLevelMenu } from '@/helpers/helpers';

interface MenuProps {
	menuData: MenuItem[],
	firstCategory: number,
}

export const Menu = ({ menuData, firstCategory }: MenuProps) => {
	const pathname = usePathname();
	const [menu, setMenu] = useState(menuData);

	const openSecondLevel = (secondCategory: string) => {
		setMenu(prev =>
			menu.map(m =>
				m._id.secondCategory === secondCategory
					? { ...m, isOpened: !m.isOpened }
					: m
			)
		)
	}

	const buildFirstLevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<Link href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id === firstCategory,
							})}>
								{m.icon}
								<span>
									{m.name}
								</span>
							</div>
						</Link>
						{m.id === firstCategory && buildSecondLevel(m)}
					</div>
				))}
			</>
		)
	}

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => {
					if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
						m.isOpened = true;
					}
					return (
						<div key={m._id.secondCategory}>
							<div
								className={styles.secondLevel}
								onClick={() => openSecondLevel(m._id.secondCategory)}
							>
								{m._id.secondCategory}
							</div>
							<div className={cn(styles.secondLevelBlock, {
								[styles.secondLevelBlockOpened]: m.isOpened,
							})}>
								{buildThirdLevel(m.pages, menuItem.route)}
							</div>
						</div>
					)
				})}
			</div>
		)
	}

	const buildThirdLevel = (pages: PageItem[], route: string) => {
		return pages.map(p => (
			<Link href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
				[styles.thirdLevelActive]: `/${route}/${p.alias}` === pathname
			})} key={p._id}>
				{p.category}
			</Link>
		))
	}

	return (
		<div className={styles.menu}>
			{buildFirstLevel()}
		</div>
	)
}