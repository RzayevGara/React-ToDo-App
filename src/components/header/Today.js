import React from 'react'

function Today() {
    let today = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayName = days[today.getDay()];
          
    return (
    <p>Seems it's {dayName} 📅</p>
  )
}

export default Today