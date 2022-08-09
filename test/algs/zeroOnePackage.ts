
/**
 * dp[i][j] = Max(dp[i-1][j-w[i]] + v[i], dp[i-1][j])
 */
export default function zeroOnePackage(v: number[], w: number[], N: number, V: number): number {
  const dp: number[][] = []
  for(let i = 0; i < N; ++i) {
    dp[i] = [0]
    for(let j = 1; j <= V; ++j) {
      if(i === 0) {
        dp[i][j] = j >= w[i] ? v[i] : 0
      } else {
        if(j < w[i]) {
          dp[i][j] = dp[i-1][j]
        } else {
          dp[i][j] = Math.max(dp[i-1][j-w[i]] + v[i], dp[i-1][j])
        }
      }
    }
  }
  // console.log('~~~~', dp)
  return dp[N - 1][V]
}