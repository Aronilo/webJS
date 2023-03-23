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

const scene = new THREE.Scene();
scene.background = new THREE.Color('gray');
// scene.fog = new THREE.Fog('gray', 500, 5);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(25, 25, 25);
directionalLight.castShadow = true;

directionalLight.shadow.mapSize.width = 2000; // default
directionalLight.shadow.mapSize.height = 2000; // default
directionalLight.shadow.camera.top = 10;
directionalLight.shadow.camera.bottom = - 10;
directionalLight.shadow.camera.left = - 10;
directionalLight.shadow.camera.right = 10;
scene.add(directionalLight);

// const planeGeometry = new THREE.PlaneGeometry( 50, 30 );
// const planeMaterial = new THREE.MeshBasicMaterial( {color: 0x808080, side: THREE.DoubleSide} );
// const plane = new THREE.Mesh( planeGeometry, planeMaterial );
// plane.receiveShadow = true;
// scene.add (plane)
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(4000, 4000),
    new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} ),
    new THREE.MeshPhongMaterial({ color: 0x808080, dithering: true })
);
// plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
// plane.position.z = -10
scene.add(plane);

const camera = new THREE.PerspectiveCamera(50, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(div.clientWidth, div.clientHeight);
div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

// const material = new THREE.MeshBasicMaterial( { color: 0xAAAAAA, wireframe: true } );
const material = new THREE.MeshBasicMaterial( { color: 0xAAAAAA, emissive: 0x112244 } );

const geometry_box = new THREE.BoxGeometry( 6, 6, 6 );
const mesh_box = new THREE.Mesh( geometry_box, material );
mesh_box.position.x = -5;
mesh_box.castShadow = true;

const geometry_tetrahed = new THREE.TetrahedronGeometry( 6 );
const mesh_tetrahed = new THREE.Mesh( geometry_tetrahed, material );
mesh_tetrahed.position.x = 5;
mesh_tetrahed.castShadow = true;

scene.add( mesh_box);
scene.add( mesh_tetrahed);

//light z = 10
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 10 );
scene.add( light );

function animate() {
    requestAnimationFrame( animate );

    mesh_tetrahed.rotation.y += 0.01;

    mesh_box.rotation.y += 0.01;

    renderer.render( scene, camera );
}
animate();
