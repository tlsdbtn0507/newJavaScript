function ponkenmon(nums) {
    
    const half = nums.length/2
    
    const arr = []
    for(let i = 0; i < nums.length; i++){
        if(arr.includes(nums[i])) continue;
        else arr.push(nums[i])
    }

    return arr.length > half ? half : arr.length;
}

function connieClothes(clothes) {
    let arr = [];

    for(let i = 0; i < clothes.length; i++){
        if (!arr.flat().includes(clothes[i][1]))
            arr.push([clothes[i][1],[clothes[i][0]]]);
        else {
            let j = arr.findIndex(e => e[0] === clothes[i][1]);
            arr[j][1].push(clothes[i][0]);
        }
            
    }
    
    const count = arr.map(e => e[1].length + 1).reduce((a, b) => a * b) - 1;
    return count;
}

function (genres, plays) {
    var hash = [];
    
    for(let i = 0; i < genres.length; i++){
        if(!hash.flat().includes(genres[i]))
           hash.push([genres[i],plays[i]])
        else{
            const ind = hash.findIndex(e=>e[0] === genres[i])
            hash[ind][1] += plays[i]
        }
    }
    
    console.log(hash.sort((a,b)=> a[1] < b[1] ? 1 : -1))
    
    return hash;
}