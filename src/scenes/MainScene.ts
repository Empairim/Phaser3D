import { Project, Scene3D, PhysicsLoader, THREE } from "enable3d";

class MainScene extends Scene3D {
  box: any;
  constructor() {
    //@ts-ignore
    super("MainScene");
  }

  init() {
    console.log("Init");
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  preload() {
    console.log("Preload");
  }

  create() {
    console.log("create");

    // Resize window.
    const resize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      this.renderer.setSize(newWidth, newHeight);
      //@ts-ignore
      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
    };

    window.onresize = resize;
    resize();

    // set up scene (light, ground, grid, sky, orbitControls)
    this.warpSpeed();

    // enable physics debug
    this.physics.debug?.enable();

    // position camera
    this.camera.position.set(10, 10, 20);

    // blue box
    
  }

  update() {
    
  }
}

PhysicsLoader(
  "lib/ammo/kripken",
  () => new Project({ scenes: [MainScene], antialias: true })
);
