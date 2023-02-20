
import React, { useRef} from "react";
import { useEffect, useState } from 'react';
const userefff = () => {
let val:any=`<div class=\"ql-editor read-mode\"><p>1 If you are seeking the best
protection that money can buy then look no further. SCOTT helmets with integrated MIPS® Brain Protection System 
offer a whole new dimension in safety. No matter where or how you ride, choose a SCOTT helmet and Elevate Your Safety!
<img src=\"/files/mlHAwqNSaX86W0fe.png\">1 If you are seeking the best protection that money can buy then look no further. 
SCOTT helmets with integrated MIPS® Brain Protection System offer a whole new dimension in safety. No matter where or how you ride, 
choose a SCOTT helmet and Elevate Your Safety!<img src=\"/files/nrY3ZhOUsIxmp6Lg.png\"></p><p>2TESTING AND RESULTS&nbsp;: 
TAKING A FALL WITH A SCOTT MIPS® EQUIPPED HELMET IS VERY DIFFERENT</p><p><img src=\"/files/nrY3ZhOUsIxmp6Lg.png\"></p><p>2TESTING 
AND RESULTS&nbsp;: TAKING A FALL WITH A SCOTT MIPS® EQUIPPED HELMET IS VERY DIFFERENT</p><p><a href=\"https://youtu.be/9vnUl5zLjus\"
 rel=\"noopener noreferrer\">https://youtu.be/9vnUl5zLjus</a></p><p><br></p></div>`;

   
    // let docs:any = new DOMParser().parseFromString(val, "text/xml");
    // var newval= docs.querySelectorAll('img').length;
    // var newvalp= docs.querySelectorAll("p").innerHTML
     let newvals:any;
     let newsv:any;
    let  result:any; 
    //  for (let i = 0; i < newval; i++) {
    //   news =  docs.querySelectorAll('img')[i].attributes[0].value;
    //    newvals= docs.querySelectorAll('img')[i].attributes[0];
      
      
    //  result = news.replace(news, `https://scott-sports-v14.8848digitalerp.com${news}`);
      
    // }
   let d:any;
   let news:any;
   let ptags:any;
   let  newurl:any;
   
   const myFunction = () => {
    news= document.getElementsByClassName('features')[0]
    ptags = news.getElementsByTagName("img")
    console.log(ptags,"news")
    for (let i:any = 0; i <  ptags.length; i++) {
       newsv =  ptags[i].src
       newurl= ptags[i].attributes[0]?.value
       console.log(newsv ,"newsv1")  
   var urls = `https://scott-sports-v14.8848digitalerp.com${newurl}`
    d = newsv?.replace(newsv, urls);
     ptags[i].src = d;
   

      }
      return;
  }
  
useEffect(()=> {
  myFunction();
},[ myFunction])



  return (
    <>
  <p
            className="features"
            dangerouslySetInnerHTML={{ __html:val }}
            
          />
    

   
    
    </>
  )
}

export default userefff