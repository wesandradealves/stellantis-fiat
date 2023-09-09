import React from 'react';
import * as is from '@dcode/utils/is';

export const renderSmall = (value, props) => {
	if (is.string(value)) {
		return <small {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <small {...props}>{value}</small>;
};

export default renderSmall;
