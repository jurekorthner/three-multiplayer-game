import GameObject from "../base/gameObject";
import {
    BoxGeometry,
    BufferGeometry,
    Material,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    TubeGeometry,
} from "three";
import Component from "../base/component";

export default class Player extends GameObject {    
    private meshGeometry: BufferGeometry = new BoxGeometry(1, 1, 1);
    private meshMaterial: Material = new MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
    private mesh: Mesh = new Mesh(this.meshGeometry, this.meshMaterial);

    private camera: PerspectiveCamera;

    constructor(name: string, camera: PerspectiveCamera) {
        super(name);

        this.camera = camera;
    }

    onBegin(): void {
        this.add(this.mesh);
    }

    onUpdate(delta: number): void {
        this.rotateX(0.03);
    }

    onKeyDown(keyCode: string) {        
        switch (keyCode) {
            case "w":
                this.translateX(0.03);
        }
    }    
}
