const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  //   **_ดัชนีมวลกาย (BMI) = น้ำหนักตัว (กิโลกรัม)/ส่วนสูง(เมตร)<sup>2<sup>_**
  let BMI = weight/(height*height);
  return BMI;
}
function getBMIMeaning(weight, height) {
  //code here
  let result = calculateBMI(weight,height);
  if(result<18.5){
    return "Underweight";
  }
  else if (result >=18.5 && result <=24.9){
    return "Normal weight"
  }
  else{
    return "Overweight"
  }
}
module.exports = getBMIMeaning
