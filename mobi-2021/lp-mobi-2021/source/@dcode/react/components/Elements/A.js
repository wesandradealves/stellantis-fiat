import React from 'react';
import * as is from '@dcode/utils/is';

export const renderA = (value, props) => {
	if (is.string(value)) {
		return <a {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <a {...props}>{value}</a>;
};

export default renderA;
