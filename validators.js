
export const nameRe = /^[A-Za-z ]{2,}$/
export const cardRe = /^(?:\d{4} ?){3}\d{4}$/
export const monthRe = /^\d{2}$/
export const year2Re = /^\d{2}$/
export const cvcRe = /^\d{3,4}$/


export function validateName(value) {
    const v = (value || '').trim();
    return v.length >= 1 && nameRe.test(v);
  }
  
  export function validateCard(value) {
    const v = (value || '').trim();
    return v.length >= 1 && cardRe.test(v);
  }
  
  export function validateMonth(value) {
    const v = (value || '').trim();
    return v.length >= 1 && monthRe.test(v);
  }
  
  export function validateYear(value) {
    const v = (value || '').trim();
    return v.length >= 1 && year2Re.test(v);
  }
  
  export function validateCvc(value) {
    const v = (value || '').trim();
    return v.length >= 1 && cvcRe.test(v);
  }