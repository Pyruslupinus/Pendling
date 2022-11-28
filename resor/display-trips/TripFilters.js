const TripFilters = (props) => {
  const travelChanged = () => {
    console.log("travel changed");
    props.onFilterChanged("this should show in the parent");
  };

  return (
    <section id="filters">
      <span id="filter-title">Filter</span>
      <form>
        <label htmlFor="travel-type" className="filter-section subtitle">
          Restyp
          <select id="travel-type" name="travel-type" onChange={travelChanged}>
            <option value="alla">Visa Alla</option>
            <option value="resa">Resa</option>
            <option value="pendling">Pendling</option>
          </select>
        </label>
        <label htmlFor="passenger-type" className="filter-section subtitle">
          Erbjuder / Söker
          <select id="passenger-type" name="passenger-type">
            <option value="alla">Visa Alla</option>
            <option value="erbjuder">Erbjuder</option>
            <option value="söker">Söker</option>
          </select>
        </label>
      </form>
    </section>
  );
};
