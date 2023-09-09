import React from 'react';
import * as is from '@dcode/utils/is';

export const renderMark = (value, props) => {
	if (is.string(value)) {
		return <mark {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <mark {...props}>{value}</mark>;
};

export default renderMark;
