export function afterThrown(callback) {
    let handleMotion = (motionEvent) => {
        if (isMoving(motionEvent.acceleration)) {
            window.removeEventListener("devicemotion", handleMotion);
            callback();
        }
    }

    window.addEventListener("devicemotion", handleMotion);
}

function isMoving(acceleration) {
    return Math.abs(acceleration.x) > 10
        || Math.abs(acceleration.y) > 10;
}
