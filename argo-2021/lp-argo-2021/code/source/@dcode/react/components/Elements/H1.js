import React from 'react';
import * as is from '@dcode/utils/is';

export const renderH1 = (value, props) => {
	if (is.string(value)) {
		return <h1 {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <h1 {...props}>{value}</h1>;
};

export default renderH1;
