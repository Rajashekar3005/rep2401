import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  return (
    <div>
       <div className="APP">
      <h1 className="rcb">Royal Challengers Bangalore</h1> 
      <img className="logo" src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png"></img>
      <p>
          Royal Challengers Bangalore (often abbreviated as RCB) are a
          professional franchise cricket team based in Bengaluru, Karnataka,
          that plays in the Indian Premier League (IPL). It was founded in 2008
          by United Spirits and named after the company's liquor brand Royal
          Challenge. The Royal Challengers have not won the IPL but finished
          runner-up on three occasions between 2009 and 2016. The team holds the
          records of both the highest and the lowest totals in the IPL – 263/5
          and 49 respectively.
      </p>
      <h2>Batters</h2>
      <div className="Batters">
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/2.png" className='iplbatting'></img>
      <h3>VIRAT KOHLI</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/94.png" className='iplbatting'></img>
      <h3>FAF DU PLESIS</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/597.png" className='iplbatting'></img>
      <h3>RAJAT PATIDAR</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/13.png" className='iplbatting'></img>
      <h3>DINESH KARTHIK</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/1941.png" className='iplbatting'></img>
      <h3>WILL JACKS</h3>
      </div>
      <h2>All Rounders</h2>
      <div className="Allrounders">
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/28.png" className='iplbatting'></img>
      <h3>GLEEN MAXWELL</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/550.png" className='iplbatting'></img>
      <h3>CAMERON GREEN</h3>
      </div>
      <h2>Bowlers</h2>
      <div className="Bowlers">
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/63.png" className='iplbatting'></img>
      <h3>MOHAMMED SIRAJ</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/978.png" className='iplbatting'></img>
      <h3>YASH DAYAL</h3>
      <img src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/69.png" className='iplbatting'></img>
      <h3>LOKIE FURGUSON</h3>
      </div>
      <hr></hr>





      <div className="icc">
        <div >
       <button className='team'>Home</button>
       <Link to="/India"><button className='team'>India</button></Link>
      <Link to="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166/australia-squad-1431715/series-squads"> <button className='team'>Australia</button></Link>
       <button className='team'> Pakisthan</button>
       <button className='team'>South Africa</button>
       <button className='team'>England</button>
       </div>
      <img src="./images/t20.png" className="t20logo"></img>

      <h1 className="mens"><u>ICC Men's T20 World Cup.2024</u></h1>
      <br></br>
      <div className="mens2">
      <h1 >ICC Men's T20 World Cup 2024 - Team India,</h1>
      <h1 >Australia,   Ireland, Nepal and more squads </h1>
      <h1>Anounced</h1><br></br>
      <Link to="https://www.bing.com/videos/riverview/relatedvideo?&q=t20+world+cup&&mid=17B46F8DFA5017C4D95517B46F8DFA5017C4D955&&FORM=VRDGAR"><button style={{fontSize:"2rem",backgroundColor:"red"}}>Watch Now</button></Link>
      </div>
      






      </div>
    </div>
    </div>
  )
}

export default Team
