// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [dogs, setDogs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/dogs')
//       .then(response => setDogs(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleSearch = (event) => {
//     event.preventDefault();
//     const dog = dogs.find(d => d.name.toLowerCase() === searchTerm.toLowerCase());
//     if (dog) {
//       alert(`Found: ${dog.name}, ${dog.gender} ${dog.age}`);
//     } else {
//       alert('The one you are searching for is not available.');
//     }
//   };

//   return (
//     <div className="App">
//       <header className="myheader">
//         <h1 className="heading1">Rover!<sub># Adopt gracefully...</sub></h1>
//         <div className="menu">
//           <span id="mymenubutton"><i className="fa fa-bars"></i></span>
//         </div>
//       </header>
//       <main>
//         <section>
//           <div className="mysearchform">
//             <form onSubmit={handleSearch}>
//               <input
//                 className="mysearch"
//                 type="search"
//                 placeholder=" Find your homie here..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//               <button className="mysubmit" type="submit">
//                 <img src="/images/mine.jpg" alt="paw" width="40px" height="42px" />
//                 <br />Search
//               </button>
//             </form>
//           </div>
//           <br /><br /><br />
//           {/* <div className="mydogclass">
//             {dogs.map(dog => (
//               <a href="#" key={dog.name} className={dog.gender}>
//                 <img src={dog.image} alt={dog.name} />
//                 <p>{dog.gender} {dog.age}</p>
//               </a>
//             ))}
//           </div> */}
//           <div className="mydogclass">
//             <a href="Adultm.html" className="male">
//               <img src="images/adultm.webp" alt="doggie" />
//               <p>Male Adult</p>
//             </a>
//             <a href="Adultf.html" className="female">
//               <img src="images/adultf.webp" alt="doggie" />
//               <p>Female Adult</p>
//             </a>
//             <a href="malep.html" className="male">
//               <img src="images/puppym.png" alt="puppy" />
//               <p>Male puppy</p>
//             </a>
//             <a href="femalep.html" className="female">
//               <img src="images/puppyf.webp" alt="puppy" />
//               <p>Female puppy</p>
//             </a>
//           </div>
//         </section>
//       </main>
//       <footer>
//         <div className="myfooter">
//           <div id="card1"><a href="#">Card1</a></div>
//           <div id="card2"><a href="#">Card2</a></div>
//           <div id="card3"><a href="#">Card3</a></div>
//           <div id="card4"><a href="#">Contact Us</a></div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/dogs')
      .then(response => setDogs(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const dog = dogs.find(d => d.name.toLowerCase() === searchTerm.toLowerCase());
    if (dog) {
      alert(`Found: ${dog.name}, ${dog.gender} ${dog.age}`);
    } else {
      alert('The one you are searching for is not available.');
    }
  };

  return (
    <div className="App">
      <header className="myheader">
        <h1 className="heading1">Rover!<sub># Adopt gracefully...</sub></h1>
        <div className="menu">
          <span id="mymenubutton"><i className="fa fa-bars"></i></span>
        </div>
      </header>
      <main>
        <section>
          <div className="mysearchform">
            <form onSubmit={handleSearch}>
              <input
                className="mysearch"
                type="search"
                placeholder=" Find your homie here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="mysubmit" type="submit">
                <img src="/images/mine.jpg" alt="paw" width="40px" height="42px" />
                <br />Search
              </button>
            </form>
          </div>
          <br /><br /><br />
          <div className="mydogclass">
            <Link to="/male-adult" className="male">
              <img src="images/adultm.webp" alt="doggie" />
              <p>Male Adult</p>
            </Link>
            <a href="Adultf.html" className="female">
              <img src="images/adultf.webp" alt="doggie" />
              <p>Female Adult</p>
            </a>
            <a href="malep.html" className="male">
              <img src="images/puppym.png" alt="puppy" />
              <p>Male puppy</p>
            </a>
            <a href="femalep.html" className="female">
              <img src="images/puppyf.webp" alt="puppy" />
              <p>Female puppy</p>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="myfooter">
          <div id="card1"><a href="#">Card1</a></div>
          <div id="card2"><a href="#">Card2</a></div>
          <div id="card3"><a href="#">Card3</a></div>
          <div id="card4"><a href="#">Contact Us</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
