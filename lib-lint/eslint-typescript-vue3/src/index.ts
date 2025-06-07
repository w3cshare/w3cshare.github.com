// 测试代码
export function add(a: number, b: number) {
  const aaa = {
    a: 1,
    b: 2,
    c: '3',
  }
  return a + b + JSON.stringify(aaa)
}
