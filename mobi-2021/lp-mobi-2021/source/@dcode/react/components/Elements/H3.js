import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH3 = (value, props) => {
	if (is.string(value)) {
		return <h3 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h3 {...props}>{value}</h3>;
};

export default renderH3;
