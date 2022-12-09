//The left / top filtering element on the display page
const TripFilters = (props) => {

  const [firstLoad, setFirstLoad] = React.useState(true);

  //First off, get our filters if we're coming from the search-trip.html
  //Gonna give the filters a chance for a first render before doing this
  React.useEffect(() => {
      if(firstLoad == true){
        //Make sure this will only happen once per page load
        setFirstLoad(false);

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString)

        let copy = activeFilters;
        //Slightly brute forcing it, but essentially check and set each value based on their key
        //Also doing some ugly translating due to current mismatch between labels used
        for(const entries of urlParams.entries()){

          //Entries are saved as key : value if we were to access them directly, but when we do this for-loop
          //we instead get an array of entries[0-1], so reassigning them in a more readable form
          const label = entries[0];
          let value = entries[1];

          //Some value translations between what we get form the search and what's used in here / the database
          if(value === "Erbjuder")
          {
            value = "ägare";
          }
          else if(value === "Söker"){
            value = "passagerare";
          }

          //Finally, check our current search label and set the corresponding filter
          switch(label){
            case "FromBox":
              copy.from = value;
              break;
            case "ToBox":
              copy.to = value;
              break;
            case "restyp":
              copy.traveltype = value.toLowerCase();
              break;
            case "erbjudersöker":
              copy.type = value.toLowerCase();
              break;
            case "PassCSS":
              copy.passengersMin = value;
              break;
          }
        }

        //Finally #2, save our new internal state for the active filters and pass
        //the whole thing up to our parent component again so that we can filter based on it
        setActiveFilters(copy);
        props.onFilterChanged(copy);
      }
  })


  //Rather than keeping a series of tracked variables via useState we can track all of our 
  //filters in a general object
  //I'm guessing this has implications for re-rendering though, as each input probably notices that
  //"their" data has changed whenever any
  const [activeFilters, setActiveFilters] = React.useState({
    traveltype: "alla",
    type: "alla",
    passengersMin: 1,
    passengersMax: props.passengersMax,
    from: "",
    to: "",
  });

  const filtersChanged = (event) => {
    
    //Fun js thing - we can access variables on an object via both dot-syntax (.type etc) and []-syntax ([type])
    //[] takes a string to find the variable with that name which opens up some optimisation opportunities
    const change = {
      type: event.target.name,
      value: event.target.value,
    };

    //We can also use variables in the []-syntax, allowing us to link things together a bit more dynamically
    //In this case, we have set the names of all of our filters to match the data object
    let copy = activeFilters;
    copy[change.type] = change.value; //for example, this could translate to copy["passengersMin"] because we use our element name variables
    setActiveFilters(copy);

    //Originally I did this one step sillier, by keeping the local state in here in a series of variables
    //and then their setters in an object, meaning we accessed it like
    //stateSetters[change.type](change.value)

    //I also pass in a method through props, allowing us to send the new filter values to the parent component
    props.onFilterChanged(copy);
  };

  return (
    <section id="filters">
      <span id="filter-title">Filter</span>
      <article>
        <span className="filter-section-title title">Destination</span>
        <div className="filter-section">
          <label htmlFor="travel-from" className="filter-section subtitle">
            Från
            <input id="travel-from" name="from" type="text" value={activeFilters.from} onChange={filtersChanged}></input>
          </label>

          <label htmlFor="travel-to" className="filter-section subtitle">
            Till
            <input id="travel-to" name="to" type="text" value={activeFilters.to} onChange={filtersChanged}></input>
          </label>
        </div>
      </article>

        <article>
          <span className="filter-section-title title">Resinfo</span>
          <div className="filter-section">
            <label htmlFor="travel-type" className="filter-section subtitle">
              Restyp
              <select id="travel-type" name="traveltype" value={activeFilters.traveltype} onChange={filtersChanged}>
                <option value="alla">Visa Alla</option>
                <option value="resa">Resa</option>
                <option value="pendling">Pendling</option>
              </select>
            </label>
            <label htmlFor="passenger-type" className="filter-section subtitle">
              Erbjuder / Söker
              <select id="passenger-type" name="type" value={activeFilters.type} onChange={filtersChanged}>
                <option value="alla">Visa Alla</option>
                <option value="ägare">Erbjuder</option>
                <option value="passagerare">Söker</option>
              </select>
            </label>
          </div>
        </article>


        <article>
        <span className="filter-section-title title">Passagerare</span>
        <div className="filter-section">
          <label htmlFor="passenger-count-min" className="subtitle filter-section">
            Minimum
            <div className="passenger-slider">
              <span>{activeFilters.passengersMin}</span>
              <input id="passenger-count-min" name="passengersMin"  onChange={filtersChanged} type="range" min={1} max={activeFilters.passengersMax} value={activeFilters.passengersMin}></input> 
            </div>
            </label>
          <label htmlFor="passenger-count-max" className="subtitle filter-section">
            Maximum
            <div className="passenger-slider">
              <span>{activeFilters.passengersMax}</span>
              <input id="passenger-count-max" name="passengersMax"  onChange={filtersChanged} type="range" min={activeFilters.passengersMin} max={props.passengersMax} value={activeFilters.passengersMax}></input> 
            </div>
          </label>
        </div>
        </article>
        
    </section>
  );
};
