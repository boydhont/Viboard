//Root Class

class Sheet{
	constructor (style, layout, content){
		this.style = style;
		this.layout = layout;
		this.content = content;
	}
}

//Style Classes

class Layout{
	constructor(dimensions, containers){
		this.dimensions = dimensions;
		this.containers = containers;
	}
}

class Container{
	constructor(dimensions, location, type, cropping, textBoxOrientation, textBoxWidth)
	{
		this.media = {
			dimensions: dimensions, 
			location: location,
			type: type,
			cropping: cropping,
		};
		this.textBox = {
			orientation: textBoxOrientation,
			width: textBoxWidth,
		};
	}
}

const ContainerType = {drawing: "drawing", product: "product"};
const ContainerCropping = {center: "center", crop: "crop", stretch: "stretch", top: "top"};
const ContainerTextBoxOrientation = {none: "none", bottom: "bottom", right: "right"};

class Style{
	constructor(colors){
		this.colors = colors; //colors in html
		//TODO fonts
	}
}

//Content Classes

class Content{
	constructor(sheetInfo, drawings, products){
		this.sheetInfo = sheetInfo;
		this.drawings = drawings;
		this.products = products;
	}
}

class SheetInfo{
	constructor(){
		//TODO fill with information
	}
}

class Drawing{
	constructor(media, drawingInfo){
		this.media = media; //Image, later support other data types
		this.drawingInfo = drawingInfo;
	}
}

class Media{
	constructor(type, data){
		this.type = type;
		this.data = undefined;
		if(this.type === MediaType.webImage) this.data = loadImage(data);
	}
}

const MediaType = {webImage: "webImage",} //TODO extend

class DrawingInfo{
	constructor(title, scale){
		this.title = title;
		this.scale = scale; //This is the display text
	}
}

class Product{
	constructor(media, productInfo){
		this.media = media;
		this.productInfo = productInfo;
	}
}

class ProductInfo{
	constructor(title, name, description, vendor){ //TODO check which ones are really important
		this.title = title;
		this.name = name;
		this.description = description;
		this.vendor = vendor;
	}
}