/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles-js config loaded');
  });

let myName = document.querySelector("");

button
myName.addEventListener("click", function() {
    myName.className = "name animate__animated animate__bounceOutDown";
});





