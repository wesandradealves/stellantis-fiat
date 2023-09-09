import { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';
import { brand, ui } from '@/project/assets';
import { brandLinks, BRAND_NAME, PAGE_TITLE } from '@/project/constants';
import Store from '@/project/store/Store';
import { useMobxStores } from '@/project/store';
import { HamburguerButton } from '@/prox/components/index';
import { observer } from 'mobx-react-lite';
import scssStyles from '@/prox/utils/scssStyles';
import useDocumentScrollThrottled from '@/prox/hooks/useDocumentScrollThrottled';
import DataLayer from '@/prox/utils/DataLayer';

const Header: FC = observer(() => {
	const store: Store = useMobxStores();
	const [shouldHideHeader, setShouldHideHeader] = useState(false);

	const MINIMUM_SCROLL = 80;
	const TIMEOUT_DELAY = 400;

	let timeout: NodeJS.Timeout;

	useDocumentScrollThrottled((callbackData) => {
		const { previousScrollTop, currentScrollTop } = callbackData;
		const isScrolledDown = previousScrollTop < currentScrollTop;
		const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			setShouldHideHeader(isScrolledDown && isMinimumScrolled);
		}, TIMEOUT_DELAY);
	});

	return (
		<div className={scssStyles([styles.container, shouldHideHeader ? styles.hide : ''])}>
			<div className={scssStyles([styles.mobile])}>
				<HamburguerButton
					title="Abrir menu"
					handleClick={() => {
						const open = !store.menuOpen;
						store.setMenuOpen(open);
            DataLayer.toggleEvent({
              elementCategory: 'icone',
              element: 'menu',
              pageSection: 'header',
              pageSubsection: 'menu',
            }, open);
					}}>
					<img src={ui.menuClosed} alt="Menu" />
				</HamburguerButton>
				<div>
					<Link href={brandLinks.mainUrl}>
						<a title={BRAND_NAME}>
							<img width={28.26} height={20.87} src={brand.logoHeader} alt={BRAND_NAME} className={styles.logoHeader} />
						</a>
					</Link>
					<Link href="/">
						<a title={PAGE_TITLE} className={styles.title}>
							<img src={brand.logoHeader} alt="" />
						</a>
					</Link>
				</div>
				<div />
			</div>
		</div>
	)
});

export default Header;
