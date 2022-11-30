//Doing everything in one js file to make it a bit less cluttered in the project

//Some different logo ideas from font awesome  - fa-car-side, fa-person-walking fa-child-reaching

const TripCard = (props) => {
  const cardInfo = props.info;

  //Conditional operator (tertiary operator) - testar (bool ? om bool = true körs den här sidan : om bool = false körs den här sidan)
  //Går att göra ganska mycket roligt med react och den eftersom vi kan peta in javascript mellan {} i html-stycken
  //Eftersom vi ska ha ut en hel del varierade saker kör jag allt på samma gång däremot
  const variableInfo = {
    typeLogo:
      props.info.type === "passagerare"
        ? "fa-person-walking-luggage"
        : "fa-car",
    gradientColor: props.info.traveltype === "resa" ? "#22577a" : "#80ed99",
    dropColor: props.info.traveltype === "resa" ? "#22577a" : "#80ed99",
    traveltypeText:
      (props.info.type === "passagerare" ? "Söker " : "Erbjuder ") +
      (props.info.traveltype === "resa" ? "Resa" : "Pendling"),
  };
  //Tldr for above is that we're doing some style and text changes based on the 4 possible
  //combinations of passagerare, ägare, pendling & resa. A more readable method would have been a switch
  //and functions returning different objects, although that would have made the code much longer

  //Construct the parts of the styling that varies depending on the variableInfo
  let cardStyle = {};
  cardStyle = setGradientBorder(cardStyle, variableInfo.gradientColor);
  cardStyle = setDropShadow(cardStyle, variableInfo.dropColor);

  //Create a readable version of our passed in date
  const travelDate = getTravelDate(cardInfo.date);

  return (
    <article className="trip-card" style={cardStyle}>
      <i
        id="type-logo"
        className={`fa-solid ${variableInfo.typeLogo} fa-lg`}
      ></i>
      <span id="trip-destination" className="capitalize">
        {cardInfo.from} - {cardInfo.to}
      </span>
      <span id="travel-type-text">{variableInfo.traveltypeText}</span>
      <CardTimeInfo dateInfo={travelDate} timeInfo={cardInfo.time} />
      <CardPassengerInfo passagerarInfo={cardInfo.passagerarInfo} />
    </article>
  );
};

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
      return "Måndag";
    case 1:
      return "Tisdag";
    case 2:
      return "Onsdag";
    case 3:
      return "Torsdag";
    case 4:
      return "Fredag";
    case 5:
      return "Lördag";
    case 6:
      return "Söndag";
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

//I Split these into their own components to make things more readable / scaleable
const CardTimeInfo = (props) => {
  return (
    <div className={"flex-column card-section"}>
      <span className={"section-title subtitle"}>Tid</span>
      <span>{props.dateInfo}</span>
      <span>Klockan {props.timeInfo}</span>
    </div>
  );
};

//Decided to be a bit silly with the passengers so they now show the # + icons for each
const CardPassengerInfo = (props) => {
  const passengerIcons = [];

  const adultCount = parseInt(props.passagerarInfo.vuxna);
  const childCount = parseInt(props.passagerarInfo.barn);

  const [passengerText, setPassengerText] = React.useState("");

  //useEffect = Do this after everything has loaded & rendered
  //(technically, do this after every render)
  //Need to do this since we can't directly set things in this method
  //because that would call for a re-render which would then call this method
  //and cause a loop

  React.useEffect(() => {
    //Slightly silly use of the ? conditional check and string interpolation
    //Depending on how many adults we have we want to display either vuxen / vuxna, and
    //if we have any children we want to display their count, otherwise end the sentence with a dot
    let passengerText = `${adultCount} ${adultCount > 1 ? "vuxna" : "vuxen"}${
      childCount > 0 ? `, ${childCount} barn` : ""
    }`;
    setPassengerText(passengerText);
  });

  //To be able to map the adult / children to icons we need to put them in an array
  for (let index = 0; index < adultCount; index++) {
    passengerIcons.push("adult");
  }
  for (let index = 0; index < childCount; index++) {
    passengerIcons.push("child");
  }

  let id = 0;
  return (
    <div className={"flex-column card-section tooltip"}>
      <span className="tooltiptext">{passengerText}</span>
      <span className={"section-title subtitle"}>Antal Passagerare</span>
      <div className="passenger-row">
        <span className="passenger-text">{props.passagerarInfo.antal}</span>
        {/* Map out adult / children to icons */}
        {passengerIcons.map((passenger) => {
          //Depending on if it's an adult or a child change set the icons
          //to the correct combination
          let icons = "fa-solid fa-person fa-lg";
          if (passenger === "child") {
            icons = "fa-solid fa-child";
          }
          id++;
          return <i key={id} className={icons} />;
        })}
      </div>
      {/* Tooltip stolen from w3schools */}
    </div>
  );
};