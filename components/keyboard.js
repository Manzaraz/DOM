const d = document;
let x = 0, 
    y = 0;
export function moveBall(e, ball, stage ) {
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitsBall = $ball.getBoundingClientRect(),
          limitsStage = $stage.getBoundingClientRect();
    
    switch (e.keyCode) {
        // case 65:
        case 37:
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault()
                x--
            };
            break;
            
        // case 87:
        case 38:
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault()      
                y--
            };
            break;
            
        // case 68:
        case 39:
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault()
                x++
            };
            break;
            
        // case 83:
        case 40:
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault()
                y++
            };
            break;
            
        default:
            break;
        }

        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

     
}

export function shortcuts(e) {
    console.log(e.type)
    console.log(e.key)    
    console.log(e.keyCode)    
    console.log(`Presionaste la tecla "Control": ${e.ctrlKey}`)    
    console.log(`Presionaste la tecla "Shift": ${e.shiftKey}`)    
    console.log(`Presionaste la tecla "Alt": ${e.altKey}`)    
    console.log(e);
    if (e.key === 'a' && e.ctrlKey && e.altKey ) {
        alert("Haz lanzado una alerta con el teclado");
    }
    if (e.key === 'c' && e.ctrlKey ) {
        confirm("Haz lanzado una confirmacion con el teclado");
    }
    if (e.key === 'p' && e.ctrlKey ) {
        let aviso = prompt("Haz lanzado un aviso con el teclado");
        console.log(aviso);
    }
}

