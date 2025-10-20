import {
    nameRe, cardRe, monthRe, year2Re, cvcRe,
    validateName, validateCard, validateMonth, validateYear, validateCvc
  } from './validators.js';

const updateForm = document.getElementById('form-update')
const complete = document.getElementById('complete')
const nameInput = document.getElementById('cardholder')
const cardInput = document.getElementById('cardnumber')
const monthInput = document.getElementById('month')
const yearInput = document.getElementById('year')
const cvcInput = document.getElementById('cvc')
const btn = document.getElementById('confirm-btn')
const continueBtn = document.getElementById('continue-btn')

const form = document.getElementById('form')

const error = []

function showFieldError(input, id, message){
    input.classList.remove('border-neutral-gray-400')
    input.classList.add('border-red-500')
    let p = document.getElementById(id)
    if(!p){
        p = document.createElement('p');
        p.id = id;
        p.classList.add('text-red-500', 'text-[10px]');
        input.insertAdjacentElement('afterend', p);
      }
      p.textContent = message;

      error.push(message)
    }


function clearFieldError(input, id){
    input.classList.remove('border-red-500')
    input.classList.add('border-neutral-gray-400')
    const p = document.getElementById(id)

    if(p){
        p.remove()
        error.splice(0, error.length)
    };
}

function cardHolder(name) {
    if (!validateName(name)) {
      showFieldError(nameInput, 'cardholder-error',
        (name || '').trim().length < 1 ? "Can't be blank." : 'Use letters and spaces (min 2).');
    } else {
      clearFieldError(nameInput, 'cardholder-error');
    }
  }
  
  function cardNum(number) {
    if (!validateCard(number)) {
      showFieldError(cardInput, 'cardnumber-error',
        (number || '').trim().length < 1 ? "Can't be blank." : 'Enter 16 digits; spaces allowed every 4.');
    } else {
      clearFieldError(cardInput, 'cardnumber-error');
    }
  }
  
  function monthNum(month) {
    if (!validateMonth(month)) {
      showFieldError(monthInput, 'month-error',
        (month || '').trim().length < 1 ? "Can't be blank." : 'Use 01–12.');
    } else {
      clearFieldError(monthInput, 'month-error');
    }
  }
  
  function yearNum(year) {
    if (!validateYear(year)) {
      showFieldError(yearInput, 'year-error',
        (year || '').trim().length < 1 ? "Can't be blank." : 'Use 2-digit year.');
    } else {
      clearFieldError(yearInput, 'year-error');
    }
  }
  
  function cvcNum(cvc) {
    if (!validateCvc(cvc)) {
      showFieldError(cvcInput, 'cvc-error',
        (cvc || '').trim().length < 1 ? "Can't be blank." : 'Enter 3–4 digits.');
    } else {
      clearFieldError(cvcInput, 'cvc-error');
      
    }
  }



form.addEventListener('submit', event =>{
        event.preventDefault()
        const forms = new FormData(form)
        
        let name = forms.get('cardholder')
        let number = forms.get('cardnumber')
        let month = forms.get('month')
        let year = forms.get('year')
        let cvc = forms.get('cvc')
        
        // Clear previous errors
        error.length = 0
        document.getElementById('number').innerText = number
        document.getElementById('name').innerText = name
        document.getElementById('mm/yy').innerText = `${month}/${year}`
    

        cardHolder(name)
        cardNum(number);
        monthNum(month);
        yearNum(year);
        cvcNum(cvc);

        // Only show complete state if no errors
        if(error.length === 0){
            updateForm.classList.add('sr-only')
            complete.classList.remove('sr-only')
        }
})

continueBtn.addEventListener('click', () => {
    window.location.reload()
})