const d = document, 
    n = navigator,
    ua = n.userAgent;


export default function getGeolocation(id) {
    const $id = d.getElementById(id);
    let mq = {"min-width": "1024px"},
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

    const success = (position) => {
        let coords = position.coords;
        $id.innerHTML = `<p>Tu posición actual es: </p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Presición: <b>${Math.round(coords.accuracy)}m</b></li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},18z" target="_blanck" noopener >Ver en Google Maps</a>
        `;

    }
    const error = (err) => {
        let {code, message} = err
        $id.innerHTML = `<p><mark>Error: ${code}: ${message}</mark></p>`
        // console.log(`Error: ${code}: ${message}`);
    }

    if (n.geolocation.getCurrentPosition) {
        n.geolocation.getCurrentPosition(success, error, options)
    }
}