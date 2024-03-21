function ponkenmon(nums) {
    
    const half = nums.length/2
    
    const arr = []
    for(let i = 0; i < nums.length; i++){
        if(arr.includes(nums[i])) continue;
        else arr.push(nums[i])
    }

    return arr.length > half ? half : arr.length;
}