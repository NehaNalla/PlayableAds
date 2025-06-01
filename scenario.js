import * as THREE from "three";
import gsap from "gsap";
import { blockersArr } from "./objects/blockersArr";
import { showEndCard } from "./objects/showEndcard";


export const scenario = (scene, camera, renderer) => {
  const endTimeLine = gsap.timeline();
  const Cat = scene.getObjectByName("Cat");
  const overlay = document.querySelector(".overlay");
  const overlayDark = scene.getObjectByName("OverlayDark");
  const clicker = document.querySelector(".clicker");
  const endScenario = () => {
    clicker.removeEventListener("pointerdown", (EO) => {
      clickListener(EO);
    });
            overlay.style.display = "none";
            showEndCard(renderer);
  };

  const clickListener = (EO) => {
    EO.stopPropagation();
    EO.preventDefault();
    endScenario();
  };  
        endScenario();
};
