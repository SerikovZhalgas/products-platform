import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'

export const Htag = ({ tag: HeadetTag, children }: HtagProps) => {
	return (
		<HeadetTag className={styles[HeadetTag]}>
			{children}
		</HeadetTag>
	)
}