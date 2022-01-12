import { Scene } from "three";
import GameObject from "./gameObject";

interface IGameManager {
    objects: Array<GameObject>;

    registerObject(obj: GameObject): number;
    Update(delta: number): void;
    Begin(): void;
    handleButtonDown(keyCode: string): void;
}

export default class GameManager implements IGameManager {     
    objects: GameObject[] = [];
    scene: Scene;

    constructor(scene: Scene, children?: Array<GameObject>) {
        this.scene = scene;
        console.log("Instantiated GameManager");
    }

    Update(delta: number): void {
        this.objects.forEach(obj => {            
            obj.onUpdate(delta);
            obj.updateComponents(delta);
        });
    }

    Begin(): void {
        this.objects.forEach(obj => {            
            obj.onBegin();
        });
    }

    registerObject(obj: GameObject): number {
        let index = this.objects.push(obj);
        this.scene.add(obj);
        return index;
    }

    keyDown(key: string): void {
        this.objects.forEach(obj => {
            obj.onButtonDown(key);
        })
    }

    handleButtonDown(keyCode: string): void {        
        this.objects.forEach(obj => {                          
            obj.onButtonDown(keyCode);
        })
    }   

    handleButtonUp(keyCode: string): void {
        this.objects.forEach(obj => {
            obj.onButtonUp(keyCode);
        })
    }

    handleMouseMove(x: number, y: number): void {
        this.objects.forEach(obj => {
            obj.onMouseMove(x, y);
        })
    }
}