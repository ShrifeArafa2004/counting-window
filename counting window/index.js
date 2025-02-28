let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');

let get =setInterval(()=>{
    let currentTime=new Date()

    one.innerHTML=(currentTime.getHours()<10?"0":"" )+currentTime.getHours();
two.innerHTML=(currentTime.getMinutes()<10?"0":"" )+currentTime.getMinutes();;
three.innerHTML=(currentTime.getSeconds()<10 ?"0":"")+currentTime.getSeconds() ;

},1000)
