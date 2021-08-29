const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        // console.log("Entries", entries);
        entries.forEach((entry) => {
            // console.log(entry)
            const id = entry.target.getAttribute('id');
            // console.log(id)
            if (entry.isIntersecting) {
                // console.log(id)
                // console.log(entry)
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        })
    };
    const observer = new IntersectionObserver(cb, {
        // root: // root hace referencia al elemento base al cual basarme para poder medir el scroll, de no tenerlo el scroll es el documento
        // rootMargin: '-250px ' // en este se puede definir los parametros del margin en "px" que necesitamos para que tome los mmargenes del observer. Por otro lado pongo el valor en -250px porque hasta que la seccion anterior no supere esa medida a seguir siendo visible la section anterior.
        threshold: [0.5, 0.75], // es el limite , cuyo valor va de 0 a 1, como un porcentaje, en donde hasta que llegue a ese porcentaje se deselecciona ambas secciones donde deja de pintar ambas posiciones y al superarlos se pinta automaticamente la seccion actual. de colocarle un rango lo que le digo es que entre esos dos valores porcentuales no se van a pintar las secciones 
    }); //creamos el obserador
    console.log("Observer", observer)

    $sections.forEach((el) => observer.observe(el)); // Asignamos el observer a cada $sections
    



}