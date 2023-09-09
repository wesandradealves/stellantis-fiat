import React from 'react';

import styles from './WhatsappBtn.scss';

export const WhatsappBtn = () => {
	return (
		<a
			/* ALTERAR A API PARA A API DA FIAT */
			href='https://wa.me/message/SLO3XBN7D3YBD1'
			className={styles.whatsapp_float}
			target='_blank'
			rel='noopener noreferrer'>
			<img src='assets/icons/whatsappIcon.svg' className='whatsapp_flag' alt='teste' />
			<span>Negociar com uma concessionária</span>
		</a>
	);
};

export default WhatsappBtn;

// export function WhatsappBtn() {
// 	return (
// 		<a
// 			/* ALTERAR A API PARA A API DA FIAT */
// 			href='https://wa.me/message/E7NFBR2OBZBWN1'
// 			className={styles.whatsapp_float}
// 			target='_blank'
// 			rel='noopener noreferrer'>
// 			<img src='teste' className='whatsapp_flag' alt='teste' />
// 			<span>Converse com a Fiat</span>
// 		</a>
// 	);
// }
