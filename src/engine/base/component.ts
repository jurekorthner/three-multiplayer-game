/* import IUpdating from './updating';
interface IComponent {
    name: string;
}

export type ParentItself = Component<ParentItself>;

export default abstract class Component<T extends Component<T> = ParentItself> implements IComponent, IUpdating {
    abstract name: string;
    
    protected constructor(v: Partial<T>) {
        Object.assign(this, v);
    }
    onBegin(): void {
        
    }
    onUpdate(delta: number): void {
        
    }
    onButtonDown(keyCode: string): void {
        
    }
} */

export default interface Component {
    name: string;
}