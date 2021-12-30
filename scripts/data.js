const debugSheet = () => new Sheet(
	new Style(
		{
			background: "#ffffff",
			text: "#000000",
		}
	), 
	new Layout(
		{
			width: 600*2,
			height: 600*2,
		},
		[
			new Container(
				{
					width: 320*2,
					height: 540*2,
				},
				{
					x: 10*2,
					y: 10*2,
				},
				ContainerType.drawing,
				ContainerCropping.center,
				ContainerTextBoxOrientation.bottom,
				40*2
			),
			new Container(
				{
					width: 100*2,
					height: 100*2,
				},
				{
					x: 340*2,
					y: 10*2,
				},
				ContainerType.product,
				ContainerCropping.top,
				ContainerTextBoxOrientation.right,
				150*2
			),
			new Container(
				{
					width: 100*2,
					height: 100*2,
				},
				{
					x: 340*2,
					y: 120*2,
				},
				ContainerType.product,
				ContainerCropping.top,
				ContainerTextBoxOrientation.right,
				150*2
			),
			new Container(
				{
					width: 100*2,
					height: 100*2,
				},
				{
					x: 340*2,
					y: 230*2,
				},
				ContainerType.product,
				ContainerCropping.top,
				ContainerTextBoxOrientation.right,
				150
			),
			new Container(
				{
					width: 100*2,
					height: 100*2,
				},
				{
					x: 340*2,
					y: 340*2,
				},
				ContainerType.product,
				ContainerCropping.top,
				ContainerTextBoxOrientation.right,
				150*2
			),
			new Container(
				{
					width: 100*2,
					height: 100*2,
				},
				{
					x: 340*2,
					y: 450*2,
				},
				ContainerType.product,
				ContainerCropping.top,
				ContainerTextBoxOrientation.right,
				150*2
			),
		],
	), 
	new Content(
 		new SheetInfo(),
		[
			new Drawing(
				new Media(
					MediaType.webImage,
					"sheets/default/image/0.jpg",
				),
				new DrawingInfo(
					"Example Living Room",
					"No Scale"
				),
			),
		],
		[
			new Product(
				new Media(
					MediaType.webImage,
					"sheets/default/image/1.jpg"
				),
				new ProductInfo(
					"Furniture",
					"Name of Object",
					"Lorem ipsum dalem edit",
					"Vendor or simular",
				),
			),
			new Product(
				new Media(
					MediaType.webImage,
					"sheets/default/image/2.jpg"
				),
				new ProductInfo(
					"Furniture",
					"Name of Object",
					"Lorem ipsum dalem edit",
					"Vendor or simular",
				),
			),
			new Product(
				new Media(
					MediaType.webImage,
					"sheets/default/image/3.jpg"
				),
				new ProductInfo(
					"Furniture",
					"Name of Object",
					"Lorem ipsum dalem",
					"Vendor or simular",
				),
			),
			new Product(
				new Media(
					MediaType.webImage,
					"sheets/default/image/4.jpg"
				),
				new ProductInfo(
					"Furniture",
					"Name of Object",
					"Lorem ipsum dalem edit",
					"Vendor or simular",
				),
			),
			new Product(
				new Media(
					MediaType.webImage,
					"sheets/default/image/5.jpg"
				),
				new ProductInfo(
					"Furniture",
					"Name of Object",
					"Lorem ipsum dalem edit",
					"Vendor or simular",
				),
			),
		],
	),
);