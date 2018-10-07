const app = new PIXI.Application();

app.obj = {};
app.totTime = 0;

document.body.appendChild(app.view);

PIXI.loader.add('duck', 'res/duck.png').load((loader, resources) => {
	let duck = new PIXI.Sprite(resources.duck.texture);

	duck.x = app.renderer.width / 2;
	duck.y = app.renderer.height / 2;

	duck.anchor.x = 0.5;
	duck.anchor.y = 0.5;
	duck.scale.x = 0.5;
	duck.scale.y = 0.5;

	duck.addListener("mousedown", evt=>{
		console.log("click!")
	})

	app.stage.addChild(duck);
	app.obj.duck = duck;

	app.ticker.add(() => {
		duck.rotation += 0.01;
	});
});

// let g = new PIXI.Graphics;
// app.obj.dot = g;
// app.stage.addChild(g);
// g.beginFill(0xFF0000, 1);
// g.drawCircle(0, 0, 20);
// g.endFill();

// app.ticker.add(() => {
// 	app.totTime += app.ticker.elapsedMS * 0.01;
// 	app.obj.dot.x = Math.sin(app.totTime) * 100  + 200;
// 	app.obj.dot.y = 200;
// });