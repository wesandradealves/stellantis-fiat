import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH4 = (value, props) => {
	if (is.string(value)) {
		return <h4 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h4 {...props}>{value}</h4>;
};

export default renderH4;
