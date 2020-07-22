console.log('NZ Tourism');

var myKey = JSON.parse(apiKey);//convert json data into js object
var map;//declaring map variable at the start of js to show it is a global variable

//creating a script element dynamically to use the API key securely from the seperate JSON file
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + myKey[0].key + '&callback=initMap';
document.getElementsByTagName('body')[0].appendChild(script);

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
    mainPhoto: 'images/accommodation/aptMain.jpg',
    photo1: 'images/accommodation/apt1.jpg',
    photo2: 'images/accommodation/apt2.jpg',
    photo3: 'images/accommodation/apt3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/28409550?adults=2&children=2&source_impression_id=p3_1575511028_xMP639FGSYUpXt8f',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.292765, 174.777620',
    guest: 2,
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
    mainPhoto: 'images/accommodation/sailMain.jpg',
    photo1: 'images/accommodation/sail1.jpg',
    photo2: 'images/accommodation/sail2.jpg',
    photo3: 'images/accommodation/sail3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/12057365?adults=2&children=2&previous_page_section_name=1000&search_id=7f386995-966e-6fb6-5a86-ad34668757fc&federated_search_id=9faa7c54-9add-4324-b5f6-cfb6decbef48',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.292917, 174.786514',
    guest: 3,
    minNight: 3,
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
    mainPhoto: 'images/accommodation/villaMain.jpg',
    photo1: 'images/accommodation/villa1.jpg',
    photo2: 'images/accommodation/villa2.jpg',
    photo3: 'images/accommodation/villa3.jpg',
    website: 'https://www.airbnb.co.nz/rooms/14168822?adults=2&children=2&guests=1&source_impression_id=p3_1575511819_gtNgz1%2BOFsU2KLrj&s_tag=tTc_nCHs',
    location: 'https://www.google.com/maps/search/?api=1&query=-41.305102, 174.831207',
    guest: 4,
    minNight: 4,
    maxNight: 15,
    price: 310
  },

  {
    id: 104,
    name: 'Entire AKL Apartment',
    address: '105 Greys Avenue, Auckland CBD, Auckland 1010',
    city: 'Auckland',
    desc: 'Our brand new modern contemporary one-bedroom studio in Auckland CBD.',
    latitude : -36.854327,
    longitude : 174.760715,
    meals: {breakfast:20, lunch:20, dinner:20, all:80, noMeal: 0},
    mainPhoto: 'images/accommodation/aklMain.png',
    photo1: 'images/accommodation/akl1.png',
    photo2: 'images/accommodation/akl2.png',
    photo3: 'images/accommodation/akl3.png',
    website: 'https://www.airbnb.co.nz/rooms/44312759?adults=2&location=Auckland%20Central%2C%20Auckland&check_in=2020-07-23&check_out=2020-07-26&source_impression_id=p3_1595380794_cTZ9s2wmHpbzm2yu&guests=1',
    location: 'https://www.google.com/maps/place/105+Greys+Avenue,+Auckland+CBD,+Auckland+1010/@-36.8543305,174.7601613,19z/data=!3m1!4b1!4m5!3m4!1s0x6d0d47ef258c2adb:0x1be98abd47de52f9!8m2!3d-36.8543305!4d174.7607085',
    guest: 2,
    minNight: 3,
    maxNight: 10,
    price: 101
  },

    {
    id: 105,
    name: 'Shabby Meets Chic',
    address: '2D Waterview Road, Devonport, Auckland 0624',
    city: 'Auckland',
    desc: 'Our villa offers you a separate self contained apartment with a large sunny patio and garden.',
    latitude : -36.825569, 
    longitude : 174.788580,
    meals: {breakfast:20, lunch:30, dinner:45, all:120, noMeal: 0},
    mainPhoto: 'images/accommodation/chicMain.png',
    photo1: 'images/accommodation/chic1.png',
    photo2: 'images/accommodation/chic2.png',
    photo3: 'images/accommodation/chic3.png',
    website: 'https://www.airbnb.co.nz/rooms/15112007?adults=3&location=Auckland%20Central%2C%20Auckland&check_in=2020-07-23&check_out=2020-07-26&source_impression_id=p3_1595381803_EaEvU70m26L5I%2FsG&guests=1',
    location: 'https://www.google.com/maps/place/2D+Waterview+Road,+Stanley+Point,+Auckland+0624/@-36.8254696,174.787961,19z/data=!3m1!4b1!4m5!3m4!1s0x6d0d37eec90b0123:0xf967f6e75a548538!8m2!3d-36.8254696!4d174.7885082',
    guest: 3,
    minNight: 2,
    maxNight: 10,
    price: 145
  },

      {
    id: 106,
    name: 'Central Christchurch Cottage',
    address: '275 Worcester Street, Christchurch Central, Christchurch 8011',
    city: 'Christchurch',
    desc: 'This cute cottage with off street garaged parking makes for an excellent centrally located place to stay in Christchurch.',
    latitude : -43.5307912,
    longitude : 172.6485329,
    meals: {breakfast:20, lunch:50, dinner:35, all:100, noMeal: 0},
    mainPhoto: 'images/accommodation/chchMain.png',
    photo1: 'images/accommodation/chch1.png',
    photo2: 'images/accommodation/chch2.png',
    photo3: 'images/accommodation/chch3.png',
    website: 'https://www.airbnb.co.nz/rooms/8846958?adults=4&location=Christchurch%20Central%2C%20Christchurch%2C%20Canterbury&check_in=2020-07-23&check_out=2020-07-26&source_impression_id=p3_1595382996_ArKZtbiJ3emeUH%2BM&guests=1',
    location: 'https://www.google.com/maps/place/275+Worcester+Street,+Christchurch+Central,+Christchurch+8011/@-43.5307912,172.6485329,19z/data=!4m13!1m7!3m6!1s0x6d31898a1d5b67d7:0xf1ec213cf5a7fd92!2s275+Worcester+Street,+Christchurch+Central,+Christchurch+8011!3b1!8m2!3d-43.5307912!4d172.6490801!3m4!1s0x6d31898a1d5b67d7:0xf1ec213cf5a7fd92!8m2!3d-43.5307912!4d172.6490801',
    guest: 4,
    minNight: 2,
    maxNight: 15,
    price: 169
  },

      {
    id: 107,
    name: 'Loft Apartment - Edge of CBD',
    address: '430 Madras Street, St Albans, Christchurch 8014',
    city: 'Christchurch',
    desc: 'This is a spacious 1 bedroom loft style apartment with a king bed, that is completely self contained. It has secure off street parking, your own private courtyard and a fully equipped kitchen.',
    latitude : -43.5200787,
    longitude : 172.6408545,
    meals: {breakfast:15, lunch:20, dinner:35, all:90, noMeal: 0},
    mainPhoto: 'images/accommodation/loftMain.png',
    photo1: 'images/accommodation/loft1.png',
    photo2: 'images/accommodation/loft2.png',
    photo3: 'images/accommodation/loft3.png',
    website: 'https://www.airbnb.co.nz/rooms/36955293?adults=2&location=Christchurch%20Central%2C%20Christchurch%2C%20Canterbury&check_in=2020-07-23&check_out=2020-07-26&source_impression_id=p3_1595383015_WZGPhS%2FdYAQdA9Ik&guests=1',
    location: 'https://www.google.com/maps/place/430+Madras+Street,+St+Albans,+Christchurch+8014/@-43.5200787,172.6408545,17z/data=!3m1!4b1!4m5!3m4!1s0x6d318a2bf7b76c3f:0x618df7845fe948c8!8m2!3d-43.5200787!4d172.6430432',
    guest: 2,
    minNight: 3,
    maxNight: 14,
    price: 85
  }

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

  var start = $('#startDate').datepicker('getDate');
  var end = $('#endDate').datepicker('getDate');
  var days = (end - start)/1000/60/60/24;

    console.log(days);
    return days;
};



