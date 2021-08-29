const d = document,
      w = window,
      n = navigator;


export default function networkStatus() {
    
    const isOnline = (e) => {
        const $div = d.createElement('div');

        if (!n.onLine) {
            $div.textContent = "Perdiste la Conexión";
            $div.classList.add('offline'); 
            $div.classList.remove('online');
        } else {
            $div.textContent = "Conexión Reestablecida";
            $div.classList.add('online');                
            $div.classList.remove('offline');
        }
        d.body.insertAdjacentElement("afterbegin", $div)
        setTimeout(() => d.body.removeChild($div), 1750);
    }
    w.addEventListener('online', (e) => isOnline())
    w.addEventListener('offline', (e) => isOnline())
}