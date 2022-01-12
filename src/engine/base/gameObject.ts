import { Group, Object3D } from "three";
import { generateUUID } from "three/src/math/MathUtils";
import SimpleComponent from "../components/simpleComponent";
import Component from "./component";
import IUpdating from "./updating";

export default abstract class GameObject extends Object3D implements IUpdating {
    constructor(name: string) {
        super();
        this.name = name;
    }

    private readonly components: Component[] = new Array<Component>();

    /*   updateComponents(): void {
        this.components.forEach(component => {
            console.log(component.name);
        });
    } */

    onButtonDown(keyCode: string): void {}
    onBegin(): void {}
    onUpdate(delta: number): void {}

    public addComponent(component: Component) {
        this.components.push(component);
    }
}
