export default interface IUpdating {
    /**
    *Called once at the start
    */
    onBegin(): void;
    /**
    *Called every new frame 
    *@param delta Time since the last frame
    */
    onUpdate(delta: number): void;
    /**
    *Called on button down 
    *@param keyCode Key code as string
    *@example onButtonDown("space") {    
    *   //Do something
    *}
    */
    onButtonDown(keyCode: string): void;

    onMouseMove(x: number, y: number): void;
}