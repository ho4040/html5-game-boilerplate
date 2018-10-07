const app = new PIXI.Application();

document.body.appendChild(app.view);

PIXI.loader.add('duck', 'res/duck.png').load((loader, resources) => {
    const duck = new PIXI.Sprite(resources.duck.texture);

    duck.x = app.renderer.width / 2;
    duck.y = app.renderer.height / 2;

    duck.anchor.x = 0.5;
    duck.anchor.y = 0.5;

    app.stage.addChild(duck);

    app.ticker.add(() => {
        duck.rotation += 0.01;
    });
});