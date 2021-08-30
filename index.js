import {hamburgerMenu} from './components/menu_hamburger.js';
import { digitalClock, alarm } from './components/digital_clock.js';
import { moveBall } from './components/keyboard.js';
import countdown from './components/countdown.js';
import scrollTopBtn from './components/scroll_top.js';
import darkTheme from './components/dark_theme.js';
import responsiveMedia from './components/objeto_responsive.js';
import responsiveTester from './components/prueba_responsive.js';
import userDeviceInfo from './components/detector_dispositivos.js';
import networkStatus from './components/conection_detect.js';
import webcam from './components/webcam_detection.js';
import getGeolocation from './components/geolocation.js';
import searchFilters from './components/search_filter.js';
import draw from './components/sorteo.js';
import slider from './components/carrousel.js';
import scrollSpy from './components/scroll_spy.js';
import smartVideo from './components/smart_video.js';
import contactFromValidations from './components/forms_validations.js';
import speechReader from './components/narrator.js';


const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a")
    digitalClock("#clock", "#clock-active", "#clock-inactive");
    alarm( "#alarm-active", "#alarm-inactive");
    // countdown('countdown', 'Aug 24, 2021 00:40:30', '¡Feliz cumpleaños chaval!🥳')
    countdown('countdown', 'Oct 03, 2021 13:30:00', "¡Feliz Cumpleaños Chaval!🤓 ")
    scrollTopBtn(".scroll-top-btn");
    responsiveMedia(
        'youtube',
        "(min-width: 1024px)",
        `<a href="https://youtu.be/z5rRZdiu1UE" target="_blank" rel="noopener" >Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z5rRZdiu1UE?controls=0&amp;start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        'gmaps',
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/xYBJfs3u1fyEFf9F9" target="_blank" rel="noopener" >Ver Localización</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.1223071224956!2d-65.2033761471316!3d-26.83217100953614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0febbe97db%3A0x65937e9ca09416ef!2sCasa%20Hist%C3%B3rica%20de%20la%20Independencia!5e0!3m2!1ses-419!2sar!4v1629856964516!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webcam('webcam','.video-container','.webcam-on', '.webcam-off');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    contactFromValidations();
})

d.addEventListener('keydown', (e) => {
    moveBall(e, '.ball','.stage');
})
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();

