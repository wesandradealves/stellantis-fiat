import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH5 = (value, props) => {
	if (is.string(value)) {
		return <h5 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h5 {...props}>{value}</h5>;
};

export default renderH5;
