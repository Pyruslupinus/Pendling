//Doing everything in one js file to make it a bit less cluttered in the project
//Some different logo ideas from font awesome  - fa-car-side, fa-person-walking fa-child-reaching

const TripCard = (props) => {
  const cardInfo = props.info;

  const variableInfo = getVariableInfo(cardInfo);

  //Construct the parts of the styling that varies depending on the variableInfo
  let cardStyle = {};
  cardStyle = setGradientBorder(cardStyle, variableInfo.gradientColor);
  cardStyle = setDropShadow(cardStyle, variableInfo.dropColor);

  //Create a readable version of our passed in date
  const travelDate = getTravelDate(cardInfo.date);

  //Handle that the card has been clicked
  const handleClick = () => {
    //Validate that we have a callback function set in our props
    if ("cardClick" in props) {
      props.cardClick(cardInfo);
    }
  };
  

  return (
    <article className="trip-card" style={cardStyle} onClick={handleClick}>
      <i
        id="type-logo"
        className={`fa-solid ${variableInfo.typeLogo} fa-lg`}
        aria-hidden="true"
      ></i>
      <h2 id="trip-destination" className="capitalize">
        {cardInfo.from} - {cardInfo.to}
      </h2>
      <span id="travel-type-text">{variableInfo.traveltypeText}</span>
      <CardTimeInfo dateInfo={travelDate} timeInfo={cardInfo.time} />
      <CardPassengerInfo passagerarInfo={cardInfo.passagerarInfo} />
    </article>
  );
};

//Full screen modal version of the cards
const TripModal = (props) => {
  const cardInfo = props.info;
  const variableInfo = getVariableInfo(cardInfo);
  const travelDate = getTravelDate(cardInfo.date);

  const borderStyle = {
    outlineColor: variableInfo.dropColor,
    borderColor: variableInfo.dropColor,
  };

  const handleContactClicked = () => {
    props.handleContactClicked(props.info);
  };

  //This should maybe be done by the parent but - check if we're logged in and tell our contact button to disable if we're not
  const loginStatus = sessionStorage.getItem("LoggedIn") == "true";

  //Essentially just a card, but with some extra info & a contact button added
  return (
    <section id="cardModal" className="trip-modal">
      <article className="trip-modal-content" style={borderStyle}>
        <span className="capitalize modal-title">
          {cardInfo.from} - {cardInfo.to}
          <br />
          <span className="section-title subtitle">
            {variableInfo.traveltypeText}
          </span>
        </span>
        <CardTimeInfo dateInfo={travelDate} timeInfo={cardInfo.time} />
        <CardPassengerInfo
          passagerarInfo={cardInfo.passagerarInfo}
          toolTipStyle={"show"}
        />
        <CardLuggageInfo luggageInfo={cardInfo.baggage} />
        <CardPersonalInfo personInfo={cardInfo.name} />
        <CardExtraInfo extraInfo={cardInfo.extrainfo} />
        <CardContactButton contactCallback={handleContactClicked} disabled={!loginStatus}/>
      </article>
    </section>
  );
};

//I Split these into their own components to make things more readable / scaleable
const CardTimeInfo = (props) => {
  return (
    <div className={"flex-column card-section"}>
      <h3 className={"section-title subtitle"}>Tid</h3>
      <div className="section-text">
        <span>{props.dateInfo}</span>
        <br />
        <span>Klockan {props.timeInfo}</span>
      </div>
    </div>
  );
};

