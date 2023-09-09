export function ContentFile(loader) {
	this.name = loader.name;
	this.url = loader.url;
	this.content = loader.content;
	this.meta = loader.meta;
	this.type = loader.type;
	this.options = loader.options;
}

export default ContentFile;
