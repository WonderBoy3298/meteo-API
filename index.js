    function apiCall(city){

   let APIKEY='xxxx';
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;
  
fetch(url).then(Response=>Response.json())  
    .then(datas=>{

        console.log(datas);
        document.querySelector("#city").innerHTML=datas.name;
        document.querySelector("#temps").innerHTML="<i class='fa-solid fa-temperature-full'></i><br>"+datas.main.temp;
        document.querySelector("#humidity").innerHTML="<i class='fa-solid fa-droplet-degree'></i><br>"+datas.main.humidity +'%';
        document.querySelector("#wind").innerHTML="<i class='fa-solid fa-wind'></i><br>"+datas.wind.speed+'Km/h';

    });
}
    document.querySelector("form").addEventListener('submit',function(e){

        e.preventDefault();
        let ville =  document.querySelector("#cp").value ;

        apiCall(ville);
        
    });
