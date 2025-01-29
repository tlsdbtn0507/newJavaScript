function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = []; // 결과를 담을 배열
    
    // 배열 순회
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); // 현재 요소와 인덱스를 함수에 전달
    }
    
    return result; // 변환된 배열 반환
};

type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    const result:number[] = [];

    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)) {
            result.push(arr[i])
        }
    }

    return result
};