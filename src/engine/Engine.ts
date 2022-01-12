import {
    Clock,
    Color, PerspectiveCamera,
    Scene,
    Vector3,
    WebGLRenderer
} from "three";
import GameManager from "./base/gameManager";
import SimpleComponent from "./components/simpleComponent";
import Player from "./player/player";

export class Engine {
    private readonly Clock: Clock = new Clock();
    private readonly scene = new Scene();
    public gameManager: GameManager;    

    private readonly renderer = new WebGLRenderer({
        antialias: true,
        canvas: document.getElementById("main-canvas") as HTMLCanvasElement,
    });

    // Create Player Object
    private player: Player = new Player("player");

    private simpleComponent: SimpleComponent = new SimpleComponent(this.player);

    constructor() {
        this.gameManager = new GameManager(this.scene);

        this.player.addComponent(this.simpleComponent);      
        this.gameManager.registerObject(this.player);

        // Init camera
        this.player.camera.position.set(3, 3, 3);
        this.player.camera.lookAt(new Vector3(0, 0, 0));

        // Init renderer
        this.renderer.setSize(innerWidth, innerHeight);
        this.renderer.setClearColor(new Color("rgb(0,0,0)"));

        // Call Begin method on Game Manager
        this.gameManager.Begin();

        this.render();
    }

    private adjustCanvasSize() {
        this.renderer.setSize(innerWidth, innerHeight);
        this.player.camera.aspect = innerWidth / innerHeight;
        this.player.camera.updateProjectionMatrix();
    }

    private render() {
        this.renderer.render(this.scene, this.player.camera);
        requestAnimationFrame(() => this.render());
        this.adjustCanvasSize();
        // Update all objects
        this.gameManager.Update(this.Clock.getDelta());        
    }    
}