//Decided to be a bit silly with the passengers so they now show the # + icons for each
const CardPassengerInfo = (props) => {
  const passengerIcons = [];

  const adultCount = parseInt(props.passagerarInfo.vuxna);
  const childCount = parseInt(props.passagerarInfo.barn);
  const total = adultCount + childCount;

  const [totalPassengers, setTotalPassengers] = React.useState(total);
  const [passengerText, setPassengerText] = React.useState("");

  //useEffect = Do this after everything has loaded & rendered
  //(technically, do this after every render)
  React.useEffect(() => {
    //Slightly silly use of the ? conditional check and string interpolation
    //Depending on how many adults we have we want to display either vuxen / vuxna, and
    //if we have any children we want to display their count, otherwise end the sentence with a dot
    let passengerText = `${adultCount} ${adultCount > 1 ? "vuxna" : "vuxen"}${
      childCount > 0 ? `, ${childCount} barn` : ""
    }`;
    setPassengerText(passengerText);
    setTotalPassengers(total);

    //We could set both of these outside of useEffect but doing it like this
    // solves a really silly bug that is kind of hard to explain.

    //If I didn't do this in here (forcing an additional re-render somehow) then
    //the passenger text / total would not update on filtering.
    //The reason for this is most likely that the map-method uses index-based keys instead
    //of unique id. 

    //Because of that the map gets a different array when filters update,
    // but sees that the element on position 0 still has key 0
    //The effect of this meant that the cards ended up with the wrong passenger icons
  });

  //To be able to map the adult / children to icons we need to put them in an array
  //We set a max number of allowed icons
  const maxIcons = 10;

  //Define a function so we don't need to do this twice
  //Essentially - add the number of adult / child to the array,
  //if we're approaching max, add "...", if we're at or past, don't add more
  function pushIcons(identifier, count) {
    for (let index = 0; index < count; index++) {
      if (passengerIcons.length < maxIcons - 1) {
        passengerIcons.push(identifier);
      } else if (passengerIcons.length == maxIcons - 1) {
        passengerIcons.push("...");
      } else {
        return;
      }
    }
  }

  //Add our two sets of icons
  pushIcons("adult", adultCount);
  pushIcons("child", childCount);

  let toolTipClasslist = "tooltiptext capitalize";
  //Check if we've told this to always show our tooltip
  if ("toolTipStyle" in props) {
    toolTipClasslist = "tooltiptext capitalize always-show";
  }

  let id = 0;
  return (
    <article className={"flex-column card-section tooltip"}>
      <h3 className={"section-title subtitle"}>Antal Passagerare</h3>
      <div className="passenger-icon-display">
        <span className="passenger-text">{totalPassengers}<span className="screen-reader"> {passengerText}</span></span>
        <div className="passenger-row">
          {/* Map out adult / children to icons */}
          {passengerIcons.map((passenger) => {
            //Depending on if it's an adult or a child change set the icons
            //to the correct combination
            let icons = "fa-solid fa-person fa-lg";
            if (passenger === "child") {
              icons = "fa-solid fa-child";
            }
            if (passenger === "...") {
              icons = "fa-solid fa-ellipsis fa-lg";
            }
            id++;
            return <i key={id} className={icons} aria-hidden="true"/>;
          })}
        </div>

        <div className={toolTipClasslist}>{passengerText}</div>
      </div>

      {/* Tooltip stolen from w3schools */}
    </article>
  );
};

//Same as the passenger icons but the simpler version
//Just draw luggages based on the passed in number
const CardLuggageInfo = (props) => {
  const luggageIcons = [];
  for (let index = 0; index < parseInt(props.luggageInfo); index++) {
    luggageIcons.push("luggage");
  }
  let id = 0;
  return (
    <div className={"flex-column card-section"}>
      <h3 className={"section-title subtitle"}>Baggage</h3>
      <div className="luggage-icon-display">
        <span className="luggage-text">{props.luggageInfo}</span>
        <div className="luggage-row">
          {luggageIcons.map((luggage) => {
            id++;
            return <i key={id} className="fa-solid fa-suitcase-rolling fa-lg" aria-hidden="true"/>
          })}
        </div>
      </div>
      <div className="section-text">
      </div>
    </div>
  );
};

