let nums = [1,2,3,4];
function IsDublicate(nums){
    const visitedNums = {};
    let found;
    for (let i = 0; i< nums.length; i++){
        const num = nums[i]
        if (visitedNums[num]){
            console.log('true'); found =true;
        }else{
            visitedNums[num] = true;
        }
    }
   if (!found){
        console.log("false");
   }

}
IsDublicate(nums);