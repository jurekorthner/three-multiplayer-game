import GameObject from "../base/gameObject";
import {
    BoxGeometry,
    BufferGeometry,
    Material,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    TubeGeometry,
    Vector3,
} from "three";
import Component from "../base/component";

export default class Player extends GameObject {
    private meshGeometry: BufferGeometry = new BoxGeometry(1, 1, 1);
    private meshMaterial: Material = new MeshBasicMaterial({
        color: 0x0077ff,
        wireframe: true,
    });

    private mesh: Mesh = new Mesh(this.meshGeometry, this.meshMaterial);

    private camDst: number = 5;

    private nextPos: number = 0;

    public camera: PerspectiveCamera = new PerspectiveCamera(
        45,
        innerWidth / innerHeight,
        0.1,
        10000
    );

    constructor(name: string) {
        super(name);
    }

    onBegin(): void {
        this.add(this.mesh);
    }

    onUpdate(delta: number): void {
        //this.rotateX(0.02);
        //this.position.setX(this.nextPos);
    }

    onButtonDown(keyCode: string) {
        switch (keyCode) {
            case "w":
                this.nextPos = 1;
            case "s":
                this.nextPos = -1;
            default:
                return;
        }
    }

    onButtonUp(keyCode: string) {
        switch (keyCode) {
            case "w":
                this.nextPos = 0;
            case "s":
                this.nextPos = 0;
            default:
                return;
        }
    }

    onMouseMove(x: number, y: number): void {
        this.camera.rotateOnAxis(new Vector3(0, -1, 0), x*0.001);
        this.camera.rotateOnAxis(new Vector3(-1, 0, 0), y*0.001);
    }
}
