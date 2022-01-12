import { Scene } from "three";
import GameObject from "./gameObject";

interface IGameManager {
    objects: Array<GameObject>;

    registerObject(obj: GameObject): number;
    Update(delta: number): void;
    Begin(): void;
    refreshInput(): void;
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
            obj.updateComponents();
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

    refreshInput() {
        
    }   
}