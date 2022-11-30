// React Form component initialized as function

const FormTrip = () => {
  const [trvlrname, setTrvlrname] = React.useState("");
  const [typeOfTravler, settypeOfTravler] = React.useState("");
  const [typeOfTravl, setTypeOfTravl] = React.useState("Resa");
  const [startingpoint, setStartingpoint] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);
  // cancelCourse = () => {
  //   document.getElementById("create-course-form").reset();
  // };

  // Here event handle is invoct on submiting data as
  // Array to console log
  // Which later can be linked to database through function

  // We can also add validation or default value if not entered or expected
  // such as current date - time

  const handleSubmit = (e) => {
    e.preventDefault();
    const datbase = [
      trvlrname,
      typeOfTravler,
      typeOfTravl,
      startingpoint,
      destination,
      startDate,
      startTime,
    ];

    // To send data to JSON Server
    // *************************
    // setIsPending(true)
    //
    // fetch('http:localhost:5500/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body; JSON.stringify(blog)
    // }).then(() => {
    //   console.log("data added")
    // })

    // For now use local storage
    console.log(datbase);
  };

  return (
    <div>
      <h1>Car Sharing</h1>

      {/* Creating a form to enter data */}
      <form onSubmit={handleSubmit}>
        <h4>Planera resa / pendling</h4>
        <label>Ange namn:</label>
        <input
          type="text"
          className=""
          value={trvlrname}
          required
          onChange={(e) => setTrvlrname(e.target.value)}
        />
        <div className="TypeOfTravler">
          Passagerare:
          <input
            name="typeOfTravler"
            type="radio"
            value={"Passagerare"}
            onChange={(e) => settypeOfTravler(e.target.value)}
          />
          Ägare:
          <input
            name="typeOfTravler"
            type="radio"
            value={"Ägare"}
            onChange={(e) => settypeOfTravler(e.target.value)}
          />
          <lable for="typeOfTravl">Vilja om du reser som :</lable>
          <select
            name="typeOfTravl"
            value={typeOfTravl}
            onChange={(e) => setTypeOfTravl(e.target.value)}
          >
            <option
              className="typeOfTravl"
              value={"Resa"}
              onChange={(e) => setTypeOfTravl(e.target.value)}
            >
              Resa:
            </option>
            <option
              className="typeOfTravl"
              value={"Pendling"}
              onChange={(e) => setTypeOfTravler(e.target.value)}
            >
              Pendling:
            </option>
          </select>
        </div>
        <div className="DateTimeofTrip">
          <label for="From">
            Från:
            <input
              name="From"
              type="text"
              value={startingpoint}
              onChange={(e) => setStartingpoint(e.target.value)}
            />
          </label>
          <label>
            Till:
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </label>
          <label>
            Datum:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            Tid:
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
        </div>

        {!isPending && (
          <button className="Submit" type="submit" onClick="">
            Submit
          </button>
        )}
        {isPending && (
          <button className="Submit" type="submit" onClick="" disabled>
            Submit...
          </button>
        )}
        <button className="Submit" type="reset" onClick="">
          Reset
        </button>
        <div>
          <p>
            Skapat Resa / Pendling:
            <span>
              <br /> Namn : {trvlrname}
              <br /> Resar som : {typeOfTravler}
              <br /> Resortyp : {typeOfTravl}
              <br /> Från : {startingpoint}
              <br /> Till : {destination}
              <br /> Datum : {startDate}
              <br /> Tid : {startTime}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

// Rendering React component to ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormTrip />);
