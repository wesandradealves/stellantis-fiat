import React from 'react';
import * as is from '@dcode/utils/is';

export const renderSpan = (value, props) => {
	if (is.string(value)) {
		return <span {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <span {...props}>{value}</span>;
};

export default renderSpan;
