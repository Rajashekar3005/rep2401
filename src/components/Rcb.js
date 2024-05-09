import React from 'react'
// import "./Style.css";
function Rcb() {
  return (
    <div className='body'>
         <div className='container'>
        <div className='logo'>
          <img src="https://i.postimg.cc/tg8t9SXW/ipl.png"></img>
        </div>
        <div className="background">
          <img src="https://i.postimg.cc/KYWQRc5K/csblogo.png"></img>
        </div>
        <div className="heading">
          <h1 className="head">Royal Challengers Bangalore</h1>
          <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
         <button>WATCH NOW</button>      
        </div>
        <div className="image">
          <img src="https://i.postimg.cc/FRjcNhCX/rcb-removebg-preview.png"></img>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Team</li>
            <li>Performance</li>
            <li>Rank</li>
          </ul>
        </div>
        <div className="empty">
        </div>

        <a  href='./Rcb.js'>
   <button className='btn'>RCB</button>
   </a>
       
        <a href='./Csk.js'>
        <button className='btn' >CSK</button>
        </a>
        <a href='./Mi.js'>
        <button className='btn'>MI</button>
        </a>
        <a href='./Srh.js'>
   <button className='btn'>SRH</button>
   </a>

        </div>
      

    </div>
  )
}

export default Rcb
