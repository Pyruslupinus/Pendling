//Examples of working with local storage as a "database"
// function SaveDataBase() {
//   window.localStorage.setItem("database", JSON.stringify(fakeDataBase));
// }

// function LoadDataBase() {
//   console.log(window.localStorage.getItem("database"));
//   console.log(JSON.parse(window.localStorage.getItem("database")));
// }

// function AppendToDB(item) {
//   let db = JSON.parse(window.localStorage.getItem("database"));
//   db.push(item);
//   window.localStorage.setItem("database", JSON.stringify(db));
// }


//New Test data methods from 02-12
function createDummyData() {
  const newTrip1 = {
    name: "Robert Svensson",
    type: "ägare",
    traveltype: "pendling",
    from: "Stockholm",
    to: "Sala",
    date: "2022-11-02",
    time: "8:30",
    passagerarInfo: {
      vuxna: 2,
      barn: 3,
    },
    baggage: 3,
    extrainfo: "Har hund i bilen",
  };

  const newTrip2 = {
    name: "Sven Robertsson",
    type: "passagerare",
    traveltype: "resa",
    from: "Sala",
    to: "Stockholm",
    date: "2022-12-04",
    time: "9:30",
    passagerarInfo: {
      vuxna: 1,
      barn: 1,
    },
    baggage: 1,
    extrainfo: "Allergisk mot hundar",
  };

  const newTrip3 = {
    name: "Son Svenrobert",
    type: "ägare",
    traveltype: "resa",
    from: "Gotland",
    to: "Tokyo",
    date: "2023-12-04",
    time: "10:33",
    passagerarInfo: {
      vuxna: 6,
      barn: 5,
    },
    baggage: 4,
    extrainfo: "Via tåg",
  };

  const newTrip4 = {
    name: "Mars, the god of war",
    type: "passagerare",
    traveltype: "pendling",
    from: "Stockholm",
    to: "Venus",
    date: "2025-01-22",
    time: "16:45",
    passagerarInfo: {
      vuxna: 2,
      barn: 2,
    },
    baggage: 5,
    extrainfo:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex beatae et itaque in a aliquid! Perspiciatis vel impedit consequatur repellat quam tempora voluptas aliquam, rem delectus quod, praesentium labore! Nesciunt!",
  };

  return [
    newTrip1,
    newTrip2,
    newTrip3,
    newTrip4,
    newTrip1,
    newTrip1,
    newTrip2,
    newTrip3,
    newTrip4,
    newTrip2,
    newTrip1,
    newTrip2,
    newTrip1,
    newTrip2,
    newTrip3,
    newTrip4,
    newTrip3,
    newTrip4,
    newTrip1,
    newTrip2,
    newTrip3,
    newTrip4,
    newTrip3,
    newTrip1,
    newTrip2,
    newTrip3,
    newTrip4,
    newTrip4,
  ];
}
