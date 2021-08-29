const d = document;

export default function draw(btn ,selector) {
    
    const getWinner = (selector) => {
        const $player = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $player.length),
            winner = $player[random];

            // console.log($player, random, winner)
            return `Y... El ganador es: ${winner.textContent}`;        
    }


    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
    
}

/* La forumla magica para hacer un sorteo de los comentarios de cualquier pagina
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
    random = Math.floor(Math.random() * $players.length);
    winner = $players[random]

    return `El ganador es: ${winner.textContent}`
}
getWinnerComment('ytd-comment-thread-renderer #author-text span')
*/