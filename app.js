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

/**
 *  トリボナッチ数列を返す。
 * 高速化版。（メモリの使用）
 * @param {Number} n
 * @returns {Number}
 */
const trimemo = new Map();
trimemo.set(0, 0);
trimemo.set(1, 0);
trimemo.set(2, 1);

function trionacciMap(n) {
  if (trimemo.has(n)) {
    return trimemo.get(n);
  }
  const value = trionacciMap(n - 1) + trionacciMap(n - 2) + trionacciMap(n - 3);
  trimemo.set(n, value);
  return value;
}

const trilenght = 40;
for (let i = 0; i <= trilenght; i++) {
  console.log(trionacciMap(i));
}
