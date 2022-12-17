
const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=8THVBCC7MP37DQTSVMWLGRLNH&contentType=json`;
 async function weatherdata(){

    try{
    const response = await fetch(url);
    const data =await response.json();
    console.log(data);
    const locations = data.address;
    const latitude = data.latitude;
    const longitude = data.longitude;
    const timeZone = data.timezone;
    const windSpeed =data.currentConditions.feelslike;
    const pressure= data.currentConditions.pressure;
    const humidity = data.currentConditions.humidity;
    const windDirection = data.currentConditions.dew;
    const uv_index = data.currentConditions.moonphase;
    const feelsLike = data.currentConditions.conditions;

    document.getElementById('lcn').textContent = locations;
    document.getElementById('lati').textContent = latitude;
    document.getElementById('long').textContent = longitude;
    document.getElementById('tzn').textContent = timeZone;
     document.getElementById('wsp').textContent = windSpeed;
    document.getElementById('prss').textContent = pressure;
    document.getElementById('hmd').textContent = humidity;
    document.getElementById('wnd').textContent = windDirection;
    document.getElementById('uvin').textContent = uv_index;
    document.getElementById('feel').textContent = feelsLike;
}catch(e){
    console.log("THIS IS AN ERROR");
}
 }
weatherdata();