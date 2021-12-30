const Render = {
	initialiseSheet: (sheet) => {
		graphicsBuffer = createGraphics(
			sheet.layout.dimensions.width, 
			sheet.layout.dimensions.height, 
			P2D
		);
	},
	sheet: (sheet) => {
		graphicsBuffer.background(sheet.style.colors.background);
		let drawingCount = 0; 
		let productCount = 0;
		for(let i=0; i<sheet.layout.containers.length; i++){
			const container = sheet.layout.containers[i];
			if(container.media.type === ContainerType.drawing){Render.drawing(container, sheet.content.drawings[drawingCount]); drawingCount++;}
			else if(container.media.type === ContainerType.product){Render.product(container, sheet.content.products[productCount]); productCount++;}
			//Render.containerFrame(container); //Todo Remove this
		}
	},
	drawing: (container, drawing) => {
		if(container === undefined || drawing === undefined) return;
		Render.media(container, drawing.media);
		Render.containerInfo(container, Object.values(drawing.drawingInfo).join("\n"));
	},
	product: (container, product) => {
		if(container === undefined || product === undefined) return;
		Render.media(container, product.media);
		Render.containerInfo(container, Object.values(product.productInfo).join("\n")); //TODO Draw the text
	},
	media: (container, media) => {
		if(media.type === MediaType.webImage) Render.mediaWebImage(container, media);
		//TODO add for more types
	},
	containerInfo: (container, displayText) => {
		graphicsBuffer.fill(0); //TODO do styling over sheet
		graphicsBuffer.noStroke();
		graphicsBuffer.textSize(12);
		const padding = 10;
		graphicsBuffer.rectMode(CORNER);
		if(container.textBox.orientation === ContainerTextBoxOrientation.right){
			graphicsBuffer.text(
				displayText,
				container.media.location.x + container.media.dimensions.width + padding,
				container.media.location.y + padding,
				container.textBox.width - 2*padding,
				container.media.dimensions.height - 2*padding,
			);
		} else if(container.textBox.orientation === ContainerTextBoxOrientation.bottom){
			graphicsBuffer.text(
				displayText,
				container.media.location.x + padding,
				container.media.location.y + container.media.dimensions.height + padding,
				container.media.dimensions.width - 2*padding,
				container.textBox.width - 2*padding,
			);
		}
	},
	mediaWebImage: (container, media) => {
		if(typeof media.data != "object") media.data = loadImage(media.data);
		if(container.media.cropping === ContainerCropping.center){
			const scaleFactor = getFitScaleFactor(container.media.dimensions, {width: media.data.width, height: media.data.height});
			graphicsBuffer.imageMode(CENTER);
			graphicsBuffer.image(
				media.data, 
				container.media.location.x + (container.media.dimensions.width / 2),
				container.media.location.y + (container.media.dimensions.height / 2),
				media.data.width*scaleFactor,
				media.data.height*scaleFactor,
			);
		}else if(container.media.cropping === ContainerCropping.top){
			const scaleFactor = getFitScaleFactor(container.media.dimensions, {width: media.data.width, height: media.data.height});
			graphicsBuffer.imageMode(CORNER);
			graphicsBuffer.image(
				media.data,
				container.media.location.x,
				container.media.location.y,
				media.data.width*scaleFactor,
				media.data.height*scaleFactor,
			);
		}
		if(container.media.cropping === ContainerCropping.stretch){
			graphicsBuffer.imageMode(CORNER);
			graphicsBuffer.image(
				media.data, 
				container.media.location.x,
				container.media.location.y, 
				container.media.dimensions.width, 
				container.media.dimensions.height
			);
		}
	},
	containerFrame: (container) => { //TODO add outline color by style
		//Color and Styling
		graphicsBuffer.stroke(255,0,0);
		graphicsBuffer.strokeWeight(2);
		graphicsBuffer.noFill();
		//Render Media Container
		graphicsBuffer.rectMode(CORNER);
		graphicsBuffer.rect(
			container.media.location.x,
			container.media.location.y,
			container.media.dimensions.width,
			container.media.dimensions.height,
		);
		//Render TextBox Container
		if(container.textBox.orientation === ContainerTextBoxOrientation.bottom) graphicsBuffer.rect(
			container.media.location.x,
			container.media.location.y + container.media.dimensions.height,
			container.media.dimensions.width,
			container.textBox.width,
		);
		if(container.textBox.orientation === ContainerTextBoxOrientation.right) graphicsBuffer.rect(
			container.media.location.x + container.media.dimensions.width,
			container.media.location.y,
			container.textBox.width,
			container.media.dimensions.height,
		);
	}
}