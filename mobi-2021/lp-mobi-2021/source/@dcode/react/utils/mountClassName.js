export const mountClassName = (className) => (suffix = '', value = false) => ({
	[`${className}${suffix}`]: !!className,
});

export default mountClassName;
