function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  height= height/100;
  //(weight (kg) / height^2(m))
  let bmi= weight/(height*height);



  if(bmi<18.5 ){
    alert("Underweight")
  }else if(bmi>=18.5 && bmi<=24.9){
 
    alert("Healthy Weight")
  }else if (bmi>=25.0 && bmi<=29.9){
    alert("Overweight")
}else if(bmi>=30.0){
  alert("Obesity")
}
}