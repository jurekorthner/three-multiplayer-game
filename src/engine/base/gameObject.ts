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

    updateComponents(delta: number): void {
        this.components.forEach((component) => {
            component.onUpdate(delta);
        });
    }

    onButtonDown(keyCode: string): void {}
    onButtonUp(keyCode: string): void {}
    onMouseMove(x: number, y: number): void {}

    onBegin(): void {}
    onUpdate(delta: number): void {}    

    public addComponent(component: Component): void {
        this.components.push(component);
    }
}
