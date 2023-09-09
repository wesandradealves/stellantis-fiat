import React, { Fragment, useState } from 'react';
import styles from './styles.scss';

export default function DisclaimerLgpd() {
	const [visible, setInvisible] = useState(true);
	const lgpd = 'LGPD_FIAT_ARGO';
	const checkLgpd = () => localStorage.setItem(lgpd, true);
	return (
		<div className={styles.ContainerBox} style={{ display: visible ? null : 'none' }}>
			{!localStorage.getItem(lgpd) ? (
				<div className='container'>
					<h3 className='title'>RESPEITAMOS A SUA PRIVACIDADE</h3>
					<div className='contentRow'>
						<h3 className='text'>
							Utilizamos cookies para garantir a melhor experiência em nosso site. Os cookies nos permitem fornecer
							funcionalidades como segurança, gerenciamento de rede e acessibilidade. Eles melhoram a usabilidade e o
							desempenho por meio de vários recursos, como reconhecimento de idioma, resultados de pesquisa e, assim,
							melhoram o que oferecemos a você. Nosso site também pode usar cookies de terceiros para enviar publicidade
							mais relevante para você. Se quiser saber mais sobre os cookies que usamos e como gerenciá-los, acesse
							nossa{' '}
							<a rel='noreferrer' target='_blank' href='https://www.fiat.com.br/politica-de-privacidade.html'>
								Política de Privacidade
							</a>
							.
						</h3>
						<button
							className='button'
							onClick={() => {
								setInvisible(false);
								checkLgpd();
							}}>
							FECHAR
						</button>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
}