var guest;

// function guestsAmount() {

//   var guestsString = $("#adults option:selected").text();
//   var guests = parseInt(guestsString);

//     return guests;
// };

// function placePick() {

//   var place = $("#place option:selected").val();
//   var place = parseInt(placeString);

//     console.log(place);
//     return place;
// };



// function generalFilter() {
//   var result = filterGuests(accommodation); 
//   result = filterNights(result);
//   displayOptions(result);
//   data.filteredAccommodation = result;
//   return result;
// };


// var criteria = {
//   dayNumber: 0,
//   guestNumber: 0,
//   city: ''
// }






// function filter(obj){

//   // document.getElementById('acomStay').innerHTML = '';

//   var result = [];
//   var days = obj['dayNumber'];
//   var place = obj['city'];
//   var guests = obj['guestNumber'];

//   console.log(nights, place, guests);


//   for(var i=0; i< accommodation.length; i++){
//     console.log(selectPlace,accommodation[i].city);

//     if ((accommodation[i].city === place) && (accommodation[i].minNight <= days) && (accommodation[i].maxNight >= days)) {
//       result.push(accommodation[i])
//     }

//     if (accommodation[i].city !== place) {
//       continue;
//     }

//     if (accommodation[i].minNight > days) {
//       continue;
//     }

