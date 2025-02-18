function solution(dots) {
  const getSlope = (arr1, arr2) => {
    return (arr1[0] - arr2[0]) / (arr1[1] - arr2[1])
  }

  const a = getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])
  const b = getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])
  const c = getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])

  return a || b || c ? 1 : 0

}