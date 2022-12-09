const DisplayList = () => {
  //Testing - save our test data to the local storage
  //clearTrips(); //Uncomment this line to remove all trips from local storage
  //Remove this if and uncomment ^ to get a clean page
  if (getTrips() === null) {
    saveToLocalStorage("trips", createDummyData());
  }

  // Load our trips
  const [trips, setTrips] = React.useState(getTrips());
  const [filteredTrips, setFilteredTrips] = React.useState(getTrips());

  //Check for our max # of passengers for the filter slider
  //Essentially, compare vuxna + barn for each trip, return the one with the largest #
  const maxPassengersTrip = getTrips().reduce(function (prev, current) {
    const prevPassengers =
      parseInt(prev.passagerarInfo.vuxna) + parseInt(prev.passagerarInfo.barn);
    const currentPassengers =
      parseInt(current.passagerarInfo.vuxna) +
      parseInt(current.passagerarInfo.barn);
    return prevPassengers > currentPassengers ? prev : current;
  });

  //Then plus vuxna + barn together to get our max for the filters
  const maxPassengers =
    parseInt(maxPassengersTrip.passagerarInfo.vuxna) +
    parseInt(maxPassengersTrip.passagerarInfo.barn);

  //If our filters change, we need a reload method, this is passed and called by the tripFilters during their onChange
  const reloadTrips = (filters) => {
    //Next step - actually filter based on what we get here
    let newTrips = trips.filter(filterType);
    newTrips = newTrips.filter(filterTravelType);
    newTrips = newTrips.filter(filterDestination);
    newTrips = newTrips.filter(filterPassengers);
    setFilteredTrips(newTrips);

    //To make things a bit clearer we declare a series of local functions
    //These are then run trhough the filter in order above
    function filterType(trip) {
      return filters.type === "alla" || trip.type === filters.type;
    }
    function filterTravelType(trip) {
      return (
        filters.traveltype === "alla" || trip.traveltype === filters.traveltype
      );
    }
    function filterDestination(trip) {
      return (
        trip.from.toLowerCase().includes(filters.from.toLowerCase()) &&
        trip.to.toLowerCase().includes(filters.to.toLowerCase())
      );
    }

    function filterPassengers(trip) {
      const passengerCount =
        parseInt(trip.passagerarInfo.vuxna) +
        parseInt(trip.passagerarInfo.barn);
      return (
        passengerCount >= parseInt(filters.passengersMin) &&
        passengerCount <= parseInt(filters.passengersMax)
      );
    }
  };

  // CONTACT MODAL FOR WHEN A CARD HAS BEEN CLICKED
  const [modalCardInfo, setModalInfo] = React.useState("");

  //When a card has been clicked, it returns the info here so we can show the contact modal
  const handleCardClicked = (cardInfo) => {
    setModalInfo(cardInfo);
    //Remove the ability to scroll temporarily
    document.querySelector("body").style.overflow = "hidden";
  };

  const handleModalClosed = () => {
    setModalInfo("");
    //Remove the ability to scroll temporarily
    document.querySelector("body").style.overflow = "unset";
  };

  //W3 schools content / modal trick
  //The outer modal takes up the whole screen so we can
  //just check it for clicks, if we click any content in it
  //we'll get the content id instead of this
  window.onclick = function (event) {
    if (event.target.id === "cardModal") {
      handleModalClosed();
    }
  };

  //If someone clicks the contact button in the modal we end up here
  const handleContactClicked = (cardInfo) => {
    //Check if we're logged in
    const loginStatus = sessionStorage.getItem("LoggedIn") == "true";
    if (loginStatus) {
      //Contact - currently only an alert
      alert(`Din kontaktförfrågan har skickats till ${cardInfo.name}.`);
      handleModalClosed();
    } else {
      //Note, currently we can't reach this since I'm disabling the button, but this is what it looked like originally
      alert("Du måste logga in för att skicka en kontaktförfrågan.");
      handleModalClosed();
      window.location.href = "../registrering/login.html";
      //Go To login page
    }
  };

  //Id needs to be unique for each entry in the map-method so very basic solution here at the moment
  //It should be noted that doing this via indexing causes som odd behaviours
  //when redrawing the list due to filtering. At the moment I'm forcing a re-render for all cards which solves
  //this but a better implementation would use unique id's
  let id = 0;

  return (
    <section id="main-container">
      {modalCardInfo !== "" ? (
        <TripModal
          info={modalCardInfo}
          handleContactClicked={handleContactClicked}
        />
      ) : (
        ""
      )}
      <TripFilters
        className="flex-Column"
        passengersMax={maxPassengers}
        onFilterChanged={(filters) => reloadTrips(filters)}
      />
      <section className={"trip-display flex-column"}>
        {/* Use the map method to create a new TripCard for each entry in trip
        Map is essentially: "For every thing in this list I want you to do this", so in this case we return a new react component so they're all drawn dynamically
      */}
        {filteredTrips.map((trip) => {
          id++;
          return (
            <TripCard key={id} info={trip} cardClick={handleCardClicked} />
          );
        })}
      </section>
    </section>
  );
};

const container = document.querySelector("#display-trips-root");
const root = ReactDOM.createRoot(container);
root.render(<DisplayList />);
