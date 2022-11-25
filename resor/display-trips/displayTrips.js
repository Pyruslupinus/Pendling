const DisplayList = () => {
  // 1. Load (or maybe get as a prop?) our trips
  console.log("start");
  const trips = GetDataBase();
  console.log(trips);

  //2. Get our filters on the page and use the filter method to create a
  // const filteredTrips = trips.filter( etc etc )

  //Id needs to be unique for each so very basic solution here at the moment
  let id = 0;
  return (
    <section className="trip-display">
      {/* 3 - Use the map method to create a new TripCard for each entry in trip
        Map is essentially: "For every thing in this list I want you to do this", so in this case we return a new react component so they're all drawn dynamically
      */}
      {trips.map((trip) => {
        id++;
        return <TripCard key={id} info={trip} />;
      })}
    </section>
  );
};

const container = document.querySelector("#display-list-root");
const root = ReactDOM.createRoot(container);
root.render(<DisplayList />);
