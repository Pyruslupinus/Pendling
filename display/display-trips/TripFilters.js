const TripFilters = (props) => {
  
  //So this component got a bit silly
  //These 3 makes sense 
  const [activeFilters, setActiveFilters] = React.useState({
    traveltype: "alla",
    type: "alla",
    passengers: 1,
    from: "",
    to: "",
  });

  const [passengerCount, setPassengerCount] = React.useState(1);
  const [fromField, setFromField] = React.useState("");
  const [toField, setToField] = React.useState("");
  const [typeField, setTypeField] = React.useState("alla");
  const [travelTypeField, setTravelTypeField] = React.useState("alla");
  
  const stateSetters = {
      traveltype: setTravelTypeField,
      type: setTypeField,
      passengers: setPassengerCount,
      from: setFromField,
      to: setToField
  }

  const filtersChanged = (event) => {
    
    //Fun js thing - we can access variables on an object via both .-syntax (.type etc) and []-syntax ([type])
    const change = {
      type: event.target.name,
      value: event.target.value,
    };

    //We can also use variables in the []-syntax, allowing us to link things together a bit more dynamically
    let copy = activeFilters;
    copy[change.type] = change.value; //for example, this could translate to copy["passengers"] because we use our element name variables
    setActiveFilters(copy);

    //Then we can do hard mode and also remember that an object (or array) can contain methods allowing us to link every single filter in here for their
    //react update methods
    stateSetters[change.type](change.value); //could translate to stateSetters["passengers"](3) which in turn would be setPassengerCount(3)

    //I also pass in a method through props, allowing us to send the new filter values to the parent component
    props.onFilterChanged(copy);
  };

  return (
    <section id="filters">
      <span id="filter-title">Filter</span>
      <form>
        <label htmlFor="travel-from" className="filter-section subtitle">
          Från
          <input id="travel-from" name="from" type="text" value={fromField} onChange={filtersChanged}></input>
        </label>

        <label htmlFor="travel-to" className="filter-section subtitle">
          Till
          <input id="travel-to" name="to" type="text" value={toField} onChange={filtersChanged}></input>
        </label>

        <label htmlFor="travel-type" className="filter-section subtitle">
          Restyp
          <select id="travel-type" name="traveltype" value={travelTypeField} onChange={filtersChanged}>
            <option value="alla">Visa Alla</option>
            <option value="resa">Resa</option>
            <option value="pendling">Pendling</option>
          </select>
        </label>
        <label htmlFor="passenger-type" className="filter-section subtitle">
          Erbjuder / Söker
          <select id="passenger-type" name="type" value={typeField} onChange={filtersChanged}>
            <option value="alla">Visa Alla</option>
            <option value="ägare">Erbjuder</option>
            <option value="passagerare">Söker</option>
          </select>
        </label>
        <label htmlFor="passenger-count" className="filter-section subtitle">
          Passagerare
          <input id="passenger-count" name="passengers"  onChange={filtersChanged} type="number" min={1} max={10} value={passengerCount}></input> 
        </label>
      </form>
    </section>
  );
};
