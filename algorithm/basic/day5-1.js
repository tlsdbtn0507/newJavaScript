function solution(arr, queries) {
    let val;
    for(let i = 0 ; i < queries.length; i++){

        val = arr[queries[i][0]];

        arr[queries[i][0]] = arr[queries[i][1]];
        arr[queries[i][1]] = val;            

    }
    return arr;
}