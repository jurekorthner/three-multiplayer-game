import GameObject from "../base/gameObject";
import {
    BoxGeometry,
    BufferGeometry,    
    Euler,    
    Material,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Quaternion,
    Vector3,
} from "three";

export default class Player extends GameObject {
    private meshGeometry: BufferGeometry = new BoxGeometry(1, 1, 1);
    private meshMaterial: Material = new MeshBasicMaterial({
        color: 0x0077ff,
        wireframe: true,
    });

    private mesh: Mesh = new Mesh(this.meshGeometry, this.meshMaterial);

    private camDst: number = 5;

    private velocity: Vector3 = new Vector3(0, 0, 0);

    public camera: PerspectiveCamera = new PerspectiveCamera(
        45,
        innerWidth / innerHeight,
        0.1,
        10000
    );
    
    onBegin(): void {
        this.add(this.mesh);
        this.add(this.camera);        
    }

    onUpdate(delta: number): void {
        console.log(this.velocity.z);

        this.position.add(this.velocity);        
        //this.rotateX(0.02);
        //this.position.setX(this.velocity);
    }

    onButtonDown(keyCode: string): void {
        switch (keyCode) {
            case "u":
                this.camera.lookAt(0, 0, 0);
                break;
            case "w":
                this.velocity.z = -0.1;
                break;
            case "s":
                this.velocity.z = 0.1;
                break;    
            default:
        }
    }

    onButtonUp(keyCode: string): void {
        switch (keyCode) {
            case "w":
                this.velocity.z = 0;
            case "s":
                this.velocity.z = 0;
            default:
                return;
        }
    }

    onMouseMove(x: number, y: number): void {  
        console.log(x, ' | ', y);  
        console.log(this.camera.rotation.x)
        this.camera.setRotationFromEuler(new Euler(this.camera.rotation.x + y * 0.001, this.camera.rotation.y + x * 0.001, this.camera.rotation.z));
        console.log(this.camera.rotation);
        //this.camera.rotateX(-y * 0.001)
        //this.camera.rotateY(x* 0.001);
    }
}
