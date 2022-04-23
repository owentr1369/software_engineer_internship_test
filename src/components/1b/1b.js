import React from "react";
// const findFrequent = [3, 7, 3];
// => Output: 3
// const findFrequent = [null, "hello", true, null];
// => Output: null
const findFrequent = [false, "up", "down", "left", "right", true, false];
// => Output: false

const Frequent = () => {
  let mostFrequent = 1;
  let count = 0;
  let item;
  for (let i = 0; i < findFrequent.length; i++) {
    for (let j = i; j < findFrequent.length; j++) {
      if (findFrequent[i] === findFrequent[j]) count++;
      if (mostFrequent < count) {
        mostFrequent = count;
        item = findFrequent[i];
      }
    }
    count = 0;
  }
  console.log(item);
  return <div></div>;
};

export default Frequent;
