//Завдання 1
function arraySum() {

    let numbers = [];
    let sum = 0;

    while (true) {

      let value = prompt("Введите число", 0);

      if (value === "" || value === null || !isFinite(value)) {
        break;
      }

      numbers.push(+value);
    }

    for (let number of numbers) {
      sum += number;
    }

    return sum;
}
  
alert(`Сумма масива: ${arraySum()}`)

//Завдання 2
function getMaxSubSum(arr) {
    let maxSum = 0;
    let sum = 0;
  
    for (let item of arr) {
      sum += item;
      maxSum = Math.max(maxSum, sum); 
      if (sum < 0) {
        sum = 0; 
      } 
    }
  
    return maxSum;
}
  
alert(`Подмассив наибольшей суммы ${getMaxSubSum([-1, 2, 3, -9])}`);