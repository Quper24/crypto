const advantageButtons = document.querySelectorAll('.advantage__btn');
console.log('advantageButtons: ', advantageButtons);
const advantageItemsContent = document.querySelectorAll('.advantage__item-content');
console.log('advantageItemsContent: ', advantageItemsContent);

advantageButtons.forEach((advantageButton, i) => {
  advantageButton.addEventListener('click', () => {
    advantageItemsContent.forEach((advantageItemContent, j) => {
      if (i === j) {
        advantageButtons[j].classList.add('advantage__btn_active');
        advantageItemsContent[j].classList.add('advantage__item-content_active')
      } else {
        advantageButtons[j].classList.remove('advantage__btn_active');
        advantageItemsContent[j].classList.remove('advantage__item-content_active')
      }
    })
  })
})