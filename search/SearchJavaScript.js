const reactContentRoot = document.getElementById("root");

const MyJSXElement = () => {

    return(
        <div>
                <center>
                    <div id="SearchBox">
                        <h1 id="SökResa">Sök resa</h1>
                        <form onSubmit={(e) =>  validateSearchForm(e)} action="../display/display-trips.html" method="get">
                        <div id="Destination">
                            <div>
                                <label className="SearchText">Från:</label><br></br>
                                <input name="FromBox" id="FromBox" type="text"></input>
                            </div>
                            <div>
                                <label id="ToBoXLabel" className="SearchText">Till:</label><br></br>
                                <input name="ToBox" id="ToBox" type="text"></input>
                            </div>
                        </div>
                        <div id="options">
                            <div>
                                <label className="RestypLabel">Restyp</label><br></br>
                                <select name="restyp" className="restyp" id="res">
                                    <option value="Alla">Alla</option>
                                    <option value="Resa">Resa</option>
                                    <option value="Pendling">Pendling</option>
                                </select>
                            </div>
                            <div>
                                <label className="RestypLabel">Erbjuder/Söker</label><br></br>
                                <select name="erbjudersöker" className="restyp" id="sök">
                                    <option value="Alla">Alla</option>
                                    <option value="Erbjuder">Erbjuder</option>
                                    <option value="Söker">Söker</option>
                                </select>
                            </div>
                            <div id="Passagerare">
                                <label id="RestypLabel" className="RestypLabel">Passagerare</label><br></br>
                                <input name="PassCSS" type="number" min={1} id="PassCSS"></input><br></br>
                            </div>
                        </div>
                        
                        <input id="SubmitButton" type="submit" value="Submit"></input>
                        </form>
                    </div>
                </center>
        </div>
    )
}

function validateSearchForm(event)
{
    let regularName = /^[a-öA-Ö ]+$/;
    let FromBoxVariable = document.getElementById("FromBox").value.toLowerCase();
    let ToBoxVariable = document.getElementById("ToBox").value.toLowerCase();
    if(!regularName.test(FromBoxVariable))
    {
        alert("Skriv in giltig stad att åka ifrån");
        event.preventDefault();
    }
    else
    {
        document.getElementById("FromBox").value.toLowerCase();
        document.getElementById("ToBox").value.toLowerCase();
    }
    
    if(!regularName.test(ToBoxVariable))
    {
        alert("Skriv in giltig stad att åka till");
        event.preventDefault();
    }
    else
    {
        document.getElementById("FromBox").value.toLowerCase();
        document.getElementById("ToBox").value.toLowerCase();
    }

    if(document.getElementById("PassCSS").value == "")
    {
        alert("Mata in passagerare");
        event.preventDefault();
    }
}

const root = ReactDOM.createRoot(reactContentRoot);
root.render(<MyJSXElement />);