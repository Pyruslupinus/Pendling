// Goal for stage 1 of this
//Different cards for Car Owner / Passenger (Icons, Title)
//Different Cards for Single Trip / Pendling (Color, Subtitle?)

//Some different logo idées from font awesome  - fa-car-side, fa-person-walking fa-child-reaching

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
      <span>{travelDate}</span>
      <span>Klockan {cardInfo.time}</span>
      <span>Antal Passagerare 2</span>
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
