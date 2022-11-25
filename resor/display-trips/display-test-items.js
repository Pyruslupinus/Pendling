const resa1 = {
  id: 0,
  type: "ägare",
  traveltype: "resa",
  from: "linköping",
  to: "sala",
  date: "2022-09-23",
  time: "8:30",
};

const resa2 = {
  id: 1,
  type: "ägare",
  traveltype: "pendling",
  from: "norrköping",
  to: "tuc yrkeshögskola",
  date: "2022-10-23",
  time: "8:30",
};

const resa3 = {
  id: 2,
  type: "passagerare",
  traveltype: "resa",
  from: "karlskrona",
  to: "mjölby",
  date: "2022-11-24",
  time: "8:30",
};

const resa4 = {
  id: 3,
  type: "passagerare",
  traveltype: "pendling",
  from: "sälen",
  to: "gotland",
  date: "2022-11-25",
  time: "8:30",
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
