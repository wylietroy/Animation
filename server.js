// import * as THREE from 'three';

// function main() {

// 	const canvas = document.querySelector( '#c' );
// 	const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

// 	const fov = 75;
// 	const aspect = 2; // the canvas default
// 	const near = 0.1;
// 	const far = 5;
// 	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
// 	camera.position.z = 2;

// 	const scene = new THREE.Scene();

// 	const boxWidth = 1;
// 	const boxHeight = 1;
// 	const boxDepth = 1;
// 	const geometry = new THREE.BoxGeometry( boxWidth, boxHeight, boxDepth );

// 	const material = new THREE.MeshBasicMaterial( { color: 0x44aa88 } ); // greenish blue

// 	const cube = new THREE.Mesh( geometry, material );
// 	scene.add( cube );

// 	renderer.render( scene, camera );

// }

// main();


import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.min.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ball = new THREE.Mesh(geometry, material);
scene.add(ball);

camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  ball.rotation.x += 0.01;
  ball.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();

const categories = document.querySelectorAll('.category');

categories.forEach(category => {
  category.addEventListener('click', () => {
    // Simulate page transition by changing background color
    const colors = ['#ff9999', '#99ff99', '#9999ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('container').style.backgroundColor = randomColor;
  });
});

