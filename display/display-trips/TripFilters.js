const TripFilters = (props) => {
  const [activeFilters, setActiveFilters] = React.useState({
    traveltype: "alla",
    type: "alla",
  });

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

  return (
    <section id="filters">
      <span id="filter-title">Filter</span>
      <form>
        <label htmlFor="travel-from" className="filter.section subtitle">
          Från
          <input id="travel-from" type="week"></input>
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
      </form>
    </section>
  );
};
