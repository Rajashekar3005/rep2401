import React from 'react'

function Csk() {
  return (
    <div className='body'>
    <div className='container'>
   <div className='logo'>
     <img src="https://i.postimg.cc/tg8t9SXW/ipl.png"></img>
   </div>
   <div className="background">
     <img src="https://i.postimg.cc/WzG7WGcr/csk3.png"></img>
   </div>
   <div className="heading">
     <h1 style={{color:'gold'}}>Chennai Super Kings</h1>
     <p className="para">    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nam nesciunt cum error officia, perferendis laborum. Sunt aperiam sit, tempore voluptatem assumenda quam nam architecto consectetur veniam natus veritatis corrupti quod minima quo. Atque porro corrupti praesentium culpa tempore? Ipsam.</p>
    <button>WATCH NOW</button>      
   </div>
   <div className="image">
     <img style={{width:"450px", height:"450px"}}  src="https://i.postimg.cc/kMKwgmR4/csk.png"></img>
   </div>
   <div className="navbar">
     <ul>
       <li>Home</li>
       <li>Team</li>
       <li>Performance</li>
       <li>Rank</li>
     </ul>
   </div>
   <div className="emptyCsk">
   </div>

   <a href='./Rcb.js'>
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

export default Csk
