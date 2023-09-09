import React from 'react';
import * as is from '@dcode/utils/is';

export const renderButton = (value, props) => {
	if (is.string(value)) {
		return <button {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <button {...props}>{value}</button>;
};

export default renderButton;
