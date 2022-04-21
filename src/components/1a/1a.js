// const findMax5=[3,4,5,3,2,3,10,11]
// Output: [11,10,5,4,3]
// const findMax5=[14,12,38,17,10,36,12,29,45,34,48,22]
// Output: > [48, 45, 38, 36, 34]
const findMax5 = [10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22];
// Output: > [30, 22, 22, 12, 11]

var max5 = [];

function Max5() {
  max5 = findMax5.sort((a, b) => b - a).slice(0, 5);
  console.log(max5);
  return <div></div>;
}

export default Max5;
