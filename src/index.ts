import { Engine } from "./engine/Engine";

let engine = new Engine();

document.addEventListener("keydown", handleButtonDown, true);

document.addEventListener("keyup", handleButtonUp, true);

document.addEventListener("mousemove", handleMouseMove, true);

document.addEventListener("click", handleClick, true);

function handleButtonDown(event: KeyboardEvent) {    
    engine.gameManager.handleButtonDown(event.key);
    event.preventDefault();
}

function handleButtonUp(event: KeyboardEvent) {
    engine.gameManager.handleButtonUp(event.key);
    event.preventDefault();
}

function handleMouseMove(event: MouseEvent) {    
    engine.gameManager.handleMouseMove(event.movementX, event.movementY);
    event.preventDefault();
}

function handleClick(event: MouseEvent) {
    document.getElementById("main-canvas").requestPointerLock();
    event.preventDefault();
}
