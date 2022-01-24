import Component from "../base/component";
import IUpdating from "../base/updating";
import Player from "../objects/player";

export default class SimpleComponent extends Component {
    public readonly name: string = "SimpleComponent";
    
    constructor(_player: Player) {
        super();
    }

    public onBegin(): void {}

    public onButtonDown(keyCode: string): void {}

    public onUpdate(delta: number): void {}
}
