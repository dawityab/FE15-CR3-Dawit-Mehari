// A function that shows all events price
let calculateInvoice =  (price1,price2,price3,price4,price5,price6,price7,price8,price9) => {

    console.log( `
                  Stage 1 event 1 price is ${price1}
                  Stage 1 event 2 price is ${price2}
                  Stage 1 event 3 price is ${price3}
                  Stage 2 event 1 price is ${price4}
                  Stage 2 event 2 price is ${price5}
                  Stage 2 event 3 price is ${price6}
                  Stage 3 event 1 price is ${price7}
                  Stage 3 event 2 price is ${price8}
                  Stage 3 event 3 price is ${price9}
                  `
    )

}
calculateInvoice(140,20,249,140,20,249,140,20,249);

// A function that return the sum of 3 invoice

let calculateInvoice1 = (band_2_Of_Stage_1,band_2_Of_Stage_2,band_3_Of_Stage_3) => {

    let sum = band_2_Of_Stage_1 + band_2_Of_Stage_2 + band_3_Of_Stage_3;

    return sum;

}

console.log("The Sum of 3 invoice is " + calculateInvoice1(20,20,249));

// A calculation that shows the invoices of different events 

let price_3_Of_Stage_1 = 249; 
let price_2_Of_Stage_2 = 20;
let price_1_Of_Stage_3 = 140;  



console.log(`The inovice of Stage 1 Event 3 invoice ${price_3_Of_Stage_1}`);
console.log(`The inovice of Stage 2 Event 2 invoice ${price_2_Of_Stage_2}`);
console.log(`The inovice of Stage 3 Event 1 invoice ${price_1_Of_Stage_3}`);
// A function that return a 10% discount invoices for students 

let studentInvoice = (band_3_Of_Stage_1,band_1_Of_Stage_2,band_2_Of_Stage_3) => {


    let sum_of_student_Invoice = band_3_Of_Stage_1 + band_1_Of_Stage_2 + band_2_Of_Stage_3;

    let ten_Percentage = sum_of_student_Invoice * 0.1 ;
   
    return sum_of_student_Invoice - ten_Percentage;

}

console.log("The final price for student-1 with 10% discount is " + studentInvoice(249,140,20));
console.log("The final price for student-2 with 10% discount is " + studentInvoice(75,90,120));
console.log("The final price for student-3 with 10% discount is " + studentInvoice(130,190,60));
