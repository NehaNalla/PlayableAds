import * as THREE from "three";
import sort from "../../assets/hexa.jpg";
import gsap from "gsap";

const createSortPart = (partTexture) => {
  const obj = new THREE.Sprite(
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(partTexture),
      transparent: true,
    })
  );
  return obj;
};

export default class Sort extends THREE.Group {
  constructor() {
    super();
    this.body = createSortPart(sort);
    this.scale.setScalar(2);
    this.name = "Sort";
    this.add(this.body);
    this.body.position.z = 0.3;
  }


  /**/
}
