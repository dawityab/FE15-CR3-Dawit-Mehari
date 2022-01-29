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

// A function that shows the invoice of the customer

let calculateInvoice1 = (band_2_Of_Stage_1,band_2_Of_Stage_2,band_3_Of_Stage_3) => {

    let sum = band_2_Of_Stage_1 + band_2_Of_Stage_2 + band_3_Of_Stage_3;

    return sum;

}

console.log("The Sum of 3 customer invoice is " + calculateInvoice1(20,20,249));

// A function that shows the invoices calculation

let price_3_Of_Stage_1 = 249; 
let price_2_Of_Stage_2 = 20;
let price_1_Of_Stage_3 = 140;  

let sum_Of_invoices = price_3_Of_Stage_1 + price_2_Of_Stage_2 + price_3_Of_Stage_1;

console.log(`The sum of 3 different events invoice ${sum_Of_invoices}`);

// A function that shows ths students discount invoice

let studentInvoice = (band_3_Of_Stage_1,band_1_Of_Stage_2,band_2_Of_Stage_3) => {

    
}