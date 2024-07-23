//Program to find the largest number from the given array

const numbers = [223,243,45,345, 744,635,999,5656,3454,25,1025,1551];

let largest=numbers[0];

for(let i=1; i<numbers.length ; i++)
{
    if(numbers[i]>largest){
        largest=numbers[i];
    }
}

console.log(largest);