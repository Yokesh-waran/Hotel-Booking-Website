
var place = location.search;

console.log(place);
  
  let locat = `https://travel-advisor.p.rapidapi.com/locations/search?query=${place }&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`;    
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '55d4510af9mshc591a3a1644c60ep1c20e4jsn8c5842c5bbc9',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  fetch(locat , options)
    .then(response => response.json())
    .then((response)=>{
     let hotel = response.data;
    console.log(hotel);
      var html =" ";
       hotel.map((values)=>{
        
        let img1 = values.result_object.photo.images.medium.url;
        let hotelname = values.result_object.name;
        let hoteladress = values.result_object.address;
        let hotelrating = values.result_object.rating;
        let hotelid1 = values.result_object.location_id;
        //  console.log(hoteladress);s
         console.log(hotelid1);
        html += `
        <a id="atag" href="detail.html?location_id=${hotelid1}">
        <div class="grid-item" >   
            <img src=${img1} alt=""
                class="hotel">
            <div class="rating">
                <h2>${hotelname}</h2>
                <div class="stars">
                   <span >${hotelrating}</span>
                    <span class="star checked">&#9733;</span>
                    
                    
                    <br>
                    <br>
                    <p>${hoteladress}</p>
                </div>
    
            </div>
        
    
        </div>
        </a>
        `
    
       })
  document.getElementById("contentlist").innerHTML = html;
      console.log(response.data)
  }).catch(err => console.error(err));
  
  
  
  
  
   
