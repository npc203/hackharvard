import './App.css';
import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Createroom from "./Createroom"
import Joinroom from "./Joinroom"

function Home() {
    return (
        <div>
                  
        <div className="p-5">
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Multiplayer Games in
                  <br className="hidden lg:inline-block" />Real Life
                </h1>
                <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div className="flex justify-center">
                  <a href="create.html">
                    <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Create a Room</button>
                  </a>
                  <a href="join.html">
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join a Room</button>
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/900x550" />
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
              <div className="flex flex-wrap">
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fun</h2>
                  <p className="leading-relaxed text-base mb-4">Challenge your friends for a game battle. Compete and be the best!</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Health</h2>
                  <p className="leading-relaxed text-base mb-4">We've got you covered. Playing has its benefits! Be fit and more healthy then ever before while having fun.</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                  <p className="leading-relaxed text-base mb-4">PlayFit won't let COVID stop you from having a good time enjoying at home.</p>
                </div>
                <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                  <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Social interaction</h2>
                  <p className="leading-relaxed text-base mb-4">Have a virtual interaction with your friends. Play with them and get those gains!</p>
                </div>
              </div>
            </div>
          </section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
              <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
                <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">Master Cleanse Reliac Heirloom</h1>
              </div>
              <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
              <Link to="/join"><a href="">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">Have fun &amp;</span>
                      <span className="title-font font-medium">Join a Room</span>
                    </span>
                  </button>
                </a></Link>
                <Link to="/create"><a href="">
                  <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <span className="ml-4 flex items-start flex-col leading-none">
                      <span className="text-xs text-gray-600 mb-1">Start the fun!</span>
                      <span className="title-font font-medium">Create A Room</span>
                    </span>
                  </button>
                </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
    </div>
            
    
    )
}

export default Home
