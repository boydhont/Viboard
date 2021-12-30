function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}

//https://github.com/zenozeng/p5.js-pdf

let graphicsBuffer; //The buffer
let sheet; //The data
let pdf; //The pdf file

//TODO create parent canvas with grey background, so canvas is always in the center

function setup() {
	//Setup canvas
	createCanvas(windowWidth,windowHeight,P2D);
	
	//Setup sheet from Data
	sheet = debugSheet(); //Load default data 
	Render.initialiseSheet(sheet); //Create graphic
	
	//Setup PDF parameters
	pdf = createPDF();
    pdf.beginRecord();
}

function draw() {
	//Render canvas
	background(230); //TODO make grey
	
	//Render sheet in graphicsbuffer
	Render.sheet(sheet);
	
	//Render Graphicsbuffer
	const scaleFactor = getFitScaleFactor({width: width, height: height}, {width: graphicsBuffer.width, height: graphicsBuffer.height});
	imageMode(CENTER);
	image(
		graphicsBuffer, 
		width / 2,
		height / 2,
		graphicsBuffer.width*scaleFactor,
		graphicsBuffer.height*scaleFactor,
	);
}

function keyPressed() {
	if(keyCode === 73) save(graphicsBuffer, "croppedCanvas.jpg"); //i-key
	if(keyCode === 83) pdf.save(); //s-key
	if(keyCode === 79) {openFile(); Render.initialiseSheet(sheet);} //o-key
	//if(keyCode === 69) saveJSON(JSON.stringify(sheet, null, 2), "sheet.json"); //e-key
}

function openFile() {
		let reader = new FileReader();
		let fileSelector = document.createElement('input');
		fileSelector.setAttribute('type', 'file');
		fileSelector.onchange = e => { 
				let file = e.target.files[0]; 
				reader.readAsText(file,'UTF-8');
				reader.onload = readerEvent => 
				{
					let content = readerEvent.target.result;
					sheet = JSON.parse(content);
				}
		}
		fileSelector.click();
}

const getFitScaleFactor = (containerDimensions, mediaDimensions) => { //TODO has error with differently sized media
	let IsXAxisShortest = false;
	if(containerDimensions.width <= containerDimensions.height) IsXAxisShortest = true; //check if x or y is defining
	if(IsXAxisShortest) return containerDimensions.width/mediaDimensions.width;
	return containerDimensions.height/mediaDimensions.height
}