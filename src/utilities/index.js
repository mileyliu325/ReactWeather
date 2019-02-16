
export function getDayOfWeek(date) {
    var dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'][dayOfWeek];
  }

export function getWeatherKeyWord(summary) {

   if (summary.includes("cloudy")){
       return "CLOUDY";
   }
   else if (summary.includes("sunny")){
       return "SUNNY"
   }
   else if (summary.includes("rain")){
       return "RAINING"
   }
   else if (summary.includes("storm")){
    return "STORM"
}

}