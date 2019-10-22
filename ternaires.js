const userAge = prompt('Quel âge avez-vous ?');

const isAnAdult = userAge >= 18 ? alert('prix : 30€') : alert('prix: 15€');

console.log(userAge);

const userGenre = prompt('Etes-vous un homme ou une femme ?');

const isAMan =
  userGenre.toLocaleLowerCase() === 'homme'
    ? alert('prix : 35€')
    : alert('prix : 30€');
