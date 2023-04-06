import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { default as Stats } from "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js";

const clock = new THREE.Clock();
let scene = new THREE.Scene();

let vertices = [0, 0, 0, 10, 0, 0, 10, 0, 10, 0, 0, 10];
let indices = [2, 1, 0, 0, 3, 2];
let cameraTarget = new THREE.Vector3(0, 0.4, 0);
let geometry = new THREE.BufferGeometry();

geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(new Float32Array(vertices), 3)
);
geometry.setIndex(indices);
geometry.computeVertexNormals();
let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa });
let floor = new THREE.Mesh(geometry, material);
floor.position.set(-5, 0, -5);
floor.receiveShadow = true;
scene.add(floor);

let wall = new THREE.Mesh(geometry, material);
wall.position.set(-5, 7,-3);
wall.rotation.set(1.570796 , 0, 0);


wall.receiveShadow = true;
scene.add(wall);

let len = 1;
let vert_arr = [0, 0, 0, 0, 0, len, (Math.sqrt(3)*len/2), 0, len/2, (Math.sqrt(3)*len/6), len, len/2];
indices = [0, 1, 2, 0, 1, 3, 1, 2, 3, 0, 2, 3];
let myMesh = new THREE.BufferGeometry();
myMesh.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vert_arr), 3));
myMesh.setIndex(indices);
myMesh.computeVertexNormals();
let matTetraider = new THREE.MeshPhongMaterial({ color: 'aqua', side: THREE.DoubleSide });
let tetraider = new THREE.Mesh(myMesh, matTetraider);
tetraider.position.set(-1, 0, -0.5);
tetraider.castShadow = true;
tetraider.receiveShadow = true;
scene.add(tetraider);


const spotLight = new THREE.SpotLight("#ffffff");
spotLight.position.set(0, 2, 5);
spotLight.castShadow = true;
spotLight.intensity = 2;
spotLight.shadow.camera.near = 1;
spotLight.shadow.camera.far = 25;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
spotLight.shadow.bias = -0.01;
spotLight.target.position.set(0, 0, 0);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLight);
scene.add(spotLight.target);
// scene.add(spotLightHelper);



const directionalLightL = new THREE.DirectionalLight("#ffffff");
directionalLightL.position.set(-5, 1, -3);
directionalLightL.castShadow = true;
directionalLightL.intensity = 2
directionalLightL.shadow.camera.near = 1;
directionalLightL.shadow.camera.far = 25;
directionalLightL.shadow.mapSize.width = 2048;
directionalLightL.shadow.mapSize.height = 2048;
directionalLightL.shadow.bias = -0.01;
directionalLightL.target.position.set(0, 0, 0);

const directionalLightLHelper = new THREE.DirectionalLightHelper(directionalLightL);
scene.add(directionalLightL);
scene.add(directionalLightL.target);
// scene.add(directionalLightLHelper);


const directionalLightR = new THREE.DirectionalLight("#ffffff");
directionalLightR.position.set(5, 1, -3);
directionalLightR.castShadow = true;
directionalLightR.intensity = 2
directionalLightR.shadow.camera.near = 1;
directionalLightR.shadow.camera.far = 25;
directionalLightR.shadow.mapSize.width = 2048;
directionalLightR.shadow.mapSize.height = 2048;
directionalLightR.shadow.bias = -0.01;
directionalLightR.target.position.set(0, 0, 0);

const directionalLightRHelper = new THREE.DirectionalLightHelper(directionalLightR);
scene.add(directionalLightR);
scene.add(directionalLightR.target);
// scene.add(directionalLightRHelper);


const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 16);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.y = 0.5;
sphere.position.x = 0.5;
sphere.receiveShadow = true;
sphere.castShadow = true;
scene.add(sphere);
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 5);


let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;


let mainTarget = new THREE.Vector3(5, 5, 5);

function animate() {
  requestAnimationFrame(animate);


 const elapsedTime = clock.getElapsedTime();

// camera.position.lerp(mainTarget, 0.05);

  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}

animate();


let CamAngle=0;
let CamHeight=0;

// window.addEventListener("pointermove", onPointerMove);

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}


document.forms[0].addEventListener("change", (event) => {
  if(event.target.name=="color1"){
    sphereMaterial.color.set(event.target.value);
  }else
  if(event.target.name=="color2"){
    matTetraider.color.set(event.target.value);
  }else
  if(event.target.name=="leftLight"){
    directionalLightL.intensity = event.target.checked ? 2 : 0;
  }else
  if(event.target.name=="centerLight"){
    spotLight.intensity = event.target.checked ? 2 : 0;
  }else
  if(event.target.name=="rightLight"){
    directionalLightR.intensity = event.target.checked ? 2 : 0;
  }
})