import IUpdating from "./updating";
interface IComponent {
    name: string;
}

export default abstract class Component implements IComponent, IUpdating {
    abstract name: string;

    onBegin(): void {}
    onUpdate(delta: number): void {}
    onButtonDown(keyCode: string): void {}
    onMouseMove(x: number, y: number): void {}
}
