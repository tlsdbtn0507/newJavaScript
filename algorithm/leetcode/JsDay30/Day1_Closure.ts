type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounter(n: number): () => number {
    
    return function() {
        return n++
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

function createCounter2(init: number): Counter {
  const pure = init
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => init = pure,
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const output = (msg:string) => {
        throw new Error(msg)
    }

    return {
        toBe:( val2 ) =>  val === val2 || output("Not Equal"),  
        notToBe:(val2 )=> val !== val2 || output("Equal")
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */