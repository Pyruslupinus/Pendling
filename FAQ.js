/*Sökfuntktion, jämför bara input string med text i frågor direkt. Inga taggar etc (än) */
function searchQA() {
    let input = document.getElementById("searchbar").value.toLowerCase();

    let searchElement = document.getElementsByClassName("FAQ");

    for (i = 0; i < searchElement.length; i++) {
        if (searchElement[i].innerText.toLowerCase().includes(input)){
            searchElement[i].style.display = "block";
        }else {
            searchElement[i].style.display = "none";
        }
    }
}

/*Visa och dölj svar på frågor*/
const ContentShowOrHide = (props) => {
    let question = props.question
    //let arrow =<i className="fa-solid fa-chevron-down"></i>

    const [arrow, setCurrentArrow] = React.useState(<i className="fa-solid fa-chevron-down"></i>)

    const [answer, setCurrentAnswer] = React.useState("")
    const ShowOrHideAnswer = () => {
        if (answer ===""){
            setCurrentAnswer(props.answer);
            setCurrentArrow(<i class="fa-solid fa-chevron-up"></i>);
        } else {
            setCurrentAnswer("");
            setCurrentArrow(<i className="fa-solid fa-chevron-down"></i>)
        }
        
    }
    return (
        <article className="FAQ">
          <button className="question" onClick={ShowOrHideAnswer}><h2>{arrow} {question}</h2></button>
          <p className="answer">{answer}</p>
        </article>
    )
}

const reactContentRoot = document.getElementById("root");
const App = () => {
    return (
        <div>
            <ContentShowOrHide 
            question={"Får jag köra min EPA-traktor?"} 
            answer={" Nej, vi tillåter enbart fordon registerade som bil. Alla förare måste vara över 18 år."} />
            
            <ContentShowOrHide 
            question={"Får jag köra min mopedbil?"}
            answer={"Nej, vi tillåter enbart fordon registerade som bil. Alla förare måste vara över 18 år."}/>
            
            <ContentShowOrHide
            question={" Jag kör motorcykel till jobbet, kan jag registera mig som förare?"}
            answer={" Nej, vi tillåter enbart fordon registerade som bil."} />
             
             <ContentShowOrHide
            question={"Kan min 12åring åka själv med en förare jag hittar via pendling.se?"}
            answer={" Nej, alla passagerare under 18 år måste ha sällskap av en ansvarig vuxen. Passagerare och förare är båda ansvariga för att barn under 135cm har bilbarnstol. Förare har rätt att neka passagerare om sådan säkerhetsutrusting saknas."} />
             
             <ContentShowOrHide
            question={"Får jag neka någon att åka med om de inte använder bälte?"}
            answer={"Förare är ansvariga för att alla passagere under 16 år använder bilbälte (svensk lag). Om passagerare under 16 år inte använder bälte har föraren rätt att neka passageraren. Föraren får även neka andra passagerare om dessa äventyrar säkerheten för förare eller passagerare. Passagere som nekas att fortsätta resan är inte skyldiga att betala överenskommen ersättning för resten av resan."} />
             
             <ContentShowOrHide
            question={" Vem är ansvarig för att det finns en bilbarnstol till mitt barn?"}
            answer={" Myndig person som medföljer barnet är ansvarig för att det finns lämplig bilbarnstol. Föraren har rätt att neka passagerare om lämplig bilbarnstol saknas för något barn under 135cm."} />
             
             <ContentShowOrHide
            question={"Tillhandahåller pendling.se någon försäkring?"}
            answer={" Nej, alla åkning sker på eget ansvar. Observera att bilar i Sverige måste vara minst trafikförsäkrade för att få köras."} />
             
             <ContentShowOrHide
            question={"Hur vet jag att bilen jag åker med är försäkrad?"}
            answer={"Fråga föraren. För att en bil ska får köras i Sverige måste den vara minst trafikförsäkrad."} />
             
             <ContentShowOrHide
            question={"Kan jag registera mig som både passagerare och bilägare?"}
            answer={"Ja, vi skiljer inte på passagerarkonton och bilägarkonton. Du kan dock bara registera dig som bilägare eller passagerare på enskilda resor."} />
             
             <ContentShowOrHide
            question={"Får jag dricka alkohol innan jag skjutsar någon?"}
            answer={"Nej, att köra bil alkoholpåverkad är ollagligt under lagen om rattfylleri, såväl som farligt."} />

            <ContentShowOrHide
            question={"Får jag neka någon som är alkholpåverkad från att åka med?"}
            answer={"Förare har rätt att neka passagere som påverkar säkerheten negativt eller på annat sätt stör ordningen. Passagerare som nekas är inte skyldiga att betala överenskommen ersättning för resten av resan."} />
            
            <ContentShowOrHide
            question={"Behöver jag ha körkort för att registera mig?"}
            answer={" Du behöver inte ha körtkort för att registera dig, men för att vara förare/bilägare under en resa krävs givetvis körkort."} />
            
            <ContentShowOrHide
            question={"Varför måste jag ha körkort för att vara bilägare?"}
            answer={"Vi tillåter inte förare utan körkort."} />
            
            <ContentShowOrHide
            question={"Måste jag ha B-körkort?"}
            answer={" För att skapa resor som bilägare krävs att du har minst B-körkort, då vi enbart tillåter fordon registerade som bil. För att åka som passagerare krävs inget körkort."} />
            
      </div>
    )
}
ReactDOM.render(<App />, reactContentRoot);



