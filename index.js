import * as THREE from "three";
import Camera from "./js/Camera";
import Cat from "./js/objects/Cat";
import OverlayDark from "./js/objects/OverlayDark";
import { RelativePosition } from "./js/utils/RelativePosition";
import { createBackground } from "./js/objects/createBackground";
import { scenario } from "./js/scenario";

// Canvas
const canvas = document.querySelector("canvas.webgl");
const loader = document.querySelector(".loader");


// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#19bffc");

//Cat
const cat = new Cat();
scene.add(cat);

//OverlayDark
const overlayDark = new OverlayDark();
scene.add(overlayDark);

//Background
createBackground(scene);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const cameraFrustrum = 92;

/**
 * Camera
 */
const camera = new Camera(sizes, cameraFrustrum, renderer);
camera.position.set(0, 0, 1);
scene.add(camera);

//Resize setting
window.addEventListener("resize", () => {
  resize(sizes, camera, renderer, cameraFrustrum);
});
const resize = (sizes, camera, renderer, cameraFrustrum) => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.updateCamera(sizes, cameraFrustrum);
  camera.updateZoom(renderer);

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

 // logoCorner.setSize(
    renderer,
    { x: 0.9, y: 0.12, scale: 0.5 },
    { x: 0.8, y: 0.075, scale: 0.9 }
  //);
  //helpLogo.setSize(
    renderer,
    { x: 0.25, y: 0.22, scale: 1 },
    { x: 0.25, y: 0.33, scale: 1.5 }
  //);
};

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = "srgb-linear";

resize(sizes, camera, renderer, cameraFrustrum);

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;

  camera.updateZoom(renderer);
  
  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

window.onload = () => {
  setTimeout(() => {
    canvas.style.opacity = "1";
    loader.style.display = "none";
    scenario(scene, camera, renderer);
  }, 500);
};
