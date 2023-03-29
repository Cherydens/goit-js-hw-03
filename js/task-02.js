// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

const countProps = function (obj) {
  let counter = 0;

  //   const values = Object.values(obj);
  //   for (const value of values) {
  //     counter += 1;
  //   }

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      counter += 1;
    }
  }

  return counter;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
