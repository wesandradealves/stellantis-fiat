import React from 'react';
import * as is from '@dcode/utils/is';

export const renderP = (value, props) => {
	if (is.string(value)) {
		return <p {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <p {...props}>{value}</p>;
};

export default renderP;
