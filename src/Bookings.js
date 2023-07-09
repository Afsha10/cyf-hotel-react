import React, {useEffect, useState} from 'react';
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";


// import SearchResultsOther from './components/SearchResultsOther.js';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
    .then((res) => res.json())
    .then((data) => {
      setBookings(data);
    });
  }, []);


const search = searchVal => {
  console.log("TO DO!", searchVal);
  setSearchVal(searchVal);
}

  const displayedBookings = bookings.filter(
    (booking) =>
      booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      booking.surname.toLowerCase().includes(searchVal.toLowerCase())
  );


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults  results={displayedBookings} />
        {/* <SearchResultsOther results={bookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
