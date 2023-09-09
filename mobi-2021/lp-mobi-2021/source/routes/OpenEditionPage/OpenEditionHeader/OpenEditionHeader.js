import React from 'react';
import cls from 'classnames';
import Fade from 'react-reveal/Fade';

export const OpenEditionHeader = (({
	className,
	classes,
	title,
	image,
	mobile,
	...props
}) => {
	return (
		<header
			{...props}
			className={cls(classes.openEditionHeader, className)}>
			<div className={classes.openEditionHeaderWrapper}>
				<h3 className={classes.openEditionHeaderTitle}>
					<Fade>
						<span className={classes.openEditionHeaderTitleText} dangerouslySetInnerHTML={{
							__html: title,
						}} />
					</Fade>
				</h3>
			</div>
		</header>
	);
});

export default React.memo(OpenEditionHeader);
