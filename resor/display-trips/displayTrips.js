const DisplayList = () => {
  // 1. Load (or maybe get as a prop?) our trips
  console.log("start");
  const trips = GetDataBase();
  console.log(trips);

  //2. Get our filters on the page and use the filter method to create a
  // const filteredTrips = trips.filter( etc etc )

  return (
    <section className="trip-display">
      {/* 3 - Use the map method to create a new TripCard for each entry in trip*/}
      {trips.map((trip) => {
        return <TripCard key={trip.id} info={trip} />;
      })}
    </section>
  );
};

const container = document.querySelector("#display-list-root");
const root = ReactDOM.createRoot(container);
root.render(<DisplayList />);
