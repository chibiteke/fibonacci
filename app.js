'use strict';
/**
 * フィボナッチ数列を返す
 * @param {Number} n
 * @returns {Number}
 */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * フィボナッチ数列を返す。
 * 高速化版。（メモリの使用）
 * @param {Number} n
 * @returns {Number}
 */
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fibonacciMap(n) {
  if (memo.has(n)) {
    return memo.get(n);
  }
  const value = fibonacciMap(n - 1) + fibonacciMap(n - 2);
  memo.set(n, value);
  return value;
}

const lenght = 40;
for (let i = 0; i <= lenght; i++) {
  // console.log(fibonacci(i));
  console.log(fibonacciMap(i));
}
