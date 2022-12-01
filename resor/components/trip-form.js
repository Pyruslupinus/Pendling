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
  const [bagages, setBagages] = React.useState("");
  const [seats, setSeats] = React.useState("");

  // cancelCourse = () => {
  //   document.getElementById("create-course-form").reset();
  // };

  // Here event handler is invoked on submitting data as
  // Array to console log
  // Which later can be linked to database through function defined bellow
  // We can also add validation or default value if not entered or expected
  // such as current date - time

  const handleSubmit = (e) => {
    e.preventDefault();
    const datbase = {
      trvlrname,
      typeOfTravler,
      typeOfTravl,
      startingpoint,
      destination,
      startDate,
      startTime,
      seats,
      bagages
    };



    // *************************
    // To send data to JSON Server
    // *************************
    setIsPending(true);
    // fetch('http:localhost:5500/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body; JSON.stringify(blog)
    // }).then(() => {
    //   console.log("data added")
    // })

    // For now use local storage
    console.log(datbase);
    addTrip(datbase);
  };

  return (
    <div>
      <h1>Car Sharing</h1>
      {/* ******************************** */}
      {/* Creating a form to enter data */}
      {/* ******************************** */}
      <form onSubmit={handleSubmit}>
        <div className="header">
          <h4>Planera resa / pendling</h4>
        </div>
        <div className="row">
          <div className="col-6">
            <label>Ange namn:</label>
            <input
              type="text"
              className="Trvlrname"
              id="TrvlrID"
              value={trvlrname}
              required
              onChange={(e) => setTrvlrname(e.target.value)}
            />
            {/* ******************************** */}
            {/* Using both dropdown list and radio selectors */}
            {/* ******************************** */}

            <div className="TypeOfTravler">
              <table>
                <th>
                  <lable for="typeOfTravl">Vilja om du reser som :</lable>
                </th>
                <tr>
                  <td>Passagerare:</td>
                  <td>
                    <input
                      name="typeOfTravler"
                      type="radio"
                      value={"Passagerare"}
                      onChange={(e) => settypeOfTravler(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Ägare:</td>
                  <td>
                    <input
                      name="typeOfTravler"
                      type="radio"
                      value={"Ägare"}
                      onChange={(e) => settypeOfTravler(e.target.value)}
                    />
                  </td>
                </tr>
              </table>
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

            <div className="Extras">
              {/* ******************************** */}
              {/* Here practicing HtML Validation  */}
              {/* ******************************** */}

              <label>Bagages</label>
              <input
                type="number"
                id="bagages"
                name="bagages"
                min="0"
                max="5"
                className="Bagages"
                value={bagages}
                required
                onChange={(e) => setBagages(e.target.value)}
              />
              <label>Seats</label>
              <input
                type="number"
                id="seats"
                name="seats"
                min="1"
                max="5"
                className="Seats"
                value={seats}
                required
                onChange={(e) => setSeats(e.target.value)}
              />
            </div>
            {/* ******************************** */}
            {/* Check and display loading / submiting  */}
            {/* ******************************** */}
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
          </div>
          <div className="col-6">
            <table>
              <th>Skapat Resa / Pendling:</th>
              <tr>
                <td>Namn :</td>
                <td>{trvlrname}</td>
              </tr>
              <tr>
                <td>Resar som :</td>
                <td>{typeOfTravler}</td>
              </tr>
              <tr>
                <td>Resortyp : </td>
                <td>{typeOfTravl}</td>
              </tr>
              <tr>
                <td>Från :</td>
                <td>{startingpoint}</td>
              </tr>
              <tr>
                <td>Till :</td>
                <td>{destination}</td>
              </tr>
              <tr>
                <td>Datum :</td>
                <td>{startDate}</td>
              </tr>
              <tr>
                <td>Tid :</td>
                <td>{startTime}</td>
              </tr>
              <tr>
                <td>Bagages</td>
                <td>{bagages}</td>
              </tr>
              <tr>
                <td>Seats</td>
                <td>{seats}</td>
              </tr>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

// Rendering React component to ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormTrip />);
