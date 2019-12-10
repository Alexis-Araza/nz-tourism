console.log('NZ Tourism');

var accommodation = [
  {
    id: 101,
    name: 'Central CBD Apartment',
    address: '28-8 Egmont Street, Te Aro, Wellington 6011',
    city: 'Wellington',
    desc: 'One bedroom apartment with tonnes of character in one of Wellingtons most iconic central city alleyways, located only minutes walk to all on offer in the CBD and waterfront.',
    latitude : -41.292765,
    longitude : 174.777620,
    meals: {breakfast:20, lunch:20, dinner:20, all:80, noMeal: 0},
    photo1: 'images/accommodation/apt1.jpg',
    photo2: 'images/accommodation/apt2.jpg',
    photo3: 'images/accommodation/apt3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/28409550?adults=2&children=2&source_impression_id=p3_1575511028_xMP639FGSYUpXt8f',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.292765, 174.777620',
    minNight: 2,
    maxNight: 5,
    price: 196
  },

  {
    id: 102,
    name: 'The Old Sailor\'s Villa in the City',
    address: '42 Roxburgh Street, Mount Victoria, Wellington 6011',
    city: 'Wellington',
    desc: 'This sunny and beautifully restored 1906 colonial villa oozes character and is in an amazing central location in Mt Vic. Popular with honeymooners, couples, and families - you can walk back to rest during the day, or before heading out in the evening.',
    latitude : -41.292917,
    longitude : 174.786514,
    meals: {breakfast:20, lunch:30, dinner:35, all:85, noMeal: 0},
    photo1: 'images/accommodation/sail1.jpg',
    photo2: 'images/accommodation/sail2.jpg',
    photo3: 'images/accommodation/sail3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/12057365?adults=2&children=2&previous_page_section_name=1000&search_id=7f386995-966e-6fb6-5a86-ad34668757fc&federated_search_id=9faa7c54-9add-4324-b5f6-cfb6decbef48',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.292917, 174.786514',
    minNight: 2,
    maxNight: 10,
    price: 200
  },

  {
    id: 103,
    name: 'French-style Villa by by the beach front',
    address: '387 Karaka Bay Road, Karaka Bays, Wellington 6022',
    city: 'Wellington',
    desc: '1898 French Style Beach Villa that provides seaside strolls and expansive views to Wellington Harbor. This French style Villa was originally built as a convalescent and holiday home by the sea.',
    latitude : -41.305102,
    longitude : 174.831207,
    meals: {breakfast:20, lunch:35, dinner:40, all:95, noMeal: 0},
    photo1: 'images/accommodation/villa1.jpg',
    photo2: 'images/accommodation/villa2.jpg',
    photo3: 'images/accommodation/villa3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/14168822?adults=2&children=2&guests=1&source_impression_id=p3_1575511819_gtNgz1%2BOFsU2KLrj&s_tag=tTc_nCHs',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.305102, 174.831207',
    minNight: 3,
    maxNight: 15,
    price: 310
  },
];





//date calculation with date pickers
$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);


      $("#endDate").datepicker( "option", "maxDate", enDate );

  }
});


$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});





//Find the number of days between dates
function dateDiff() {

  var start = $('#startDate').datepicker('startDate');
  var end = $('#endDate').datepicker('endDate');
  var days = (end - start)/1000/60/60/24;

    console.log(days);
    return days;
};

function guestsAmount() {

  var guestsString = $('#guests').val();
  var guests = parseInt(guestsString);

    console.log(guests);
    return guests;
};

function placePick() {

  var placeString = $('#place').val();
  var place = parseInt(placeString);

    console.log(place);
    return place;
};





function generalFilter() {
  var result = filterGuests(accommodation); 
  result = filterNights(result);
  displayOptions(result);
  data.filteredAccommodation = result;
  return result;
};





