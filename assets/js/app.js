


let standart = 12950;
let sum = + prompt ('сумма дохода');
console.log(`Ваш доход ${sum}`);
let subtracted = sum - standart;

if(subtracted <= 10275 && subtracted > 0){
    let tax = subtracted * 10 / 100;
    console.log(`Налог 10%: ${tax}`);
}
   if(subtracted > 10275 && subtracted <= 41775){
        tax = ((subtracted - 10275) * 12 / 100) + (10275 * 10 / 100);
        console.log(`Налог 12%: ${tax}`);
   }
         if(subtracted > 41775 && subtracted <= 89075){
            tax = ((subtracted - 41775)*22 / 100) + ((41775 - 10275)*12 / 100) + (10275 * 10 / 100);
            console.log(`Налог 22%: ${tax}`);
         }
         if(subtracted > 89075 && subtracted <= 170050){
            tax = ((subtracted - 89075)*24 / 100) + ((89075 - 41775)* 22 / 100) + ((41775 - 10275)* 12 / 100) + (10275 * 10 / 100);
            console.log(`Налог 24%: ${tax}`);
         }
         if(subtracted > 170050 && subtracted <= 215950){
            tax = ((subtracted - 170050)* 32 / 100) + ((170050 - 89075)* 24 / 100) + ((89075 - 41775)* 22 / 100) + ((41775 - 10275)*12 / 100) + (10275 * 10 / 100);
            console.log(`Налог 32%: ${tax}`);
         }
         if(subtracted > 215950 && subtracted <= 539900){
            tax = ((subtracted - 215950)* 35 / 100) + ((215950 -170050)* 32 / 100) + ((170050 - 89075)* 24 / 100) + ((89075 - 41775)*22 / 100) + ((41775 - 10275)* 12 / 100) + (10275 * 10 / 100);
            console.log(`Налог 35%: ${tax}`);
         }
         if(subtracted > 539900){
            tax = ((subtracted - 539900)* 37 / 100) + ((539900 - 215950)* 35 / 100) + ((215950 - 170050) * 32 / 100) + ((170050 - 89075)* 24 / 100) + ((89075 - 41775)*22 / 100) + ((41775 - 10275)*12 / 100) + (10275 * 10 / 100);
            console.log(`Налог 37%: ${tax}`);
         }
        
    
    
    

