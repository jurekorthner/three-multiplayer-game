import {
    BoxGeometry,
    BufferGeometry,
    Clock,
    Color,
    Material,
    Mesh,
    MeshBasicMaterial,
    Object3D,
    PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer,
} from "three";
import Component, { ParentItself } from "./base/component";
import gameManager from "./base/gameManager";
import GameManager from "./base/gameManager";
import GameObject from "./base/gameObject";
import InputStore from "./base/input";
import simpleComponent from "./components/simpleComponent";
import SimpleComponent from "./components/simpleComponent";
import Player from "./player/player";

export class Engine {
    private readonly Clock: Clock = new Clock();
    private readonly scene = new Scene();
    private readonly gameManager: GameManager = new GameManager(this.scene);
    private inputStore: InputStore;
    private readonly camera = new PerspectiveCamera(
        45,
        innerWidth / innerHeight,
        0.1,
        10000
    );

    private readonly renderer = new WebGLRenderer({
        antialias: true,
        canvas: document.getElementById("main-canvas") as HTMLCanvasElement,
    });

    // Create Player Object
    private player: Player = new Player("player", this.camera);

    private simpleComponent: SimpleComponent = new SimpleComponent();

    constructor() {
        this.player.addComponent(simpleComponent);
        this.gameManager.registerObject(this.player);
        this.inputStore = new InputStore(this.gameManager);

        // Init camera
        this.camera.position.set(3, 3, 3);
        this.camera.lookAt(new Vector3(0, 0, 0));

        // Init renderer
        this.renderer.setSize(innerWidth, innerHeight);
        this.renderer.setClearColor(new Color("rgb(0,0,0)"));

        //this.setUpKeyLogging();

        // Call Begin method on Game Manager
        this.gameManager.Begin();

        this.render();
    }

    private adjustCanvasSize() {
        this.renderer.setSize(innerWidth, innerHeight);
        this.camera.aspect = innerWidth / innerHeight;
        this.camera.updateProjectionMatrix();
    }

    private render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());
        this.adjustCanvasSize();
        // Update all objects
        this.gameManager.Update(this.Clock.getDelta());        
    }

    //private setUpKeyLogging() {
    //    document.addEventListener('keydown', this.handleInputDown, true);          
    //}

    //private handleInputDown(event: KeyboardEvent)
    //{
    //    this.gameManager.  
    //}
}
