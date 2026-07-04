// =================================
// SELECT ELEMENTS
// =================================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

const navbar =
    document.querySelector(".navbar");

const contactForm =
    document.getElementById("contactForm");

const currentYear =
    document.getElementById("currentYear");

const revealElements =
    document.querySelectorAll(".reveal");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


// =================================
// MOBILE MENU
// =================================

menuBtn.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("active");


        const icon =
            menuBtn.querySelector("i");


        if (
            navLinks.classList.contains("active")
        ) {

            icon.classList.remove(
                "fa-bars"
            );

            icon.classList.add(
                "fa-xmark"
            );

        } else {

            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


// =================================
// CLOSE MOBILE MENU
// AFTER CLICKING NAV LINK
// =================================

navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove(
                    "active"
                );


                const icon =
                    menuBtn.querySelector("i");


                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }
        );

    }
);


// =================================
// NAVBAR SCROLL EFFECT
// =================================

window.addEventListener(
    "scroll",
    function () {

        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


// =================================
// SCROLL REVEAL ANIMATION
// =================================

function revealOnScroll() {

    revealElements.forEach(
        function (element) {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element
                    .getBoundingClientRect()
                    .top;

            const revealPoint =
                100;


            if (
                elementTop <
                windowHeight - revealPoint
            ) {

                element.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


// Run once when page loads

revealOnScroll();


// =================================
// CONTACT FORM
// =================================

contactForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh

        event.preventDefault();


        // Get form values

        const name =
            document
                .getElementById("name")
                .value
                .trim();

        const email =
            document
                .getElementById("email")
                .value
                .trim();

        const message =
            document
                .getElementById("message")
                .value
                .trim();


        // Basic validation

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;
        }


        // Success message

        alert(
            "Thank you, " +
            name +
            "! Your message has been recorded."
        );


        // Reset form

        contactForm.reset();

    }
);


// =================================
// AUTOMATIC FOOTER YEAR
// =================================

currentYear.textContent =
    new Date().getFullYear();


// =================================
// CLOSE MENU WHEN CLICKING
// OUTSIDE NAVBAR
// =================================

document.addEventListener(
    "click",
    function (event) {

        const clickedInsideNavbar =
            navbar.contains(
                event.target
            );


        if (
            !clickedInsideNavbar
        ) {

            navLinks.classList.remove(
                "active"
            );


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);


// =================================
// CLOSE MENU ON WINDOW RESIZE
// =================================

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 700
        ) {

            navLinks.classList.remove(
                "active"
            );


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove(
                "fa-xmark"
            );

            icon.classList.add(
                "fa-bars"
            );

        }

    }
);