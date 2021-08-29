const d = document,
      w = window;

// hacer "responsive design "con javascript, "responsible respondive design", 
// debemos utilizar elementos del BOM rezise, load winddows.matchMedia

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        (e.matches) 
            ? d.getElementById(id).innerHTML = desktopContent
            : d.getElementById(id).innerHTML = mobileContent;
        // console.log("MQ", breakpoint, e.matches);

    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);

}