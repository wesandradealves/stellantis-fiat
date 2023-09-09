import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH2 = (value, props) => {
	if (is.string(value)) {
		return <h2 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h2 {...props}>{value}</h2>;
};

export default renderH2;
