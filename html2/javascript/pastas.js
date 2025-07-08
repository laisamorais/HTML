

const nums = [ -6,2, 3, 4,667 ]
console.log(nums)
let contador = 0
let maiorNum = nums[0]
    while(contador < nums.length){
        if(nums[contador] > maiorNum){
            maiorNum = nums[contador]
            
        }
        
    contador++
    }
console.log(" o maior valor é: " + (maiorNum))

