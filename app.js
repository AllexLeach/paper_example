import { sexing } from './sex_by_russian_name.js';

const nameInput = document.querySelector('.form_input__name_action');
const nameBtn = document.querySelector('.form_button__name_action');
const complimentBox = document.querySelector('.compliment_box');
const complimentBtn = document.querySelector('.compliment_button');
const compliments = ['аккуратн', 'безупреч', 'умн', 'начитанн', 'красив', 'харизматичн', 'сексуальн', 'обаятельн'];

function getRandomInt(min, max) {
   const minCeiled = Math.ceil(min);
   const maxFloored = Math.floor(max);
   return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

nameInput.addEventListener('click', (e) => {
   e.target.style.border = 'none';
});

nameBtn.addEventListener('click', () => {
   if (nameInput.value) {
      nameInput.style.border = 'none';

      let name = nameInput.value.trim().toLowerCase();
      name = name[0].toUpperCase() + name.slice(1);
      nameInput.parentElement.style.display = "none";
   
      complimentBox.innerHTML = `${name} ты сам` + (sexing(name.toLowerCase()) ? `ая ${compliments[getRandomInt(0, compliments.length)]}ая`: `ый ${compliments[getRandomInt(0, compliments.length)]}ый`);
      complimentBox.parentElement.style.display = 'flex';
   } else {
      nameInput.style.border = '2px red solid';
   }
});

complimentBtn.addEventListener('click', () => {
   nameInput.value = '';
   complimentBox.parentElement.style.display = 'none';
   nameInput.parentElement.style.display = "flex";
});
