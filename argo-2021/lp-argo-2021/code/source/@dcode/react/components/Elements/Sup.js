import React from 'react';
import * as is from '@dcode/utils/is';

export const renderSup = (value, props) => {
	if (is.string(value)) {
		return <sup {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <sup {...props}>{value}</sup>;
};

export default renderSup;
