import GameManager from "./gameManager";

interface IInputStore {
    inputMap: Map<String, boolean>;
}

export default class InputStore implements IInputStore {
    inputMap: Map<String, boolean>;    

    constructor(private gameManager: GameManager) {
        this.inputMap = new Map<String, boolean>();

        console.log(this.inputMap);
    }   
}
