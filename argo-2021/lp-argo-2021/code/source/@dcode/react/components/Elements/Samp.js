import React from 'react';
import * as is from '@dcode/utils/is';

export const renderSamp = (value, props) => {
	if (is.string(value)) {
		return <samp {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <samp {...props}>{value}</samp>;
};

export default renderSamp;
