
import "./HomePage.css";
import youtubeicon from './logo/youtube.png'
import mic from './logo/mic.png'
import userlogo from './logo/user.png'
import bellicon from './logo/bellicon.png'
import uploadvideo from './logo/uplodevideo.png'
import homeicon from './logo/home.png'
import shorticon from './logo/shortslogo.png'
import sub from './logo/subs.png'
import lib from './logo/library.png'
import threeline from './logo/threeline.png'
import tseries from './logo/tseries.png'
import aam from './logo/aam.jpg'
import check from './logo/check.jpg'
import devil from './logo/devil.jpg'
import dope from './logo/dope.jpg'
import gabber from './logo/gabber.jpg'
import photo from './logo/photo.jpg'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    const [videos, setVideos] = useState([]);

    const fetchData = async () => {
      const data = await axios.get("http://localhost:3000/video");
      setVideos(data.data);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
   
     return (
        <html>
            <body>
                <div class="youtube">
                    <div class="header">
                        <div class="logo">
                            <div class="l1" ><img src={threeline} alt="Image Description" class="threeline" /></div>
                            <div class="l2"><img src={youtubeicon} alt="Image Description" class="logo-image" /></div>
                        </div>
                        <div class="search">
                            <input type="text" placeholder="    search" id="search"></input>
                            <div class="s1"></div>
                            <div class="s2"><img src={mic} alt="Image Description" class="mic-image"></img></div>
                        </div>
                        <div class="icon">
                            <img src={userlogo} class="user-logo">
                                <button className="signInButton" onClick={onSignIn}>SignIn</button>
                            </img>
                            <img src={uploadvideo} class="uploadvideo" />
                            <img src={bellicon} class="bellicon"></img></div>
                    </div>

                    <div class="body">

                        <div class="b1">
                            <div class="home">Home</div><img src={homeicon} class="homeicon"></img>
                            <div class="shorts">Shorts</div><img src={shorticon} class='shortsicon'></img>
                            <div class="subs">Subscription</div><img src={sub} class="sub"></img>
                            <div class="you">Library</div><img src={lib} class="lib"></img>
                        </div>




                        <div class="b2">
                            <div class="head">
                                <div class="h1" >All</div>
                                <div class="h2">Sports</div>
                                <div class="h3">Comedy</div>
                                <div class="h4">C++</div>
                                <div class="h5">HTML</div>
                                <div class="h6">Songs</div>
                                <div class="h7">Movies</div>
                                <div class="h8">Technical</div>
                                <div class="h9">Python</div>

                            </div>
                            <div class="b11">
                                <div class="c1">
                                    <div><a href="https://www.youtube.com/embed/muds1gFUTN8?si=xO3E6iN4yosjbQ65"><img src={aam} class="video1"></img></a></div>
                                    <div class="v1c">
                                        <div><img src={tseries} class="logov1"></img></div>
                                        <div class="tital1"><b>Aam Jahe Munde | Parmish Verma feat Pardhaan | Desi Crew | Laddi Chahal</b><br></br>49 M views . 3 months ago</div>
                                    </div>
                                    <div></div>
                                </div>
                                <div class="c2">
                                    <div><a href="https://www.youtube.com/embed/RiZL2j5mIPw?si=E00emYONIJkKkSt3"><img src={check} class="video2"></img></a></div>
                                    <div class="v2c">
                                        <div><img src={tseries} class="logov2"></img></div>
                                        <div class="tital2"  ><b>Parmish Verma Ft. Paradox - Check It Out (Official Music Video)</b><br></br>125 M views . 5 years ago</div>
                                    </div>
                                    <div></div>
                                </div>
                                <div class="c3">
                                    <div><a href="https://www.youtube.com/embed/C4mBfkNVnEk?si=LAa2wTFKSNnY6X07"><img src={devil} class="video3"></img></a></div>
                                    <div class="v3c">
                                        <div><img src={tseries} class="logov3"></img></div>
                                        <div class="tital3"><b>DEVIL Lyrical Video | PBX 1 | Sidhu Moose Wala | Byg Byrd | Latest Punjabi Songs 2018</b><br></br>256 M views . 6 years ago</div>
                                    </div>
                                    <div></div>
                                </div>

                            </div>
                            <div class="b12">
                                <div class="c4">
                                    <div><a href="https://www.youtube.com/embed/dHsV56I1GwE?si=8qGAm9sBC1PMjjaE" ><img src={dope} class="video4"></img></a></div>
                                    <div class="v4c">
                                        <div><img src={tseries} class="logov4"></img></div>
                                        <div class="tital4"><b>Dope Shope (Full Song ) | Yo Yo Honey Singh | Deep Money | | Latest Punjabi Song</b><br></br>70 M views . 5 years ago</div>
                                    </div>
                                    <div></div>
                                </div>
                                <div class="c5">
                                    <div><a href="https://www.youtube.com/embed/afWNKI8g6is?si=_g6Yo87LnN0dBEPK"><img src={gabber} class="video5"></img></a></div>
                                    <div class="v5c">
                                        <div><img src={tseries} class="logov5"></img></div>
                                        <div class="tital5"><b>Gabbar Bhi Nachega (Official Video) | Masoom Sharma, Ashu T | Nidhi Sharma |</b><br></br>21 M views . 1 years ago</div>
                                    </div>
                                    <div></div>
                                </div>
                                <div class="c6">
                                    <div><a href="https://www.youtube.com/embed/d3fWMXLSOI0?si=K9M8w56xligAPzTt" ><img src={photo} class="video6"></img></a></div>
                                    <div class="v6c">
                                        <div><img src={tseries} class="logov6"></img></div>
                                        <div class="tital6"><b>Photo - Singga (Official Video) | Ft. Nikki Kaur | Latest Punjabi Song 2023 |</b><br></br>115 M views . 9 years ago</div>
                                    </div>
                                    <div></div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </body>
        </html>
    )
};

export default HomePage;