document.getElementById('acomList').addEventListener('click', function(){

  var nights = dateDiff();
  var guests = guestsAmount();
  var place = placePick();
  var arrivalDate = $('#startDate').datepicker({ dateFormat: 'dd-mm-yy' }).val();
  var departDate = $('#endDate').datepicker({ dateFormat: 'dd-mm-yy' }).val();
  saveData(arrivalDate, departDate, guests, nights);

    var result = generalFilter();
    initMap();

      document.getElementById('staySynopsis').innerHTML =
      '<p> You will be in ' + place + ' for ' + nights + 'nights, between' + formatDate (arrivalDate) + ' & ' + formatDate (departDate) + ' with ' + guests + ' guests.</p>'
});





// // function to decalre varibles, read and get value
// function getInfo(){

//   var days, selectGuest, place, selectPlace, guest, start, end;

//   place = document.getElementById('place');
//   selectPlace = place.options[place.selectedIndex].text;

//   guest = document.getElementById('adults');
//   selectGuest = guest.options[guest.selectedIndex].text;

//   start = $('#startDate').datepicker('startDate');
//   end = $('#endDate').datepicker('endDate');

//   days = dateDiff();

// };





// var selected = [];

// // Filter the options based on user's input
// var selectedArray =[];





// function filter(){

//   getInfo();
//   console.log(selectPlace, selectGuest, days);
//   document.getElementById('searchInput').innerHTML = '';

//     for(var i=0; i< accommodation.length; i++){
//       console.log(selectPlace,accommodation[i].city);

//       if ((selectPlace === accommodation[i].city)
//            && (days >= accommodation[i].minNight) && (days <= accommodation[i].maxNight)){
//             console.log(accommodation[i]);
//         	displayAccommodation(i);
//        }

//       }
//     console.log(selectPlace, days);
//     console.log(accommodation[i]);

//     id ++;
//   };





//  // display summary of trip selection details
//  function displaystayDesc(){
//    getInfo();

//    // convert date picker to string
//    var dateStart = $.datepicker.formatDate('dd-mm-yy', start);
//    var dateEnd = $.datepicker.formatDate('dd-mm-yy', end);

//    console.log(typeof selectPlace, typeof selectGuest, typeof startDate, typeof endDate , typeof days);

//    document.getElementById('stayDesc').innerHTML ='';
//    document.getElementById('stayDesc').innerHTML
//    += startDate + endDate + selectGuest + selectPlace + days;
//  };




// var id = 101;
function displayAccommodation(s) {
  displaystayDesc();

  var days = dateDiff();
  var total = accommodation[s].price * days;


  document.getElementById('acomStay').innerHTML
+= '<div class="stay1" type="button" data-toggle="modal" data-target="#myModal">'
+		'<div class="row">'
+			'<center>'
+				'<img src="images/accommodation/aptMain.jpg">'
+				'<h2>' + accommodation[s].name + '</h2>'

+				'<p id="stayList">' + accommodation[s].address + ' </p>'
+				'<br>'

+				'<p> $' + accommodation[s].price + ' per night</p>'
+			'</center>'
+		'</div>'
+	'</div>';
};





// // move from search to accommdation list result
// document.getElementById('acomList').addEventListener('click', function(){
//     validate();
//   });




// // show stay list
// function validate() {
//   place = document.getElementById('place');
//   selectPlace = place.options[place.selectedIndex].text;

//   guest = document.getElementById('adults');
//   selectGuest = guest.options[guest.selectedIndex].text;

//   start = $('#startDate').datepicker('startDate');
//   end = $('#endDate').datepicker('endDate');

//     filter();
//   };

// document.getElementById('acomList').addEventListener('click', function(){
// var x = document.getElementById('acomStay');
//   if (x.style.display === "show") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "show";
//   }   
// }
// );






// console.log('location details');
// // Depending on the number of days the user books, fees to be calculated

// // $('#map').hide();

// // $(document).ready(function(){
// //   $('#details').click(function(){
// //     $('#map').show();

