var canvas = document.getElementById("canvas-1");
canvas.setAttribute("style", "background-color: yellow;");

// The amount of circles we want to make:
var count = 10;

// Create a symbol, which we will use to place instances of later:
var path = new Path.Circle({
	center: [0, 0],
	radius: 300,
	fillColor: 'black',
	blendMode: 'difference'
});

var text = new PointText({
    point: [520, 350],
    content: 'Barni.js',
    fillColor: 'yellow',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 100,
});

text.name = 'fixed';


//negyzet.opacity = 0;

var symbol = new Symbol(path);

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
	// The center position is a random point in the view:
	var center = Point.random() * view.size;
	var placedSymbol = symbol.place(center);
	placedSymbol.scale(i / count);
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
	// Run through the active layer's children list and change
	// the position of the placed symbols:
	for (var i = 0; i < count; i++) {
		var item = project.activeLayer.children[i];
		
		if (item.name != 'fixed') {
			// Move the item 1/20th of its width to the right. This way
			// larger circles move faster than smaller circles:
			item.position.x += item.bounds.width / 60;

			// If the item has left the view on the right, move it back
			// to the left:
			if (item.bounds.left > view.size.width) {
				item.position.x = -item.bounds.width;
			}
		}
		
	}
}