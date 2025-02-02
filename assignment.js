const detail={"name":"john doe","age":"15","isstudent":"true"};
console.log(detail)
console.log(detail.isstudent)
console.log(typeof detail.age)

function calculator(){
    const num1=parseFloat(prompt("enter a number"));
    const num2=parseFloat(prompt("enter another number"));
    const operator=prompt("enter an operator (+, -, *, /):");
    if (isNaN(num1)||isNaN(num2)){
        console.log("invalid input :enter  numbers");
        return;
    }
    let result;
    switch(operator){
        case "+":
            result=num1+num2;
            break;
        case "-":
            result=num1-num2;
            break;
        case "*":
            result=num1*num2;
            break;
        case "/":
            if(num2===0){
                console.log("divison by zero is not allowed");
                return;
            }
            result=num1/num2;
            break;
            default:
                console.log("invalid operator ,please chooose (+, -, *, /)");
                return;

    }
    console.log(`results :${result}`);


}
calculator();