//     //reading user data
//     // var place=document.getElementById('#place').value;
//     // console.log(place);
//     // initMap(place);
// //   });

// // });


// // var steakQuantity = parseInt(prompt("how many steaks would you like?"));
// // var sauceQuantity = 0;

// // if (steakQuantity >= 2) {
// // 	console.log ("You will get a free sauce on the side!");
// // 	var sauce = prompt("would you like sauce with that?");
// // }

// // if (sauce ==="yes") {
// // 	var steakQuantity = parseInt(prompt("how much sauce would you like?"));

// // 	}


// // console.log(steakQuantity,sauceQuantity);
// // var steakCost = steakQuantity * 25.60 + sauceQuantity * 2;

// // console.log(steakCost);
// // document.getElementById('result').innerHTML = "steakCost=" + steakCost + sauceQuantity;





// Open the Modal
function openModal() {
  document.getElementById("#myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("#myModal").style.display = "none";
}

var slideIndex = 1;
  showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
};




// function openModal(){
//   $('.modal').on('click', function(){
//       document.getElementById('modalContent').innerHTML
//         = '<div class="modal-header">'
//         +   '<h4 class="modal-title">Central CBD Apartment</h4>'
//         +   '<button type="button" class="close" data-dismiss="modal" id="close">&times;</button>'
//         + '</div>'

//         + '<div class="mySlides">'
//         +   '<img src="images/accommodation/apt1.jpg" class="m-img">'
//         + '</div>'

//         + '<div class="mySlides">'
//         +   '<img src="images/accommodation/apt2.jpg" class="m-img">'
//         + '</div>'

//         + '<div class="mySlides">'
//         +   '<img src="images/accommodation/apt3.jpg" class="m-img">'
//         + '</div>'

//         + '<a class="prev" onclick="plusSlides(-1)" style="color: #f2f2f2">&#10094;</a>'
//         + '<a class="next" onclick="plusSlides(1)" style="color: #f2f2f2">&#10095;</a>'



//         + '<div class="modal-body">'

//         + '<p>'
//         +   'One bedroom apartment with tonnes of character in one of Wellingtons most iconic central city alleyways, located only minutes walk to all on offer in the CBD and waterfront.'
//         + '</p>'

//         + '<br>'

//         + '<p>'
//         +   '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.710473633682!2d174.7750815795289!3d-41.2934052793744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd9e763e2e1%3A0xf8fc2948976e27fb!2s28%20Egmont%20Street%2C%20Te%20Aro%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1575824915404!5m2!1sen!2snz" width="290" height="100" frameborder="0" style="border-style: none;margin: 0 auto; padding: 0;" allowfullscreen=""></iframe>'
//         + '</p>'

//         + '<br>'

//         + '<p> Insert Cost p night </p>'

//         + '</div>';
//       }
// )};




//Google Maps API key
var myKey = JSON.parse(apiKey);
console.log(myKey);

var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
script.async = true;
script.defer = true;
document.getElementsByTagName('body')[0].appendChild(script);

var map;
// var markers =[];

// function clearMarkers(){
//     for (let i = 0; i < markers.length; i++) {
//         markers[i].setMap(null);
//     }
// }

function initMap() {
    // var array = data.filteredAccommodation;
    // var searchButton = document.getElementById('acomList');
    console.log('initmap here')

      map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -40.900558, lng: 174.885971},
            zoom: 2
            });
    };


        // map = new google.maps.Map(document.getElementById('map'), {
        //   center: {lat: -34.397, lng: 150.644},
        //   zoom: 8
        // });
   
//     clearMarkers();

//     for (let i = 0; i < array.length; i++) {
//         let marker = new google.maps.Marker({
//           position: {lat: array[i].latitude, lng: array[i].longitute},
//           map: map,
//         });

//         markers.push(marker);

