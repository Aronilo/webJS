const div = document.querySelector('.threejs');

document.forms[0].addEventListener('change', (e) => {
    mesh_box.material.color.set(e.target.value);
    mesh_tetrahed.material.color.set(e.target.value);
})
  
window.addEventListener('resize', onWindowResize);

function onWindowResize() {

camera.aspect = div.clientWidth / div.clientHeight;
camera.updateProjectionMatrix();

renderer.setSize(div.clientWidth, div.clientHeight);

}  
//Create renderer, scene, camera
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
scene.background = new THREE.Color('red');
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//Add a horizontal plane on which the model will be placed later.
const plane = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide}));
plane.rotation.x = Math.PI / 2;
scene.add(plane);

//Add a vertical plane to the background of the scene using bufferGeometry.
var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array([
    -100, 0, -100,
    100, 0, -100,
    100, 0, 100,
    -100, 0, 100
]);
var indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3
]);
geometry.setIndex(new THREE.BufferAttribute(indices, 1));
var material = new THREE.MeshBasicMaterial({color: 0x000000, side: THREE.DoubleSide});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Add a sphere from the finished geometry and a triangular pyramid to the scene using bufferGeometry.
var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array([
    0, 0, 0,
    0, 0, 1,
    1, 0, 0,
    0, 1, 0
]);
var indices = new Uint16Array([
    0, 1, 2,
    0, 2, 3,
    0, 3, 1,
    1, 3, 2
]);
geometry.setIndex(new THREE.BufferAttribute(indices, 1));
var material = new THREE.MeshBasicMaterial({color: 0x0000ff, side: THREE.DoubleSide});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Add a sphere from the finished geometry to the scene
var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshBasicMaterial({color: 0x0000ff, side: THREE.DoubleSide});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Add different types of lights to the scene according
//to the type of light source and the color of the light.
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
var pointLight = new THREE.PointLight(0xffffff, 0.5);
scene.add(pointLight);
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);
var spotLight = new THREE.SpotLight(0xffffff, 0.5);
scene.add(spotLight);

//Models must cast shadows from light sources on the plane.
mesh.castShadow = true;
plane.receiveShadow = true;

//Add form elements to change the color of models and turn lights on and off.
var color = document.getElementById('color');
var ambientLightCheck = document.getElementById('ambientLight');
var pointLightCheck = document.getElementById('pointLight');
var directionalLightCheck = document.getElementById('directionalLight');
var spotLightCheck = document.getElementById('spotLight');

Animation();
function Animation() {
    requestAnimationFrame(Animation);
    renderer.render(scene, camera);
}
