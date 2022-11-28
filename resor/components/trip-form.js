
const FormTrip = () => {
    const [name, setName] = React.useState("");

  var curr = new Date();
  curr.setDate(Date.now);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`);

    event.onSubmit()
    if (this.Date <= Date.now) {
      alert("Datumet är fel. Ange rätt datum: ${datum}");
    } else this.Date === null;
    this.Date === curr;
    };


    console.log(curr);
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <formfeild>
          <label>
            Ange namn:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div>
            Passagerare:
            <input
              name="typeOfTravler"
              type="radio"
              value={"Passagerare"}
              onChange={(e) => setName(e.target.value)}
            />
            Ägare:
            <input
              name="typeOfTravler"
              type="radio"
              value={"Ägare"}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <label>
            Från:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Till:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Datum:
            <input
              type="date"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Tid:
            <input
              type="time"
              value={"date"}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </formfeild>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FormTrip />);

