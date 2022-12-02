const resa1 = {
  id: 0,
  type: "ägare",
  traveltype: "resa",
  from: "linköping",
  to: "sala",
  date: "2022-09-23",
  time: "8:30",
  passagerarInfo: {
    antal: 4,
    vuxna: 3,
    barn: 1,
  },
};

const resa2 = {
  id: 1,
  type: "ägare",
  traveltype: "pendling",
  from: "norrköping",
  to: "tuc yrkeshögskola",
  date: "2022-10-23",
  time: "8:30",
  passagerarInfo: {
    antal: 8,
    vuxna: 5,
    barn: 3,
  },
};

const resa3 = {
  id: 2,
  type: "passagerare",
  traveltype: "resa",
  from: "karlskrona",
  to: "mjölby",
  date: "2022-11-24",
  time: "8:30",
  passagerarInfo: {
    antal: 3,
    vuxna: 1,
    barn: 2,
  },
};

const resa4 = {
  id: 3,
  type: "passagerare",
  traveltype: "pendling",
  from: "sälen",
  to: "gotland",
  date: "2022-11-25",
  time: "8:30",
  passagerarInfo: {
    antal: 1,
    vuxna: 1,
    barn: 0,
  },
};

function GetDataBase() {
  return [
    resa1,
    resa2,
    resa3,
    resa4,
    resa1,
    resa2,
    resa3,
    resa1,
    resa2,
    resa3,
    resa4,
    resa1,
    resa2,
    resa3,
    resa4,
    resa4,
    resa1,
    resa2,
    resa3,
    resa4,
  ];
}

const fakeDataBase = [
  resa1,
  resa2,
  resa3,
  resa4,
  resa1,
  resa2,
  resa3,
  resa1,
  resa2,
  resa3,
  resa4,
  resa1,
  resa2,
  resa3,
  resa4,
  resa4,
  resa1,
  resa2,
  resa3,
  resa4,
];

function SaveDataBase() {
  window.localStorage.setItem("database", JSON.stringify(fakeDataBase));
}

function LoadDataBase() {
  console.log(window.localStorage.getItem("database"));
  console.log(JSON.parse(window.localStorage.getItem("database")));
}

function AppendToDB(item) {
  let db = JSON.parse(window.localStorage.getItem("database"));
  db.push(item);
  window.localStorage.setItem("database", JSON.stringify(db));
}

//We can nest things in objects in js so we could format our info like this

const resaExempel = {
  tripinfo: {
    type: "passagerare",
    traveltype: "pendling",
    from: "sälen",
    to: "gotland",
    date: "2022-11-25",
    time: "8:30",
  },
  personalInfo: {
    name: "bert bertsson",
  },
};

//You can then access it like
resaExempel.personalInfo.from;

//Just an idea to consider when we're exporting / importing the data



//New Test data methods from 02-12
function createDummyData(){
  const newTrip1 ={
    name: "Robert Svensson",
    type: "ägare",
    traveltype : "pendling",
    from : "Stockholm",
    to: "Sala",
    date: "2022-11-02",
    time: "8:30",
    passagerarInfo: {
      antal: 5,
      vuxna: 2,
      barn: 3
    },
    baggage: 3,
    extrainfo: "Har hund i bilen"
  }

  const newTrip2 ={
    name: "Sven Robertsson",
    type: "passagerare",
    traveltype : "resa",
    from : "Sala",
    to: "Stockholm",
    date: "2022-12-04",
    time: "9:30",
    passagerarInfo: {
      antal: 2,
      vuxna: 1,
      barn: 1
    },
    baggage: 1,
    extrainfo: "Allergisk mot hundar"
  }

  
  const newTrip3 ={
    name: "Son Svenrobert",
    type: "ägare",
    traveltype : "resa",
    from : "Gotland",
    to: "Tokyo",
    date: "2023-12-04",
    time: "10:33",
    passagerarInfo: {
      antal: 11,
      vuxna: 6,
      barn: 5
    },
    baggage: 4,
    extrainfo: "Via tåg"
  }


  const newTrip4 ={
    name: "Mars, the god of war",
    type: "passagerare",
    traveltype : "pendling",
    from : "Stockholm",
    to: "Venus",
    date: "2025-01-22",
    time: "16:45",
    passagerarInfo: {
      antal: 4,
      vuxna: 2,
      barn: 2
    },
    baggage: 5,
    extrainfo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex beatae et itaque in a aliquid! Perspiciatis vel impedit consequatur repellat quam tempora voluptas aliquam, rem delectus quod, praesentium labore! Nesciunt!"
  }
  
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
