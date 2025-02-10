'use client'

import { Button, Htag, P, Rating, Tag } from '@/components';
import { useState } from 'react';

export default function Home() {
	const [rating, setRating] = useState<number>(4);

	return (
		<main>
			<Htag tag="h1">Заголовок</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size="l">Большой</P>
			<P>Средний</P>
			<P size="s">Маленький</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			{/* <Rating rating={rating} setRating={setRating} isEditable /> */}
		</main>
	)
}
