//main variables like the api and the link of the open weather
const weatherApi = 'e5d85cbfd9ce4e461d9d64828c6aa7a9';
const mainLink ='https://api.openweathermap.org/data/2.5/weather?'

// Dynamic js date instance.
let d = new Date();
const newDate = d.getDate() + " - " + (d.getMonth() + 1) + " - " + d.getFullYear();

// add event listner to the button that will show the output
const generateButton = document.querySelector('#generate');
generateButton.addEventListener('click', function (generate) {
     generate.preventDefault();

     //calling the Api and fetching 
      const zipCode = document.getElementById('zip').value;
     const getWeatherData = async () => {
      const response = await fetch(`${mainLink}zip=${zipCode},us&appid=${weatherApi}`);
      try {
          const data = await response.json();            
          return data;
      } catch (error) {
          console.log("ERORR", error);
      }
  }

//storing the feelings of the user
const userResponse = document.querySelector('.myInput').textContent;
  getWeatherData(zipCode, weatherApi)
  .then(tempreture => {
      projectData = {
          temp: tempreture.main.temp, date, userResponse,
      };
  //select every div by its id and store it in a variable 
      dateOutput = document.getElementById('date')
      tempOutput = document.getElementById('temp')
      contentOutput = document.getElementById('content')
  
      //printing the data in the most recent entry
      tempreture = tempOutput.textContent = `${projectData.temp}`;
      feelings = contentOutput.textContent = feelings.value;

      dateOutput.textContent = `${newDate} `;
      tempOutput.textContent = `${tempreture} °F `;
      contentOutput.textContent = `${feelings}`;
  
      postData('/projectData', projectData)
      .then(() => {
          async (url) => {const response = await fetch(url);
                          const data = await response.json();
          }
      }
      )
      .catch(error => {
          console.log(error);
      });
   })
  });

      //post the data.
  const postData = async (url, data) => {
          const request = await fetch(url, {
              method: 'POST',
              credentials: 'same-origin',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(data)
          });
          try {
              const data = await request.json();
              return data;
          } catch (erorr) {
              console.log('ERORR', erorr);
          };
      };