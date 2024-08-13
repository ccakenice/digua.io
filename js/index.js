/* let uname = prompt('请输入用户名')
document.write(uname) */
function play() {
  var music = document.getElementById("music"); 
//判断如果音乐停止播放中，就让他播放。。。
  if (music.paused) { 
    music.paused = false;
    music.play(); 
  }
}
//调用函数
setInterval(play(), 1);
