/* let uname = prompt('请输入用户名')
let age = prompt('请输入年龄')
let gender = prompt('请输入性别')
document.write(uname,age,gender) */
/* let num = +prompt('请输入数字')
let num2 = +prompt('请输入数字')
// document.write(num + num2)
alert (`结果为:${num + num2}`) */
/* let num = +prompt('请输入数字')
alert(num % 4 === 0 && num % 100 !== 0) */
// 
/* let i = 1
let sam = 0
while (i <= 100) {
  sam = sam + i
 
  i++
} 
document.write(sam) */
// let sam = 0
// for(let i = 1; i <= 100; i++ ) {
//   if(i % 2 === 0)
//   sam += i
// }
// document.write(sam)
// let obj = {
//   uname: '盐',
//   age :20,
//   gender:'男'
// }
// for (let k in obj) {
//   console.log(obj[k])
// }
function fn () {
  console.log('一秒执行一次')
}
let n = setInterval(fn,2000)
console.log(n)
clearInterval(n)