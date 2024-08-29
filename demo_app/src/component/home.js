import React from 'react'
import './home.css' 

 function home () {
   return (
    <div className='body'>
      <div className='header'>
      <h1> welcome to Primrose hair Salon</h1>
      <h2>
        YOUR BEAUTE IS IS OUR RESPONSIBILITY
      </h2>
      </div>
      <span className='main'>
        hair cut: R50
        <br/>
        hair brush : R40
      </span>
      <span className='main'>
        Straight back : R180
        <br/>
        Straight-up : R230
        <br/>
        knotless : R300
        <br/>
        box braids : R300

      </span>
      <div>
      <img src="https://i.ytimg.com/vi/h7spCXYLndY/maxresdefault.jpg" width={"300px"}>
      
      </img>
      <img src="https://media.allure.com/photos/64dd1bf4aec5f309af885a66/master/w_1600,c_limit/jordynwoodsgoddessbraids.jpg" width={"300px"} >
      </img>
      <img src="https://wordpress.styleseat.com/wp-content/uploads/2022/05/07-fulani-braids.jpg" width={"300px"}></img>
        <img src=" https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/images/optimized/rev-b70ebdf/www.fashionbeans.com/wp-content/uploads/2023/08/smartcutzbarbers_manwithnumber2andskinfadehaircut-696x445.jpg" width={"300px"}></img>
        

      </div>
      </div>
      
   )
   // return <h1> Hello PRIMY</h1> // just functions
 }

//const home = () => <h1>Hello PRIMY</h1>
export default home