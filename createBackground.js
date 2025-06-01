import * as THREE from "three";
import background from "../../assets/background.jpg";


export const createBackground = (scene) => {
  const backTexture = new THREE.TextureLoader().load(background);
  const back = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({
      map: backTexture,
    })
  );
  back.name = "Back";
  back.material.transparent = true;
  scene.add(back);

  const sceneBack = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshBasicMaterial({
    })
  );
  sceneBack.name = "SceneBack";
  scene.add(sceneBack);
};
