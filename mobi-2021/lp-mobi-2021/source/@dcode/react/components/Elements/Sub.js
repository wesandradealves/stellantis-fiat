import React from 'react';
import * as is from '@dcode/utils/is';

export const renderSub = (value, props) => {
	if (is.string(value)) {
		return <sub {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <sub {...props}>{value}</sub>;
};

export default renderSub;
