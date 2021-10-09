import React from 'react'
import './App.css';


function Createroom() {
    return (
        <div>
              
        <div className="p-5">
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/700x350" />
                <br />
                {/*<h1 class="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic</h1>*/}
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                  Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.
                </p>
              </div>
              <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Make a Room</h2>
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="room-name" className="leading-7 text-sm text-gray-600">Room Name</label>
                  <input type="text" id="room-name" name="room-name" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="difficulty" className="leading-7 text-sm text-gray-600">Difficulty (from 1-3)</label>
                  <input type="range" id="difficulty" name="difficulty" min={1} max={3} className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="time" className="leading-7 text-sm text-gray-600">Time (from 1-10min)</label>
                  <input type="number" id="time" name="time" className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="time" className="leading-7 text-sm text-gray-600">Music?</label>
                  <input type="radio" id="music-on" name="music-radio" defaultValue="on" />
                  <label htmlFor="music-on">On</label>
                  <input type="radio" id="music-off" name="music-radio" defaultValue="off" />
                  <label htmlFor="music-off">Off</label><br />
                </div>
                <button id="create-room" className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg only-but">CREATE ROOM</button>
                <p className="text-xs text-gray-500 mt-3">Pro-tip: Always be a good sport and have fun! :D </p>
              </div>
            </div>
          </section>
        </div>
        </div>
    )
}

export default Createroom
