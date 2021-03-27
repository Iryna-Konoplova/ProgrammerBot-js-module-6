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
    
  const arrayOfProperties = [];
   
    array.forEach(object => {
      if (Object.keys(object).includes(propName)) {
          arrayOfProperties.push(object[propName])
        }
    } )
   
  return arrayOfProperties;
    
  }


console.log(getAllPropValues(products, 'name')); 
console.log(getAllPropValues(products, 'price'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));


console.log(products)