//     if (accommodation[i].maxNight < days) {
//       continue;
//     } 
//     else {
//       result.push(accommodation[i]);
//     }

//   }

//   return result;
// };




// //check accomodation filter results
// document.getElementById('acomList').addEventListener('click', function(){

//   var days = dateDiff();
//   var guests = guestsAmount();
//   var place = placePick();

//   criteria.guestNumber = guests;
//   criteria.city = place;
//   criteria.dayNumber = days;

//   console.log(criteria);

//   var accommodationResultList = filter(criteria);

//   console.log(accommodationResultList);
// });





document.getElementById('acomList').addEventListener('click', function(){
  guest = document.getElementById('adults').value;
  var checkboxArray = document.querySelectorAll('input[type=checkbox]:checked');
  console.log(checkboxArray);
  foodSum = 0;
  var foodValue = 0;
  for (var i = 0; i < checkboxArray.length; i++) {
    foodValue = parseInt(checkboxArray[i].value);
    console.log(foodValue);
    foodSum = foodSum + foodValue;
    console.log(foodSum);
  }
  document.getElementById('staySynopsis').innerHTML = '';
  for (var j = 0; j < accommodation.length; j++) {
    if ((parseInt(guest) >= accommodation[j].minPeople)
    && (parseInt(guest) <= accommodation[j].maxPeople)
    && (days >= accommodation[j].minStay)
    && (days <= accommodation[j].maxStay)){
      displayArray(j);
    }
  }
});





//display accomodations witin filter selections
function myArray(accommodation){
  document.getElementById('staySynopsis').innerHTML = '';
  for (var i = 0; i < accommodation.length; i++) {
    console.log(accommodation.length);
    console.log(accommodation[i].id);
    if (parseInt(guest) >= accommodation[i].guests) {
    }
    displayArray(i);
  }
}
myArray(accommodation);
function displayArray(s){
  document.getElementById('staySynopsis').innerHTML
+= '<div id="stay" type="button" data-toggle="modal" data-target="#myModal">'
+    '<div class="row">'
+     '<div id="stayDesc">' 
+      '<center>'
+        '<img src=" ' + accommodation[s].mainPhoto +' " class="acomImg">'
+        '<h2>' + accommodation[s].name + '</h2>'
+        '<p id="stayList">' + accommodation[s].address + ' </p>'
+        '<br>'
+        '<p> $' + accommodation[s].price + ' per night</p>'
+      '</center>'
+     '</div>'
+    '</div'
+   '</div>';
openModal();
}





// Open the Modal
// function openModal() {
//   document.getElementById("#myModal").style.display = "block";
// }

// // Close the Modal
// function closeModal() {
//   document.getElementById("#myModal").style.display = "none";
// }

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

