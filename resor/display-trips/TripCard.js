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

  let cardStyle = {};
  cardStyle = setGradientBorder(cardStyle, variableInfo.gradientColor);
  cardStyle = setDropShadow(cardStyle, variableInfo.dropColor);

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
      <p>{cardInfo.date}</p>
      <p>{cardInfo.time}</p>
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

function getTravelDate(dateString) {}
