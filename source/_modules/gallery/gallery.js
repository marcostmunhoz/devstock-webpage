'use strict';

export default class Gallery {
  constructor() {
    this.imagesIterator();
  }

  imagesIterator() {
    let imagesArray = document.querySelectorAll('img');

    imagesArray.forEach(element => {
      this.targetBlank(element);
    });
  }

  targetBlank(element) {
    const URL = element.currentSrc;
    element.addEventListener('click', () => {
      window.open(URL, '_blank');
    });
  }
}
