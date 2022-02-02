// A function that shows all events price
let calculateInvoice =  (band1,band2,band3) => {

 let sum = band1 + band2 + band3;



 return sum;

}

console.log(calculateInvoice(140,20,249));
console.log(calculateInvoice(180,120,200));
console.log(calculateInvoice(40,210,130));
console.log(`The sum of the customer's invoice is ${calculateInvoice(140,249,249)}`);
console.log(`The invoice of different events is ${calculateInvoice(140,20,249)}`);




// A function that return a 10% discount invoices for students 

let studentInvoice = (band_3_Of_Stage_1,band_1_Of_Stage_2,band_2_Of_Stage_3) => {


    let sum_of_student_Invoice = band_3_Of_Stage_1 + band_1_Of_Stage_2 + band_2_Of_Stage_3;

    let ten_Percentage = sum_of_student_Invoice * 0.1 ;
   
    return sum_of_student_Invoice - ten_Percentage;

}

console.log("The final price for student-1 with 10% discount is " + studentInvoice(249,140,20));
console.log("The final price for student-2 with 10% discount is " + studentInvoice(75,90,120));
console.log("The final price for student-3 with 10% discount is " + studentInvoice(130,190,60));
