import { getMenu } from '@/api/menu';
import { getPage } from '@/api/page';
import { getProducts } from '@/api/products';
import { Metadata } from 'next'
import { notFound } from 'next/navigation';
import { TopPageComponent } from "@/page-components";
import { firstLevelMenu } from '@/helpers/helpers';

export const metadata: Metadata = {
	title: 'Страница'
}

export async function generateStaticParams() {
	const menu = await getMenu(0);
	return menu.flatMap(item => item.pages.map(page => ({ alias: page.alias })))
}

export default async function TopPage({
	params
}: { params: Promise<{ alias: string }> }) {
	const alias = (await params).alias;
	const firstCategoryItem = firstLevelMenu.find(m => m.route == alias);
	const page = await getPage(alias);
	const products = await getProducts(page?.category);
	if (!page) {
		notFound();
	}

	return (
		<TopPageComponent
			page={page}
			products={products}
			firstCategory={firstCategoryItem?.id}
		/>
	)
}
