import React from 'react';
import * as is from '@dcode/utils/is';

export const renderAbbr = (value, props) => {
	if (is.string(value)) {
		return <abbr {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <abbr {...props}>{value}</abbr>;
};

export default renderAbbr;
