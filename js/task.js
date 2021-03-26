/**
 * Напиши функцию getAllPropValues(propName)
 * которая вернет все значения заданного
 * свойства
 * Например getAllPropValues('name') возвращает ['Asus', 'Huawei', 'HP', 'Dell']
 * getAllPropValues('category') возвращает []
 */

const products = [
  { name: 'Asus', price: 1300, quantity: 4 },
  { name: 'Huawei', price: 2700, quantity: 3 },
  { name: 'HP', price: 400, quantity: 7 },
  { name: 'Dell', price: 1200, quantity: 9 },
];

const getAllPropValues = (array, propName) => {
    
    // const arrayOfProperties = [];

    array.forEach(object => {
        const arrayKeys = Object.keys(object);
        console.log(arrayKeys);
    })

     return  arrayKeys.filter(key => key === propName)
  console.log(arrayKeys);
    // for (const object of arr) {
    //     const arrayKeys = Object.keys(object);
    //     for (const key of arrayKeys) {
    //         if (key === prop) {
    //             arrayOfProperties.push(object[key]);
    //         }
    //     }
    // }
    // return arrayOfProperties;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []




// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
    
//     const arrayOfProperties = [];
  
//     for (const object of arr) {
//         const arrayKeys = Object.keys(object);
//         for (const key of arrayKeys) {
//             if (key === prop) {
//                 arrayOfProperties.push(object[key]);
//             }
//         }
//     }
//     return arrayOfProperties;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []
