//Program to find the sum of odd numbers from the given array

const numbers =[33,4,4,13,4235,345,45,45,5,5,555,5,54,54,546,57,5,547,7,46,547,7654,75,74,67,567,6,567,45,6];

let sum=0;

for(let num of numbers){

    if(num%2==1){
        sum+=num;
    }
}
console.log(`sum:${sum}`);