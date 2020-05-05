// function timeConversion(s) {
  
//     // removing and turning hour into int
//     let spl = s.split('')

//     let hour = spl.splice(spl[0],2);
//     let hourString = ''
//     let combineToNumber = hourString.concat(hour[0],hour[1]);
//     let turnToInt = parseInt(combineToNumber);

//     // saving the minutes and seconds 
//     let minutesAndSeconds = spl.splice(spl[0],6)
//     // turning minandsec back to string 
//     let joinedMinAndSec = minutesAndSeconds.join('');
    
    
//     if (spl[spl.length - 2] === 'P'){
//         let addTwelve = turnToInt + 12;
//         let turnBackToString= addTwelve.toString();
//         let finalPmStr = turnBackToString.concat(joinedMinAndSec)
//         return finalPmStr;

//     } else if (spl[spl.length - 2] === 'A'){
//       let turnToStr = turnToInt.toString();
//       let finalAmSt = turnToStr.concat(joinedMinAndSec);
//       return finalAmSt      
//     }
// }
// const st = '11:59:59PM';
// const stMorning= '12:00:00AM';
// timeConversion(st);


// // 12:40:22AM, am time in the morning should be :40:22AM which means it's in the morning once 1 hits then its 

// //06:40:03AM output is 6:40:03 so we need the zero 

// // 04:59:59AM => 04:59:59AM

// // 12:45:54PM => is 12:45:54 

// //12:00:00AM goes to 00000000

// //11:59:59PM



function timeConversion(time) {
  var PM = time.match('PM') ? true : false
  
  time = time.split(':')
  var min = time[1]
  
  if (PM) {
    var hour = time[0];
      if (hour ==='12'){
        hour = '12';
        var sec = time[2].replace('PM', '')
      } else if (hour !== '12'){
      var hour = 12 + parseInt(time[0],10)
      var sec = time[2].replace('PM', '')
      }
  } else {
      var hour = time[0];
      if (hour === '12'){
        hour = '00';
      }
      var sec = time[2].replace('AM', '')       
  }
  return (hour + ':' + min + ':' + sec)
}
timeConversion('1:45:54PM');