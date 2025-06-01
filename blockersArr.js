import * as THREE from "three";
import gsap from "gsap";

class BlockerGroup extends THREE.Group {
  constructor(name, block, blockerLight) {
    super();
    this.name = name;
    this.add(block);
    this.openTimeLine = gsap.timeline();
  }
}

