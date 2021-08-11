

/**
 * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
 */
 
{
let sum = 0
let proiz = 1
let niz1 = [4,5,6,7,8,4,7,9]
let temp=[]
function proizvod(niz) {
for (let i=0; i<niz1.length; i++) {
sum+=niz1[i]
proiz*=niz1[i]}
temp.push(sum,proiz)
return temp
}

console.log(proizvod(niz1))
}
 
 /* 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
 */
{
let nekiNiz = [4,5,6, 0, undefined, 7, NaN,4,7,9]
let temp = []
 
function fja (niz) {
    for(let i=0; i<nekiNiz.length; i++)
    if(nekiNiz[i]) {
        temp.push(nekiNiz[i])}
        return temp
    }
console.log(fja(nekiNiz))
}

 /* 4. За првих 100 бројева исписати:
 *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
 *       Ако је дељив са 3,5,7 - FizzBuzzZazz
 *       3,5 - FizzBuzz
 *       3,7 - FizzZazz
 *       5,7 - BuzzZazz
 */ 
{

for(i=1; i<=100; i++)
{
    if(i%3== 0 && i%5==0 && i%7==0) {console.log(`FizzBuzzZazz`)}
    else if (i%3== 0 && i%5==0) {console.log(`FizzBuzz`)}
    else if (i%3== 0) {console.log(`Fizz`)}
    else if (i%5== 0) {console.log(`Buzz`)}
    else {console.log(i)}
}


}
 /* 5. Izvrsiti inverziju brojeva bez pomocne promenljive. 
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti"
 * 
 */
{
 let x = 5
 let y = 9
 x = x + y
 y = x - y
 x = x - y
 console.log(x)
 console.log(y)
}