import React from "react";
// const findFrequent=[3, 7, 3]
// => Output: 3
// const findFrequent = [null, "hello", true, null];
// => Output: null
const findFrequent = [false, "up", "down", "left", "right", true, false];
// => Output: false

const Frequent = () => {
  let max = [0, 0];
  let count = 1;
  //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
  //So sánh số lần xuất hiện và thay đổi max khi cần.
  for (let i = 0; i < findFrequent.length; i++) {
    //Thấy phần tử trùng nhau thì tiếp tục đếm
    if (findFrequent[i] === findFrequent[i + 1]) ++count;
    else {
      //So sánh số lần xuất hiện với max[1]
      if (max[1] < count) {
        //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
        //Và gán số lần xuất hiện vào max[1]
        max[0] = findFrequent[i];
      }
      count = 1;
    }
  }
  console.log(max[0]);
  return <div></div>;
};

export default Frequent;
