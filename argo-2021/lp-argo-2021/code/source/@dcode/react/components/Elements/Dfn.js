import React from 'react';
import * as is from '@dcode/utils/is';

export const renderDfn = (value, props) => {
	if (is.string(value)) {
		return <dfn {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <dfn {...props}>{value}</dfn>;
};

export default renderDfn;
