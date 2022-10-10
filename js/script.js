import { body, headerOffsetTop } from "./components/variables.js";

// Adds the sticky-class when the navbar should be locked to the top:
window.onscroll = () => {
    if (window.pageYOffset > headerOffsetTop) {
        //header.classList.add("sticky");
        body.classList.add("navbar-present");
    } else {
        //header.classList.remove("sticky");
        body.classList.remove("navbar-present");
    }
};
