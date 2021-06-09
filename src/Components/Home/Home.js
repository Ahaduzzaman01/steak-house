import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <section id="home">
            <Navbar />
            <div className='headerMain-container flex items-center'>
            <div className="text-white header-container lg:w-2/5 sm:w-3/6 p-5">
                <h1 className="text-5xl">We Take Pride In Our Food</h1>
                <p className="text-yellow-400 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus placeat nulla
                    quam odit voluptatum eius expedita sint. Doloremque</p><br />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
                    Read More
                </button>
            </div>
        </div>
        </section>
    );
};

export default Home;

















// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import './Home.css';

// const Home = () => {
//     return (
//         <div className='headerMain-container'>
//             <Navbar />
//             <div className="text-white header-container w-2/5">
//                 <h1 className="">We Take Pride In Our Food</h1>
//                 <p className="text-yellow-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus placeat nulla
//                     quam odit voluptatum eius expedita sint. Doloremque</p><br />
//                 <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
//                     Read More
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Home;