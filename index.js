let productPrice1 = 15.678;
let productPrice2 = 123.965;
let productPrice3 =90.2345;

//1 Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(Math.max(productPrice1,productPrice2,productPrice3));
//2 Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(Math.min(productPrice1,productPrice2,productPrice3));
//3 Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let productSum = productPrice1 + productPrice2 + productPrice3;
console.log(productSum);
//4 Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let totalSum = Math.floor(productPrice1)+ Math.floor(productPrice2)+ Math.floor(productPrice3);
console.log(totalSum);
//5 Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let totalSumRound = Math.ceil(totalSum/100)*100;
console.log(totalSumRound);
//6 Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let sumIsEven = Math.floor(productSum) % 2===0 ? true  : false;
console.log(sumIsEven);
//7 Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let cash = 500;
console.log(cash - productSum);
//8 Виведіть середнє значення цін, округлене до другого знаку після коми
let averageSum=(productSum/3).toFixed(2);
console.log(averageSum);
/*9 Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?*/

function howMuchToPay(price){
    let discount = (Math.random()*50).toFixed(0);
    let priceWithDiscount=price-(price*discount/100);
    console.log (priceWithDiscount.toFixed(2));
}
howMuchToPay(1000);

function howMuchEarnMoney(price){
    let discount = (Math.random()*50).toFixed(0);
    let priceWithDiscount=price-(price*discount/100);
    console.log(priceWithDiscount-(price/2)) 
}
howMuchEarnMoney(1500);


/*10 Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base частині домашнього завдання у вигляді одного рядка наступного вигляду:

Максимальна ціна: 9999.99
Мінімальна ціна: 1111.11
Вартість всіх товарів: 1345.66
...і так далі*/

let advanced=`
Максимальна ціна:${Math.max(productPrice1,productPrice2,productPrice3)}
Мінімальна ціна:${Math.min(productPrice1,productPrice2,productPrice3)}
Вартість товарів:${productSum}
Ціла частина товарів:${totalSum}
Сума товарів округлена до сотень:${totalSumRound}
Булеве значення:${sumIsEven}
Сума решти від 500:${cash - productSum}
Середнє значення:${ averageSum}
`
console.log(advanced);

let container=document.querySelector("#root");
container.innerHTML=`
<p>Максимальна ціна:${Math.max(productPrice1,productPrice2,productPrice3)}</p>
<p>Мінімальна ціна:${Math.min(productPrice1,productPrice2,productPrice3)}</p>
<p>Вартість товарів:${productSum}</p>
<p>Ціла частина товарів:${totalSum}</p>
<p>Сума товарів округлена до сотень:${totalSumRound}</p>
<p>Булеве значення:${sumIsEven}</p>
<p>Сума решти від 500:${cash - productSum}</p>
<p>Середнє значення:${ averageSum}</p>
`


