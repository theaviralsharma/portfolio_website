function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

const toggle = document.getElementById('darkmode-toggle-phone');
    const body = document.body;

    // Event listener for the toggle switch
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            // Dark mode
            body.classList.add('dark-mode');
        } else {
            // Light mode
            body.classList.remove('dark-mode');
        }
    });

// var tl = gsap.timeline({scrollTrigger:{
//   trigger: "#main",
//   start: "50% 50%",
//   end: "100% 50%",
//   scrub:2,
//   pin:true
// }})

// tl
// .to("#top",{
//   top: "-50%"
// },'a')
// .to("#bottom",{
//   bottom: "-50%"
// },'a')
// .to("#top-h",{
//   top: "80%"
// },'a')
// .to("#bottom-h",{
//   bottom: "-40%"
// },'a')