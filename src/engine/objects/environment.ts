import { AmbientLight, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry } from "three";
import GameObject from "../base/gameObject";

export class GroundPlane extends GameObject {
    private meshGeometry = new PlaneGeometry(10, 10);
    private meshMaterial = new MeshBasicMaterial({ color: 0x336622});
    private mesh = new Mesh(this.meshGeometry, this.meshMaterial);    

    onBegin(): void {
        this.mesh.rotation.set(-90, 0, 0);
        this.add(this.mesh);
    }
}

export class sunLight extends GameObject {
    private light = new AmbientLight(0xffffff, 1);

    onBegin(): void {
        this.add(this.light);
    }
}
