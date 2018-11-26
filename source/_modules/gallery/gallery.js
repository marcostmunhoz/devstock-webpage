'use strict';

export default class Gallery {
  constructor() {
    this.init();
  }

  imagesIterator() {
    let imagesArray = document.querySelectorAll('img');

    imagesArray.forEach(element => {
      this.targetBlank(element);
    });
  }

  targetBlank(element) {
    let URL = element.currentSrc;
    element.addEventListener('click', () => {
      window.open(URL, '_blank');
    });
  }

  init() {
    this.imagesIterator();
  }
}
