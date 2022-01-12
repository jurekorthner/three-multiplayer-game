import Component from "../base/component";
import IUpdating from '../base/updating';

export default class SimpleComponent implements Component, IUpdating {
    name: string = "SimpleComponent";  

    onBegin(): void {
        
    }

    onButtonDown(keyCode: string): void {
        
    }

    onUpdate(delta: number): void {
        console.log("SimpleComponent is working!");
    }
}