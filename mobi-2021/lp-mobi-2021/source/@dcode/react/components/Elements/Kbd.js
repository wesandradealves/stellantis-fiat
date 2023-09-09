import React from 'react';
import * as is from '@dcode/utils/is';

export const renderKbd = (value, props) => {
	if (is.string(value)) {
		return <kbd {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <kbd {...props}>{value}</kbd>;
};

export default renderKbd;
