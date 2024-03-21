// const submitBtn=document.getElementById('submitBtn');
// const cityName=document.getElementById('cityName');
// const city_name=document.getElementById('city_name');
// const temp_status=document.getElementById('temp_status');
// const temp_real_val=document.getElementById('temp_real_val');
// const datahide=document.querySelector(".middle_layer");

// const getinfo= async (event)=>{
//        event.preventDefault();
//        let cityVal = cityName.value; // Get the value entered in the input field
      
    

//   if(cityVal===""){
//       city_name.innerHTML =`Please Write Name Of City Before Searching`;
//       datahide.classList.add('data_hide');

//   }else{
//      try {        
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal.toLowerCase()}&appid=ce2bdc804094f87f941f7a615cb0d6e9`;
//         const response=await fetch(url);
//          const data=await response.json();
//         const arrdata=[data];

//          city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`;

//          temp_real_val.innerText=arrdata[0].main.temp;
       
//         const tempMood=arrdata[0].weather[0].main;
//          if(tempMood="Clear"){
//             temp_status.innerHTML="<i class='fas fa-sun' style='color: #eccc68;'></i>"
//          }else if(tempMood="Clouds"){
//             temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
//          }else if(tempMood="Rain"){
//             temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
//          }else{
//             temp_status.innerHTML="<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
//          }
//          datahide.classList.remove('data_hide');

//      } 
//      catch{
//         city_name.innerHTML =`Please Enter A Proper City Name`;
//         datahide.classList.add('data_hide');
//      }
//   }
// }
// submitBtn.addEventListener('click',getinfo);


//NEW CODE BY GEMINI
const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector(".middle_layer");

const getinfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value; // Get the value entered in the input field

    if (cityVal === "") {
        city_name.innerHTML = `Please Write Name Of City Before Searching`;
        datahide.classList.add('data_hide');

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal.toLowerCase()}&appid=ce2bdc804094f87f941f7a615cb0d6e9`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`); // Improved error handling
            }
            const data = await response.json();
            const arrdata = [data];

            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

            const tempInKelvin = arrdata[0].main.temp;
            const tempInCelsius = (tempInKelvin - 273.15).toFixed(2);
            temp_real_val.innerText = Math.floor(tempInCelsius); 

            const tempMood = arrdata[0].weather[0].main;
            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            } else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"
            }
            // Remove data_hide class only if it exists
            if (datahide.classList.contains('data_hide')) {
                datahide.classList.remove('data_hide');
            }

        } catch (error) {
            city_name.innerHTML = `Please Enter A Proper City Name`;
            // Don't add data_hide if it's already present (prevents overwriting)
            if (!datahide.classList.contains('data_hide')) {
                datahide.classList.add('data_hide');
            }
        }
    }
}

submitBtn.addEventListener('click', getinfo);
