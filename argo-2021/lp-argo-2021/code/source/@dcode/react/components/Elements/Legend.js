import React from 'react';
import * as is from '@dcode/utils/is';

export const renderLegend = (value, props) => {
	if (is.string(value)) {
		return <legend {...props} dangerouslySetInnerHTML={{ __html: value || '&nbsp;' }} />;
	}
	return <legend {...props}>{value}</legend>;
};

export default renderLegend;
