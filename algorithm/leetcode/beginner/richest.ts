function maximumWealth(accounts: number[][]): number {
    const a = accounts.map(arr=>{
        return arr.reduce((a,b)=>a+b)
    })

    return a.sort((a,b)=>b-a)[0]
};