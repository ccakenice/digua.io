const sliderDate = [
  { url:'../lun/lun1.png', title:'',color:'' },
  { url:'../lun/lun2.png', title:'',color:'' },
  { url:'../lun/lun3.png', title:'',color:'' },
  { url:'../lun/lun4.png', title:'',color:'' }, 
  { url:'../lun/lun5.png', title:'',color:'' },
  { url:'../lun/lun6.png', title:'',color:'' },
  { url:'../lun/lun7.png', title:'',color:'' },
  { url:'../lun/lun8.png', title:'',color:'' }, 
  { url:'../lun/lun9.png', title:'',color:'' }
]
 const random = parseInt(Math.random() * sliderDate.length)
//  console.log(sliderDate[random]);
  const img = document.querySelector('.toutu img')
  let i = 0 
  setInterval(function() {
    i++
    if(i >= sliderDate.length) {
      i = 0
    }
    img.src = sliderDate[i].url
    // console.log(11);
  },15000)
  

