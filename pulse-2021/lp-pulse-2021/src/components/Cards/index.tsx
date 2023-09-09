import { FC } from 'react';
import styles from './Cards.module.scss';
import { CardsItemsProps } from '@/models';
import PulseStore from '@/store/PulseStore';
import { useMobxStores } from '@/store';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/utils/scssStyles';
import { Chevron } from '../SvgComponents';
import { ResponsiveLazyImage, ScrollToAnchor } from '@/components';
import { dataMenuLabels } from '@/mocks/menu';
import DataLayer from '@/utils/DataLayer';

export interface CardsProps {
	items: CardsItemsProps[],
}

const Cards: FC<CardsProps> = observer(({ items }) => {
	const store: PulseStore = useMobxStores();

	return (
		<div className={styles.positionFix}>
			<div className={styles.container}>
				<ScrollToAnchor
					reference={dataMenuLabels()[1]}
					className={scssStyles([
						styles.scrollCta,
						styles.scrollCtaHorizontal,
					])}
					pageSubsection="fiat-pulse"
					title="Scroll para saber mais"
				>
					<p>Scroll para saber mais</p>
					<div>
						<Chevron color="#FFBA0D" />
						<Chevron color="#FFBA0D" />
						<Chevron color="#FFBA0D" />
					</div>
				</ScrollToAnchor>
				<div className={styles.cards}>
					{items.map((item, index) => {
						return (
							<button
								key={`desktop-stories-button-${index}`}
								onClick={() => {
									DataLayer.clickEvent({
										element: item.title,
										elementCategory: 'card',
										pageSection: 'conteudo',
										pageSubsection: 'fiat-pulse',
									});
									store.setMainDisplayIndex(index + 1);
								}}
								className={styles.unitaryBox}
								title={item.title}
							>
								<div
									id={'thumb' + item.id}
									className={scssStyles([
										styles.externalBox,
										index === (store.mainDisplayIndex - 1) ? styles.selected : ''
									])}
								>
									<div className={styles.internalBox}>
										{item.title2 != "" ?
											<h1 className={styles.cardTitle}>
												{`${item.title} ${item.title2}`}
											</h1>
											: <h1 className={styles.cardTitle}>
												{`${item.title}`}
											</h1>}
										<ResponsiveLazyImage
											alt={`Card ${item.title}`}
											src={item.src.fullPath}
											src2={item.src.fullPath2x}
											src3={item.src.fullPath3x}
										/>
										<div className={styles.gradient} />
										<div
											className={styles.addCross}
											style={{ opacity: store.mainDisplayIndex !== index + 1 ? 1 : 0 }}
										/>
									</div>
								</div>
							</button>
						)
					})
					}
				</div>
			</div>
		</div>
	);
});

export default Cards;