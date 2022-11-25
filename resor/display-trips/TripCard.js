// Goal for stage 1 of this
//Different cards for Car Owner / Passenger (Icons, Title)
//Different Cards for Single Trip / Pendling (Color, Subtitle?)

//Some different logo idées from font awesome  - fa-car-side, fa-person-walking fa-child-reaching

const TripCard = (props) => {
  const cardInfo = props.info;

  //Conditional operator - testar bool ? om bool = true : om bool = false

  const borderStyle = getGradientBorder(
    props.info.traveltype === "resa" ? "#22577a" : "#80ed99"
  );

  return (
    <article className="trip-card" style={borderStyle}>
      <i
        className={`fa-solid ${
          props.info.type === "passagerare"
            ? "fa-person-walking-luggage"
            : "fa-car"
        } fa-lg`}
      ></i>
      <p>{cardInfo.type}</p>
      <p>{cardInfo.traveltype}</p>
      <p>{cardInfo.from}</p>
      <p>{cardInfo.to}</p>
      <p>{cardInfo.date}</p>
      <p>{cardInfo.time}</p>
    </article>
  );
};

function getGradientBorder(color) {
  return {
    border: "2px solid grey",
    background: `linear-gradient(-10deg, transparent 77%, ${color})`,
  };
}