//These are split into their own components both because they need to be re-used for the modal
//but also because it's a lot easier to visualise layout on a "top-level" component in react
//if you split the sections into their own components
const CardPersonalInfo = (props) => {
  return (
    <div className={"flex-column card-section"}>
      <h3 className={"section-title subtitle"}>Upplagd av</h3>
      <div className="section-text">
        <span>{props.personInfo}</span>
      </div>
    </div>
  );
};

const CardExtraInfo = (props) => {
  let extraInfo = props.extraInfo;
  if (extraInfo == "") {
    extraInfo = "Ingen ytterligare information fr??n anv??ndaren.";
  }

  return (
    <div className={"flex-column card-section"}>
      <h3 className={"section-title subtitle"}>Extra Info</h3>
      <div className="section-text">
        <span>{extraInfo}</span>
      </div>
    </div>
  );
};

const CardContactButton = (props) => {
  const handleContact = () => {
    props.contactCallback();
  };

  //Depending on if we're logged in or not, disable the button
  //and display a helper message
  let disable = false;
  let title = "";
  let modalClasses = "modal-contact";
  if(props.disabled === true){
    disable = true;
    modalClasses = "modal-contact modal-disabled";
    title = "Du m??ste vara inloggad f??r att skicka en kontaktf??rfr??gan."
  }

  return (
      <button onClick={handleContact} disabled={disable} title={title} className={modalClasses}>
      Kontakta
      </button>
  );
};



// HELPER METHODS //

//Conditional operator (tertiary operator) - testar (bool ? om bool = true k??rs den h??r sidan : om bool = false k??rs den h??r sidan)
//G??r att g??ra ganska mycket roligt med react och den eftersom vi kan peta in javascript mellan {} i html-stycken
//Eftersom vi ska ha ut en hel del varierade saker k??r jag allt p?? samma g??ng d??remot
function getVariableInfo(cardInfo) {
  return {
    typeLogo:
      cardInfo.type === "passagerare" ? "fa-person-walking-luggage" : "fa-car",
    gradientColor: cardInfo.traveltype === "resa" ? "#22577a" : "#80ed99",
    dropColor: cardInfo.traveltype === "resa" ? "#22577a" : "#80ed99",
    traveltypeText:
      (cardInfo.type === "passagerare" ? "S??ker " : "Erbjuder ") +
      (cardInfo.traveltype === "resa" ? "Resa" : "Pendling"),
  };

  //Tldr for above is that we're doing some style and text changes based on the 4 possible
  //combinations of passagerare, ??gare, pendling & resa. A more readable method would have been a switch
  //and functions returning different objects, although that would have made the code much longer
}

//Originally I did this with the border-image trick from https://youtu.be/ypstT5UfCsk 9 minutes in
//Now this is a much simpler way of doing it so no more sillyness
function setGradientBorder(style, color) {
  style.background = `linear-gradient(135deg, #f0f8ffd0 77%, ${color})`;
  style.borderColor = `${color}`;

  return style;
}

function setDropShadow(style, color) {
  style.boxShadow = `0px 2px ${color}`;
  return style;
}

//format and return the full date string
function getTravelDate(dateString) {
  const travelDate = new Date(dateString);

  return (
    getDayText(travelDate.getDay()) +
    ", den " +
    travelDate.getDate() +
    " " +
    getMonthText(travelDate.getMonth())
  );
}

//Gonna move these (together with saving & loading from localstorage) to a helper script later
function getDayText(weekDayIndex) {
  switch (weekDayIndex) {
    case 0:
      return "M??ndag";
    case 1:
      return "Tisdag";
    case 2:
      return "Onsdag";
    case 3:
      return "Torsdag";
    case 4:
      return "Fredag";
    case 5:
      return "L??rdag";
    case 6:
      return "S??ndag";
    default:
      return "";
  }
}

function getMonthText(monthIndex) {
  switch (monthIndex) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Mars";
    case 3:
      return "April";
    case 4:
      return "Maj";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Augusti";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Juli";
    default:
      return "";
  }
}