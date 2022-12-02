const TripFilters = (props) => {
  
  const [activeFilters, setActiveFilters] = React.useState({
    traveltype: ["alla"],
    type: "alla",
    passengers: 1,
    from: "",
    to: "",
  });

  const [passengerCount, setPassengerCount] = React.useState(1);
  const [fromField, setFromField] = React.useState("");
  const [toField, setToField] = React.useState("");
  const [typeField, setTypeField] = React.useState("");
  const [travelTypeField, setTravelTypeField] = React.useState("");
  
  const stateSetters = {
      traveltype: setTravelTypeField,
      type: setTypeField,
      passengers: setPassengerCount,
      from: setFromField,
      to: setToField
  }

  const filtersChanged = (event) => {
    console.log(event);
    const change = {
      type: event.target.name,
      value: event.target.value,
    };

    let copy = activeFilters;
    //Fun js thing - we can use a variable access the property matching it
    //via the []-syntax
    copy[change.type] = change.value;
    setActiveFilters(copy);
    console.log(copy);

    props.onFilterChanged(copy);
  };

  const handlePassengerChange = (event) => {
    setPassengerCount(event.value)
    filtersChanged(event);
  }

  const handleFromFieldChange = (event) => {
    setFromField(event)
  }


  return (
    <section id="filters">
      <span id="filter-title">Filter</span>
      <form>
        <label htmlFor="travel-from" className="filter-section subtitle">
          Från
          <input id="travel-from" name="from" type="text" onChange={filtersChanged}></input>
        </label>

        <label htmlFor="travel-to" className="filter-section subtitle">
          Till
          <input id="travel-to" name="to" type="text" onChange={filtersChanged}></input>
        </label>

        <label htmlFor="travel-type" className="filter-section subtitle">
          Restyp
          <select id="travel-type" name="traveltype" onChange={filtersChanged}>
            <option value="alla">Visa Alla</option>
            <option value="resa">Resa</option>
            <option value="pendling">Pendling</option>
          </select>
        </label>
        <label htmlFor="passenger-type" className="filter-section subtitle">
          Erbjuder / Söker
          <select id="passenger-type" name="type" onChange={filtersChanged}>
            <option value="alla">Visa Alla</option>
            <option value="ägare">Erbjuder</option>
            <option value="passagerare">Söker</option>
          </select>
        </label>
        <label htmlFor="passenger-count" className="filter-section subtitle">
          Passagerare
          <input id="passenger-count" name="passengers"  onChange={handlePassengerChange} type="number" min={1} max={10} value={passengerCount}></input> 
        </label>
      </form>
    </section>
  );
};