//         let content = `<div class="content">
//             <h4 id="marker">${array[i].name}</h4>
//             <img src="${array[i].image1}" class="marker-image"/>
//             <div class="m-1">${array[i].type.toUpperCase()}</div>
//             <div class="m-1">${array[i].address}</div>
//             <div class="m-1 text-primary">Price: $<span>${array[i].priceNight}/night</span></div>
//             <div class="m-1">Minimum people: <span>${array[i].minPeople}</span></div>
//             <div class="m-1">Maximum people: <span>${array[i].maxPeople}</span></div>
//             <div class="m-1">Minimum nights: <span>${array[i].minNights}</span></div>
//             <div class="m-1">Maximum nights: <span>${array[i].maxNights}</span></div>
//             </div>`
        
//         let infowindow = new google.maps.InfoWindow({ content: content });
       
//         newWindow(marker, infowindow);

//         function newWindow(newMarker, newInfowindow){
//             marker.addListener('click', function() {
//                 if(oldwindow){
//                     oldwindow.close();
//                 }
//                 newInfowindow.open(map, newMarker);
//                 oldwindow = newInfowindow;
//             });
//         }
//     }
// } //initMap ENDS





// //accessing apiKey from external JSON file
// var myKey = JSON.parse(apiKey);
// console.log(myKey[0].key);


// //array of objects for place details
// var locations = [
//   {
//     name : "Lyall Bay",
//     place: "Wellington",
//     distance : "5.6 Km",
//     travelDuration: 19,
//     lat:-41.3269,
//     long:174.7953
//   },
//   {
//     name : "Days Bay",
//     place: "Wellington",
//     distance : "23.5 Km",
//     travelDuration: 40,
//     lat:-41.2816,
//     long:174.9068
//   },
//   {
//     name : "Oriental Bay",
//     place: "Wellington",
//     distance : "1.6 Km",
//     travelDuration: 7,
//     lat:-41.2913,
//     long:174.7941
//   },
// ] //end of array of objects


// //dynamically creating script tag and appending to the html body including the apikey
// var script = document.createElement('script');
// script.src = 'https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key ;
// document.getElementsByTagName('body')[0].appendChild(script);

// //function to bring map and its components
// function initMap(p,d) {
//   console.log(p,d);
//     // var center = {lat: -41.2911449, lng: 174.7814447}; ;

//     var oldwindow;
//     var center;

//     if (p === "Wellington") {
//       center = {lat: -41.2911449, lng: 174.7814447};
//       zoom = 14;
//     }
//     console.log(chosenLocation);


//     var map = new google.maps.Map(
//       document.getElementById("map"), {zoom: zoom, center: location});


//     for(var i=0; i<accommodation.length; i++ ){
//       for (var j = 0; j < d.length; j++) {


//       console.log(d[j], accommodation[i].id);
//       if (d[j] === accommodation[i].id) {

//         console.log(accommodation[i].id);
//          // create content dynamically
//          var contentString
//            = '<a href="' + accommodation[i].website + '" target="_blank"><img class="marker-img-size thumbnail" src="'+ accommodation[i].photo1 + '" alt="photo"></a>'
//            + '<h6 class="pt-1">' + accommodation[i].name + '</h6>'
//            + '<p>$' + accommodation[i].price + ' /night </p>';



//        // create infowindow
//      var infowindow = new google.maps.InfoWindow({ content: contentString });


//       // position to add marker
//       var position = {lat: accommodation[i].latitude, lng: accommodation[i].longitude};

//       // create marker
//        var myIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon56.png';
//        var marker =  new google.maps.Marker({
//          position: position,
//          map: map,
//        });

//        newWindow(marker, infowindow);

//        function newWindow(newMarker, newInfowindow){

//          newMarker.addListener('click', function() {

//            if( oldwindow){
//              oldwindow.close();
//            }
//            newInfowindow.open(map, newMarker);
//            oldwindow = newInfowindow;
//          }); // end of addListener

//        } // end of newWindow function
//      }
//     } // end of for

//  } // end of for

} //initMap ENDS