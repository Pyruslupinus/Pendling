const DisplayList = () => {
  // 1. Load (or maybe get as a prop?) our trips
  console.log("start");
  const trips = GetDataBase();
  console.log(trips);

  //2. Get our filters on the page and use the filter method to create a
  // const filteredTrips = trips.filter( etc etc )

  const reloadTrips = (filterArray) => {
    console.log(filterArray);
  };

  //Id needs to be unique for each so very basic solution here at the moment
  let id = 0;
  return (
    <section id="main-container">
      <TripFilters
        className="flex-Column"
        onFilterChanged={(filterArray) => reloadTrips(filterArray)}
      />
      <section className={"trip-display flex-column"}>
        {/* 3 - Use the map method to create a new TripCard for each entry in trip
        Map is essentially: "For every thing in this list I want you to do this", so in this case we return a new react component so they're all drawn dynamically
      */}
        {trips.map((trip) => {
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
