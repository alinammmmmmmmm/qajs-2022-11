function kolobok(name) {
  switch (name) {
    case 1:
      return 'Я от дедушки ушёл';
    case 2:
      return 'Я от зайца ушёл';
    case 3:
      return 'Меня съели';
    default:
      return 'иду';
  }
}

console.log(kolobok(1));
console.log(kolobok(2));
console.log(kolobok(3));
console.log('');

function newYear(name) {
  const moroz = 'Дед Мороз';
  const sneg = 'Снегурочка';
  const template1 = `${moroz}!${moroz}!${moroz}!`;
  const template2 = `${sneg}!${sneg}!${sneg}!`;

  if (name === moroz) {
    return template1;
  }
  if (name === sneg) {
    return template2;
  } else {
    return null;
  }
}

console.log(newYear('Дед Мороз'));
console.log(newYear('Снегурочка'));
