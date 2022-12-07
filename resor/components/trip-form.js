// React Form component initialized as function

const FormTrip = () => {
  const [trvlrname, setTrvlrname] = React.useState("");
  const [typeOfTravler, settypeOfTravler] = React.useState("");
  const [typeOfTravl, setTypeOfTravl] = React.useState("Resa");
  const [startingpoint, setStartingpoint] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [bagages, setBagages] = React.useState("");
  const [seats, setSeats] = React.useState("");
  const [seatBarn, setSeatBarn] = React.useState("");
  const [isPending, setIsPending] = React.useState(false);

  //  Date Validation current to max 1 Year 1 month

  React.useEffect(() => {
    const dateInput = document.getElementById("date-input");
    const date = new Date();
    const formatDate =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate().toString().padStart(2, "0");
    dateInput.min = formatDate;

    const maxYear = date.getFullYear() + 1;
    const formatDateMax =
      maxYear +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate().toString().padStart(2, "0");

    dateInput.max = formatDateMax;
  });

  //Two things we can set to limit / preset it

  // cancelCourse = () => {
  //   document.getElementById("create-course-form").reset();
  // };

  // Here event handler is invoked on submitting data as
  // Array to console log
  // Which later can be linked to database through function defined bellow
  // We can also add validation or default value if not entered or expected
  // such as current date - time

  /*******************************
  
  Creating Database Object so it can be used to parse 
  data catagori names for search page. 

  ********************************/

  const handleSubmit = (e) => {
    e.preventDefault();
    const database = {
      trvlrname,
      typeOfTravler,
      typeOfTravl,
      startingpoint,
      destination,
      startDate,
      startTime,
      seats,
      seatBarn,
      bagages,
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
      

    

    // For now use local storage
    // and pass as object "database" to parse.
    addTrip(database);
    alert("Din resa har registrerats.");

    
    const  finishedForm = document.querySelector("#Database");
    finishedForm.reset();

    window.location.reload();
    setIsPending(false);
    // })
  };

  return (
    <div>
      {/* ******************************** */}
      {/* Creating a form to enter data */}
      {/* ******************************** */}
      <div className="banner">
        <h4 className="font-effect-fire headerfooter">
          Planera resa / pendling
        </h4>
      </div>
      <form id="Database" onSubmit={handleSubmit}>
        {/* ******************************** */}
        {/* Row and Column used for Responsive design */}
        {/* ******************************** */}

        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <label>Namn:</label>
                <input
                  type="text"
                  className="Trvlrname"
                  id="TrvlrID"
                  value={trvlrname}
                  required
                  onChange={(e) => setTrvlrname(e.target.value)}
                />
                {/* ******************************** */}
                {/* Using both dropdown list and radio 
                    selectors Different approach */}
                {/* ******************************** */}
              </div>
              <div className="row">
                <div className="row">
                  <div className="row">
                    <label htmlFor="typeOfTravl">
                      <strong>Vilja om du reser som :</strong>
                    </label>
                  </div>
                  <div className="col">Passagerare:</div>
                  <div className="col">
                    <input
                      name="typeOfTravler"
                      type="radio"
                      value={"Passagerare"}
                  required
                      onChange={(e) => settypeOfTravler(e.target.value)}
                    />
                  </div>
                  <div className="row">
                    <div className="col">Ägare:</div>
                    <div className="col">
                      <input
                        name="typeOfTravler"
                        type="radio"
                        value={"Ägare"}
                        required
                        onChange={(e) => settypeOfTravler(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <select
                      className="typeOfTravl"
                      value={typeOfTravl}
                      required
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
                    </select>{" "}
                  </div>
                </div>
              </div>
              <div className="TypeOfTravler"></div>

              <div className="row">
                <div className="col">
                  <label>
                    Från:
                    <input
                      name="From"
                      type="text"
                      required
                      value={startingpoint}
                      onChange={(e) => setStartingpoint(e.target.value)}
                    />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Till:
                    <input
                      type="text"
                      required
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </label>
                </div>
                <div className="row">
                  <div className="col">
                    <label>
                      Datum:
                      <input
                        type="date"
                        id="date-input"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="col">
                    <label>
                      Tid:
                      <input
                        type="time"
                        value={startTime}
                        required
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* ******************************** */}
                {/* Here practicing HtML Validation min max  */}
                {/* ******************************** */}
                <div className="row">
                  <div className="col">
                    <label>Baggage</label>
                  </div>
                  <div className="col">
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
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Vuxen</label>
                  </div>
                  <div className="col">
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
                </div>
                <div className="row">
                  <div className="col">
                    <label>Barn</label>
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      id="seatBarn"
                      name="SeatBarn"
                      min="0"
                      max="5"
                      className="SeatBarn"
                      value={seatBarn}
                      required
                      onChange={(e) => setSeatBarn(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* ******************************** */}
              {/* Check and display loading / submiting  */}
              {/* ******************************** */}
              <div className="Sub_button">
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
              </div>
            </div>
          </div>

          {/* To verify data Entered */}

          <div className="col Skapat">
            <div className="row">
              <h5>Skapat Resa / Pendling:</h5>
              <div className="row">
                <div className="col">Namn :</div>
                <div className="col">{trvlrname}</div>
              </div>
              <div className="row">
                <div className="col">Resar som :</div>
                <div className="col">{typeOfTravler}</div>
              </div>
              <div className="row">
                <div className="col">Resortyp :</div>
                <div className="col">{typeOfTravl}</div>
              </div>
              <div className="row">
                <div className="col">Från :</div>
                <div className="col">{startingpoint}</div>
              </div>
              <div className="row">
                <div className="col">Till :</div>
                <div className="col">{destination}</div>
              </div>
              <div className="row">
                <div className="col">Datum :</div>
                <div className="col">{startDate}</div>
              </div>
              <div className="row">
                <div className="col">Tid :</div>
                <div className="col">{startTime}</div>
              </div>
              <div className="row">
                <div className="col">Bagages</div>
                <div className="col">{bagages}</div>
              </div>
              <div className="row">
                <div className="col">Vuxen</div>
                <div className="col">{seats}</div>
              </div>
              <div className="row">
                <div className="col">Barn</div>
                <div className="col">{seatBarn}</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Rendering React component to ReactDOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FormTrip />);
