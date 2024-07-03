import * as THREE from 'three';

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('3d');
canvas.globalAlpha = 1;

// import './styles.css'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Shape
const geometry = new THREE.TorusKnotGeometry( 1, .4, 64, 8 ); 
const material = new THREE.MeshStandardMaterial( { color: 'green', wireframe: true } ); 
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );




let pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(4, 2, 5);
let ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);



camera.position.z = 5;
console.log(torusKnot.position)

torusKnot.position.x = -3.5;
torusKnot.position.y = -.5;
torusKnot.position.z = 0;
function animate() {
	torusKnot.rotation.x += 0.01;
	torusKnot.rotation.y += 0.02;

	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );




let scrollPosition = 0;

function scrollText(textElement) {
  scrollPosition -= 1;
  textElement.style.left = scrollPosition + 'px';

  if (scrollPosition < -textElement.offsetWidth) {
    scrollPosition = container.offsetWidth;
  }
  requestAnimationFrame(scrollText);
}








// Confetti
let partyButton = document.querySelector('.party')
let partyText = document.querySelector('.partyText')
partyText.style.display = 'none';

partyButton.addEventListener('click', function(){

    confetti();
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    partyText.style.display = 'block';
    setTimeout(() => {
        partyText.style.display = 'none';
    }, 10000);






})
