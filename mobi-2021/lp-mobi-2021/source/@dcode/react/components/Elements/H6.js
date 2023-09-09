import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH6 = (value, props) => {
	if (is.string(value)) {
		return <h6 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h6 {...props}>{value}</h6>;
};

export default renderH6;
