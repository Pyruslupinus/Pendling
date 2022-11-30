const DisplayList = () => {
  //Testing - save our test data to the local storage
  if(getTrips() === null)
  {
    saveToLocalStorage("trips", GetDataBase());
  }

  const newUser = {
    email: "minEmail",
    name: "emil",
    password: "12345"
  }
  const annanUser = {
    email: "dinEmail"
  }

  const allUsers = [
    newUser,
    annanUser
  ]

  saveToLocalStorage("allUsers", allUsers); 
  console.log(loadFromLocalStorage("allUsers"));

  saveToLocalStorage("UserEmail", "minEmail");
  console.log(window.localStorage.getItem("UserEmail")); // minEmail;
  window.localStorage.setItem("UserEmail", "enAnnanEmail");

  // Load our trips
  const [trips, setTrips] = React.useState(getTrips());
  const [filteredTrips, setFilteredTrips] = React.useState(getTrips());

  //2. Get our filters on the page and use the filter method to create a
  // const filteredTrips = trips.filter( etc etc )

  const reloadTrips = (filters) => {
    console.log(filters);
    //Next step - actually filter based on what we get here
    let newTrips = trips.filter(filterType);
    newTrips = newTrips.filter(filterTravelType);
    console.log(newTrips);
    setFilteredTrips(newTrips);

    function filterType(trip) {
      return filters.type === "alla" || trip.type === filters.type;
    }
    function filterTravelType(trip) {
      return (
        filters.traveltype === "alla" || trip.traveltype === filters.traveltype
      );
    }
  };

  //Id needs to be unique for each entry in the map-method so very basic solution here at the moment
  let id = 0;

  return (
    <section id="main-container">
      <TripFilters
        className="flex-Column"
        onFilterChanged={(filters) => reloadTrips(filters)}
      />
      <section className={"trip-display flex-column"}>
        {/* 3 - Use the map method to create a new TripCard for each entry in trip
        Map is essentially: "For every thing in this list I want you to do this", so in this case we return a new react component so they're all drawn dynamically
      */}
        {filteredTrips.map((trip) => {
          id++;
          return <TripCard key={id} info={trip} />;
        })}
      </section>
    </section>
  );
};

const container = document.querySelector("#display-trips-root");
const root = ReactDOM.createRoot(container);
root.render(<DisplayList />);
