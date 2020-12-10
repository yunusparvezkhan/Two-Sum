var twoSum = function(nums, target) {
    const numberOfInputs = nums.length;
    
    for(let i = 0; i < numberOfInputs; i++) {
        for(let j= i + 1; j<numberOfInputs ; j++) {
        if(nums[i] + nums[j] === target) {
            return [nums[i] , nums[j]];
            break;
        }; 
      };
    };     
};

function getNums() {
        // let numinput = ;
        // let targett = target.value;

        let theInputs = [parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value), parseInt(number5.value)];

    let result = twoSum(theInputs, parseInt(target.value));
    console.log(result);
}