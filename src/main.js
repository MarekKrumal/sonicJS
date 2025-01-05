import k from "./kaplayCtx.js";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platform", "graphics/platform.png");
k.loadSprite("sonic", "graphics/sonic.png", {
  sliceX: 8,
  sliceY: 2,
  anims: {
    run: {
      from: 0,
      to: 7,
      loop: true,
      speed: 30,
    },
    jump: {
      from: 8,
      to: 15,
      loop: true,
      speed: 100,
    },
  },
});
k.loadFont("mania", "fonts/mania.ttf");
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/Hyper-Ring.wav");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");
k.loadSound("city", "sounds/City.mp3");
