
const d = document, 
      n = navigator;

export default function webcam(id,div, btnOn,btnOff) {
    const $video = d.getElementById(id),
          $div = d.querySelector(div),
          $btnOn = d.querySelector(btnOn),
          $btnOff = d.querySelector(btnOff);

    let constraints = {  audio: true, video: { width: 1280, height: 720 } }
    
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnOn)) {
            e.target.disabled = true;
            $btnOff.disabled = false
            if (n.mediaDevices.getUserMedia) {
                n.mediaDevices.getUserMedia(constraints)
                    .then((stream) => {
                        console.log(stream)
                        $video.srcObject = stream;
                        $video.play()
                    })
                    .catch((err) => {
                        $div.innerHTML = `<p><mark>Ha ocurrido el siguiente error: ${err}</mark></p>`
                        console.error('Ha ocurrido el siguiente error: ',err)
                    })
            }

        }
        if (e.target.matches(btnOff)) {
            $video.play(null)
            console.log('hola')
            e.target.disabled = true;
            $btnOn.disabled = false
        }
    })
       
}

// navigator.mediaDevices.getUserMedia(constraints)
//     .then(function(mediaStream) {
//         $video.srcObject = mediaStream;
//         $video.play();
//     })
//     .catch((err) => {
//         $div.innerHTML=`<p><mark>Ocurrió el siguiente error: ${err}</mark><p>`;
//         console.error(err)
//     })






// export default function webcam(id) {
//     const $video = d.getElementById(id);

//     if (n.mediaDevices.getUserMedia) {
//         n.mediaDevices.getUserMedia({ video:true, audio:true, })
//             .then((stream) => {
//                 console.log(stream)
//             })
//             .catch(err => console.error("Sucedió el siguiente error",err))
//     }
//     // console.log(n.mediaDevices.getUserMedia);
// }