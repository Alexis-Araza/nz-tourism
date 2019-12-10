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
];





// $('#stay1').hide();
// $('#stay2').hide();
// $('#stay3').hide();





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

function guestsAmount() {

  // var guestsString = $('#adults').val();
  var guestsString = $("#adults option:selected").text();
  var guests = parseInt(guestsString);

    return guests;
};

function placePick() {

  // var placeString = $('#place').val();
  var place = $("#place option:selected").val();
  // var place = parseInt(placeString);

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


var criteria = {
  dayNumber: 0,
  guestNumber: 0,
  city: ''
}






function filter(obj){

  // document.getElementById('acomStay').innerHTML = '';

  var result = [];
  var nights = obj['dayNumber'];
  var place = obj['city'];
  var guests = obj['guestNumber'];

  console.log(nights, place, guests);


  for(var i=0; i< accommodation.length; i++){
    // console.log(selectPlace,accommodation[i].city);

    // if ((accommodation[i].city === place) && (accommodation[i].minNight <= nights) && (accommodation[i].maxNight >= nights)) {
    //   result.push(accommodation[i])
    // }

    if (accommodation[i].city !== place) {
      continue;
    }

    if (accommodation[i].minNight > nights) {
      continue;
    }

    if (accommodation[i].maxNight < nights) {
      continue;
    } 
    else {
      result.push(accommodation[i]);
    }

  }

  return result;
};





document.getElementById('acomList').addEventListener('click', function(){

  var nights = dateDiff();
  var guests = guestsAmount();
  var place = placePick();

  criteria.guestNumber = guests;
  criteria.city = place;
  criteria.dayNumber = nights;

  console.log(criteria);

  var accommodationResultList = filter(criteria);

  console.log(accommodationResultList);
});





// Open the Modal
function openModal() {
  document.getElementById("#myModal1").style.display = "block";
  document.getElementById("#myModal2").style.display = "block";
  document.getElementById("#myModal3").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("#myModal1").style.display = "none";
  document.getElementById("#myModal2").style.display = "none";
  document.getElementById("#myModal3").style.display = "none";
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





// $("acomList").click(function() {
//   var one = accommodationResultList;

//   var three =
//   string(one);
//   document.getElementById("staySynopsis").innerHTML = three;
// });


// document.getElementById('acomList').addEventListener('click', function(){
//   console.log('show acom')
//     // document.getElementById('stayDesc').innerHTML = " "; //to clear the container
//     var stayTotal = days;
//     var priceTotal = accommodation.price * stayTotal;

//   for(var i = 0; i < accommodation.length; i++) {
//     if (accommodation[i].criteria === filter(criteria)) {
//     document.getElementById('stayDesc').innerHTML
//       += '<img src="images/accommodation/aptMain.jpg" class="acom-img">'
//       +    '<h2 class="list-name">'
//       +       accommodation[i].name
//       +      '</h2>'

//       +      '<p class="stay-list">'
//       +        accommodation[i].address
//       +        '<br>'

//       +        accommodation[i].price 
//       +      '</p>';
//       }
//     }
// });
// $( "acomList" ).click(function() {

//   var criteria;

//   $('#stay1').show();
//   $('#stay2').show();
//   $('#stay3').show();

//     if (stay1 === ) {};
// });





 // document.getElementById('staySynopsis').innerHTML =
 //  '<p> You will be in ' + place + ' for ' + nights + ' nights with'  + guests + ' guests.</p>'

// function displayList(i){
//   priceTotal = (accommodation[i].price * dayNumber)

//   document.getElementById('acomStay').innerHTML
//       += '<img src="images/accommodation/aptMain.jpg" class="acom-img">'
//       +    '<h2 class="list-name">'
//       +       accommodation[i].name
//       +      '</h2>'

//       +      '<p class="stay-list">'
//       +        accommodation[i].address
//       +        '<br>'

//       +        accommodation[i].price 
//       +      '</p>';
// };





// var id = 101;
// function displayAccommodation(s) {
//   // displaystayDesc();

//   var days = dateDiff();
//   var total = accommodation[s].price * days;


//   document.getElementById('acomStay').innerHTML
// += '<div class="stay1" type="button" data-toggle="modal" data-target="#myModal">'
// +    '<div class="row">'
// +      '<center>'
// +        '<img src="images/accommodation/aptMain.jpg">'
// +        '<h2>' + accommodation[s].name + '</h2>'

// +        '<p id="stayList">' + accommodation[s].address + ' </p>'
// +        '<br>'

// +        '<p> $' + accommodation[s].price + ' per night</p>'
// +      '</center>'
// +    '</div>'
// +  '</div>';
// };





// $('.modal').on('click', function(){
//       document.getElementById('modalContent').innerHTML
//         += '<div class="modal-header">'
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
//       });



console.log('location details');
//Google Maps API key
var myKey = JSON.parse(apiKey);
console.log(myKey);

var script = document.createElement('script');
script.src='https://maps.googleapis.com/maps/api/js?key='+ myKey[0].key + '&callback=initMap';
script.async = true;
script.defer = true;
document.getElementsByTagName('body')[0].appendChild(script);

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
                            "color": "#3e7ebc"
                          }
                        ]
                      },
                      {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                          {
                            "color": "#3e7ebc"
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