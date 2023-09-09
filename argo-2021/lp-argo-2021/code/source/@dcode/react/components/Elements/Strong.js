import React from 'react';
import * as is from '@dcode/utils/is';

export const renderStrong = (value, props) => {
	if (is.string(value)) {
		return <strong {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <strong {...props}>{value}</strong>;
};

export default renderStrong;
