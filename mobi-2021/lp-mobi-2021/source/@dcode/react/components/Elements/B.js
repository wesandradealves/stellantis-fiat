import React from 'react';
import * as is from '@dcode/utils/is';

export const renderB = (value, props) => {
	if (is.string(value)) {
		return <b {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <b {...props}>{value}</b>;
};

export default renderB;