// display modal
var totalPrice = 0;
var checkboxArray = [];
function openModal(accommodation){
  $('.acomImg').on('click', function(){
    console.log(this.id);
    $('#myModal').show();

      document.getElementById('modal-content').innerHTML
        += '<div class="modal-header">'
        +   '<h4 class="modal-title"> ' + name + ' </h4>'
        +   '<button type="button" class="close" data-dismiss="modal" id="close">&times;</button>'
        + '</div>'

        + '<div class="mySlides">'
        +   '<img src=" ' + photo1 + ' " class="m-img">'
        + '</div>'

        + '<div class="mySlides">'
        +   '<img src=" ' + photo2 + ' " class="m-img">'
        + '</div>'

        + '<div class="mySlides">'
        +   '<img src=" ' + photo3 + ' " class="m-img">'
        + '</div>'

        + '<a class="prev" onclick="plusSlides(-1)" style="color: #f2f2f2">&#10094;</a>'
        + '<a class="next" onclick="plusSlides(1)" style="color: #f2f2f2">&#10095;</a>'



        + '<div class="modal-body">'

        + '<p>'
        +   ' + desc + '
        + '</p>'

        + '<br>'

 + '<select id="mealSelect" class="form-control">'
   +             '<option selected>Choose Meal Options</option>'
   +             '<option value="breakfast">Breakfast</option>'
   +             '<option value="lunch">Lunch</option>'
   +             '<option value="dinner">Dinner</option>'
   +             '<option value="all">Breakfast, Lunch & Dinner</option>'
   +             '<option value="none">No Meal</option>'
   +            '</select>'

        + '<p>'
        +   ' + location + '
        + '</p>'

        + '<br>'

        + '<div id="compTotal" class="mPara"> $ ' + total + ' </div> '

        + '</div>';
});
}

$('#close').on('click', function(){
  $('#myModal').hide();
});




console.log('location details');
//Google Maps API key
// var myKey = JSON.parse(apiKey);
// console.log(myKey);

// var script = document.createElement('script');
// script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
// script.async = true;
// script.defer = true;
// document.getElementsByTagName('body')[0].appendChild(script);

var map;

function initMap() {
    console.log('initmap here')

      var startNZ = {lat: -40.900558, lng: 172.285971};

      var map = new google.maps.Map(document.getElementById('map'), {
            center: startNZ,
            zoom: 5,
            disableDefaultUI: true,
            styles: [
                      {"elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#ebe3cd"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#523735"
                          }
                        ]
                      },
                      {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                          {
                            "color": "#f5f1e6"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                          {
                            "color": "#c9b2a6"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.land_parcel",
                        "elementType": "geometry.stroke",
                        "stylers": [
                          {
                            "color": "#dcd2be"
                          }
                        ]
                      },
                      {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#ae9e90"
                          }
                        ]
                      },
                      {
                        "featureType": "landscape.natural",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#dfd2ae"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#dfd2ae"
                          }
                        ]
                      },
                      {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#93817c"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "geometry.fill",
                        "stylers": [
                          {
                            "color": "#a5b076"
                          }
                        ]
                      },
                      {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#447530"
                          }
                        ]
                      },
                      {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#f5f1e6"
                          }
                        ]
                      },
                      {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#fdfcf8"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#f8c967"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                          {
                            "color": "#e9bc62"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#e98d58"
                          }
                        ]
                      },
                      {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry.stroke",
                        "stylers": [
                          {
                            "color": "#db8555"
                          }
                        ]
                      },
                      {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#806b63"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#dfd2ae"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.line",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#8f7d77"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.line",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                          {
                            "color": "#ebe3cd"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#dfd2ae"
                          }
                        ]
                      },
                      {
                        "featureType": "transit.station.bus",
                        "stylers": [
                          {
                            "visibility": "on"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                          {
                            "color": "#D8D9D7"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                          {
                            "color": "#D8D9D7"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                          {
                            "color": "#92998d"
                          }
                        ]
                      }
                    ]
            });

        var marker = new google.maps.Marker({
          position: startNZ,
          map: map,
        });
    };