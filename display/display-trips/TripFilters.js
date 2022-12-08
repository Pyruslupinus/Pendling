const TripFilters = (props) => {

  //First off, get our filters if we're coming from the search-trip.html
  const [firstLoad, setFirstLoad] = React.useState(true);

  //Gonna give the filters a chance for a first render before doing this
  React.useEffect(() => {
      if(firstLoad == true){
        //Make sure this will only happen once per page load
        setFirstLoad(false);

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString)

        console.log(urlParams)
        let copy = activeFilters;
        //Slightly brute forcing it, but essentially check and set each value based on their key
        //Also doing some ugly translating due to current mismatch between labels used
        for(const entries of urlParams.entries()){

          //Entries are saved as key : value, but when we do this for
          //we instead get an array, so reassigning them in a more readable form
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
              stateSetters.from(value);
              break;
            case "ToBox":
              copy.to = value;
              stateSetters.to(value);
              break;
            case "restyp":
              copy.traveltype = value.toLowerCase();
              stateSetters.traveltype(value.toLowerCase());
              break;
            case "erbjudersöker":
              copy.type = value.toLowerCase();
              stateSetters.type(value.toLowerCase());
              break;
            case "PassCSS":
              copy.passengersMin = value;
              stateSetters.passengersMin(value);
              break;
          }
        }

        //Finally #2, save our new internal state for the active filters and pass
        //the whole thing up to our parent component again so that we can filter based on it
        setActiveFilters(copy);
        props.onFilterChanged(copy);
      }
  })


  //So this component got a bit silly
  //These 3 makes a bit more sense when you look at the filtersChanged method (maybe)
  //The first one is a bit unnecessary (since this means saving the data in two places) but it shortens the 
  //onChange-handling for the filters by a ton
  const [activeFilters, setActiveFilters] = React.useState({
    traveltype: "alla",
    type: "alla",
    passengersMin: 1,
    passengersMax: props.passengersMax,
    from: "",
    to: "",
  });

  const [passengerCountMin, setPassengerCountMin] = React.useState(1);
  const [passengerCountMax, setPassengerCountMax] = React.useState(props.passengersMax);
  const [fromField, setFromField] = React.useState("");
  const [toField, setToField] = React.useState("");
  const [typeField, setTypeField] = React.useState("alla");
  const [travelTypeField, setTravelTypeField] = React.useState("alla");
  
  const stateSetters = {
      traveltype: setTravelTypeField,
      type: setTypeField,
      passengersMin: setPassengerCountMin,
      passengersMax: setPassengerCountMax,
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
    //This ends up saving us having to create a handleChange method for each filter, which is actually really nice 
    //(see the first time set for filters above for how this would have to be done otherwise)
    

    //I also pass in a method through props, allowing us to send the new filter values to the parent component
    props.onFilterChanged(copy);
  };

  return (
    <section id="filters">
      <h2 id="filter-title">Filter</h2>
      <article>
        <h3 className="filter-section-title title">Destination</h3>
        <div className="filter-section">
          <label htmlFor="travel-from" className="filter-section subtitle">
            Från
            <input id="travel-from" name="from" type="text" value={fromField} onChange={filtersChanged}></input>
          </label>

          <label htmlFor="travel-to" className="filter-section subtitle">
            Till
            <input id="travel-to" name="to" type="text" value={toField} onChange={filtersChanged}></input>
          </label>
        </div>
      </article>

        <article>
          <h3 className="filter-section-title title">Resinfo</h3>
          <div className="filter-section">
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
          </div>
        </article>


        <article>
        <h3 className="filter-section-title title">Passagerare</h3>
        <div className="filter-section">
          <label htmlFor="passenger-count-min" className="subtitle filter-section">
            Minimum
            <div className="passenger-slider">
              <span>{passengerCountMin}</span>
              <input id="passenger-count-min" name="passengersMin"  onChange={filtersChanged} type="range" min={1} max={passengerCountMax} value={passengerCountMin}></input> 
            </div>
            </label>
          <label htmlFor="passenger-count-max" className="subtitle filter-section">
            Maximum
            <div className="passenger-slider">
              <span>{passengerCountMax}</span>
              <input id="passenger-count-max" name="passengersMax"  onChange={filtersChanged} type="range" min={passengerCountMin} max={props.passengersMax} value={passengerCountMax}></input> 
            </div>
          </label>
        </div>
        </article>
        
    </section>
  );
};
