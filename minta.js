//This is a propety of Barnabas Pozsgai made with Paper.js
var point1, point2;
var path;
var random1, random2, random3;
var circle, colorCircle;

function run(){
	point1 = new Point(50,50);
	point2 = new Point(100,100);
	path = new Path();
	random1 = Math.floor(Math.random() * 1000);
	random2 = Math.floor(Math.random() * 500);
	random3 = Math.floor(Math.random() * 10);
	circle = new Path.Circle(point1, random3);
	path.strokeColor = 'black';
	circle.fillColor = 'black';
	
	for (var i = 0; i < 50; i++){
		path.add(point1);
		path.add(point2);
		point1 = point2;
		point2 = new Point(random1,random2);
		path.add(point1);
		path.add(point2);
		random1 = Math.floor(Math.random() * 1000);
		random2 = Math.floor(Math.random() * 500);
		random3 = Math.floor(Math.random() * 15);
		circle = new Path.Circle(point1, random3);
		circle.fillColor = 'black';
	}
}

var point3;
var random4, random5, random6;

function randomColor(){

	for (var i = 0; i < 50; i++){	
		random4 = Math.floor(Math.random() * 1000);
		random5 = Math.floor(Math.random() * 500);
		random6 = Math.floor(Math.random() * 50);
		
		point3 = new Point(random4, random5);
		colorCircle = new Path.Circle(point3, random6);
		colorCircle.fillColor = getRandomColor();
	}
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
  	var color = '#';
  	for (var i = 0; i < 6; i++) {
    	color += letters[Math.floor(Math.random() * 16)];
	}
  		return color;
	}

function background(){
	var hatter = new Path.Rectangle({
    point: [0, 0],
    size: [view.size.width, view.size.height],
    strokeColor: 'white',
    selected: true
	});
	hatter.sendToBack();
	hatter.fillColor = '#fff';
}
////circle2.blendMode = 'multiply';

background();
randomColor();
run();
