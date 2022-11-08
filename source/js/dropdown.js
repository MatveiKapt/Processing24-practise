const dropdown = document.querySelector('.dropdown');
const dropdownButton = dropdown.querySelector('.dropdown__button');
const dropdownList = dropdown.querySelector('.dropdown__list');
const dropdownItems = dropdown.querySelectorAll('.dropdown__item');
const dropdownInput = dropdown.querySelector('.dropdown__input');

dropdown.classList.remove('dropdown--nojs');

// Открыть/закрыть

dropdownButton.addEventListener('click', function (evt) {
  evt.stopPropagation();
  dropdownList.classList.toggle('dropdown__list--show');
});

// Закрытие списка по клику снаружи

document.addEventListener('click', function (evt) {
  if (evt.target !== dropdownButton) {
    dropdownList.classList.remove('dropdown__list--show');
  }
});

// Закрытие по нажатию на клавишу Esc или Tab

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 || evt.keyCode === 9) {
    if (dropdownList.classList.contains('dropdown__list--show')) {
      dropdownList.classList.remove('dropdown__list--show')
    }
  }
});

// Передача значения выбранного пункта

dropdownItems.forEach(function(listItem) {
  listItem.addEventListener('click', function () {
    dropdownButton.textContent = this.textContent;
    dropdownInput.value = this.dataset.value;
    dropdownList.classList.remove('dropdown__list--show');
  })
})

