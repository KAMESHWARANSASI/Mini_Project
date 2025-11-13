

function setTime(){
    const datetime=new Date()
    const h= document.getElementById('hour').innerHTML=(`${datetime.getHours()}`)
    const m=document.getElementById('minute').innerHTML=(`${datetime.getMinutes()}`)
    const s= document.getElementById('secont').innerHTML=(`${datetime.getSeconds()}`)

    if(m<10)
    {
     document.getElementById('minute').innerHTML=( "0" + m) 

    }
     if(s<10)
    {
     document.getElementById('secont').innerHTML=( "0"+s) 

    }

    if(h>12)
    {
        document.getElementById('hour').innerHTML=(h-12)
        document.getElementById('ampm').innerHTML="PM"
    }
    
}
 
setInterval(setTime,1000)