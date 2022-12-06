//As a side note, the same JSON parse trick can probably be used if we
//want to connect this to an actual simple database

function saveToLocalStorage(key, object) {
  //Saving an object is actually really simple, we just convert it into a string
  //Note that some things (most notably the Date() object) can't be converted like this
  //For dates, save it as * GetYear()-(GetMonth() + 1)-GetDate() * to be able to easily
  //convert it back into a new Date(^above string)

  window.localStorage.setItem(key, JSON.stringify(object));

  
}

function loadFromLocalStorage(key) {
  //First, check if we actually have the item saved in local storage
  let item = window.localStorage.getItem(key);
  if (item === null) {
    console.log(`Failed with retrieving localstorage item for ${key}`);
    //Not sure if returning null or just an empty string messes things up more here
    return null;
  }

  //If not null, return the item parsed back into the original form
  return JSON.parse(item);
}

//The key that is used to save our array of resor / pendling-entries to the localstorage
//Defining it outside the functions so we can easily change it if we
const tripsKey = "trips";

//Helper method to easily add a trip to the local storage
//A trip is simply a js-object
//trip = {
//          type: pendling,
//          passengers: 4
//       } etc etc

function addTrip(tripObject) {

  tripToSave = translateTrip(tripObject);

  //First, load our trip array from the localstorage
  //I chose the trips-key 100% fueled by insomnia so poke me and I'll change it
  let trips = loadFromLocalStorage(tripsKey);

  //Check if it's actually created, if not set it to be an array
  if (trips === null) {
    trips = [];
  }
  //Then, push our new trip to the end of the array
  trips.push(tripToSave);

  //Finally, resave our trips-array to the local storage, overwriting the previous state with
  //a new array containing our latest entry
  saveToLocalStorage(tripsKey, trips);
}

function translateTrip(tripObject){ 
  const newTrip ={
    name: tripObject.trvlrname,
    type: tripObject.typeOfTraveler,
    traveltype : tripObject.typeOfTravl,
    from : tripObject.startingpoint,
    to: tripObject.destination,
    date: tripObject.startDate,
    time: tripObject.startTime,
    passagerarInfo: {
      vuxna: tripObject.seats,
      barn: tripObject.seatBarn
    },
    baggage: tripObject.bagages,
    extrainfo: ""
  }

  return newTrip;
}

function getTrips() {
  return loadFromLocalStorage(tripsKey);
}

//If we mess something up and want a clean slate run this
function clearTrips() {
  window.localStorage.removeItem(tripsKey);
}
