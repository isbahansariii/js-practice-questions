let arr = [3,2,4];
target = 6;

function twoSum (arr, target){
        for (let i=0; i<arr.length; i++){
        
        for(let j=i+1; j<arr.length; j++){
            if(target-arr[i] === arr[j]) return [i,j];
        }

    }
    
}

console.log(twoSum(arr, target))
