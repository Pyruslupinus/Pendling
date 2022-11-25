// Goal for stage 1 of this
//Different cards for Car Owner / Passenger (Icons, Title)
//Different Cards for Single Trip / Pendling (Color, Subtitle?)

//From - To listed
//Time listed

const TripCard = (props) => {
  const cardInfo = props.info;

  //Conditional operator - testar bool ? om bool = true : om bool = false
  const cardStyle = {
    border:
      "2px solid " + (props.info.traveltype === "resa" ? "#22577a" : "#80ed99"),
  };

  return (
    <article className="trip-card" style={cardStyle}>
      <p>{cardInfo.type}</p>
      <p>{cardInfo.traveltype}</p>
      <p>{cardInfo.from}</p>
      <p>{cardInfo.to}</p>
      <p>{cardInfo.date}</p>
      <p>{cardInfo.time}</p>
    </article>
  );
};
