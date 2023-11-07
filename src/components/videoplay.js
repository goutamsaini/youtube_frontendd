
import "./videoplay.css";
import youtubeicon from './logo/youtube.png'
import mic from './logo/mic.png'
import userlogo from './logo/user.png'
import bellicon from './logo/bellicon.png'
import uploadvideo from './logo/uplodevideo.png'
import homeicon from './logo/home.png'
import share from './logo/share.png'
import sub from './logo/subs.png'
import like from './logo/like.png'
import threeline from './logo/threeline.png'
import tseries from './logo/tseries.png'
import aam from './logo/aam.jpg'
import check from './logo/check.jpg'
import devil from './logo/devil.jpg'
import dope from './logo/dope.jpg'
import gabber from './logo/gabber.jpg'
import photo from './logo/photo.jpg'
const videoplay = () => {
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
                            <img src={userlogo} class="user-logo"></img>
                            <img src={uploadvideo} class="uploadvideo" />
                            <img src={bellicon} class="bellicon"></img>
                        </div>
                    </div>
                    <div class="body2">
                        <div class="body21">
                            <div class="song"></div><iframe class="kakasong" width="560" height="315" src="https://www.youtube.com/embed/6GDnXKqHTzk?si=QginpHX1fbJQRGWX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div class="body2tital"><b>KAKA - Suit (Full Video) - Kaka Katil haseena song - Kaka new song - Kaka all Song - kaka shape song</b> 10 M views . 1 years ago</div>
                            <div class="body2logo">
                                <div class="body2l"><img src={tseries} class="logov2"></img></div>
                                <div class="body2cn"><b>T-Series</b><br></br>1.3M subscribers</div>
                                <div class="body2sub">subscribe</div>
                                <div class="body2like"><img src={like} class="body2likei"></img></div>
                                <div class="body2share"><img src={share} class="sharei"></img></div>
                                <div class="body2threedot"></div>

                            </div>
                            <div class="body2dis">10 M views in 1 years agoKAKA - Suit (Full Video) - Kaka Katil haseena song - Kaka new song - Kaka all Song - kaka shape song .... more </div>
                        </div>
                        <div class="body22">
                            <div class="smallvideo">
                                <div class="sv1"><a href="https://www.youtube.com/embed/muds1gFUTN8?si=xO3E6iN4yosjbQ65"><img src={aam} class="sv1aam"></img></a></div>
                                <div class="svt1"><b>Aam Jahe Munde | Parmish Verma feat Pardhaan | Desi Crew | Laddi Chahal</b><br></br>49 M views . 3 months ago</div>
                            </div>
                            <div class="smallvideo">
                                <div class="sv2"><a href="https://www.youtube.com/embed/RiZL2j5mIPw?si=E00emYONIJkKkSt3"><img src={check} class="sv2cheak"></img></a></div>
                                <div class="svt1"><b>Parmish Verma Ft. Paradox - Check It Out (Official Music Video)</b><br></br>125 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv3"><a href="https://www.youtube.com/embed/C4mBfkNVnEk?si=LAa2wTFKSNnY6X07"><img src={devil} class="sv3devil"></img></a></div>
                                <div class="svt1"><b>DEVIL Lyrical Video | PBX 1 | Sidhu Moose Wala | Byg Byrd | Latest Punjabi Songs 2018</b><br></br>256 M views . 6 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv4"><a href="https://www.youtube.com/embed/d3fWMXLSOI0?si=K9M8w56xligAPzTt" ><img src={photo} class="sv4photo"></img></a></div>
                                <div class="svt1"><b>Photo - Singga (Official Video) | Ft. Nikki Kaur | Latest Punjabi Song 2023 |</b><br></br>115 M views . 9 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv5"><a href="https://www.youtube.com/embed/afWNKI8g6is?si=_g6Yo87LnN0dBEPK"><img src={gabber} class="sv5gabber"></img></a></div>
                                <div class="svt1"><b>Gabbar Bhi Nachega (Official Video) | Masoom Sharma, Ashu T | Nidhi Sharma |</b><br></br>21 M views . 1 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv6"><a href="https://www.youtube.com/embed/dHsV56I1GwE?si=8qGAm9sBC1PMjjaE" ><img src={dope} class="sv6dope"></img></a></div>
                                <div class="svt1"><b>Dope Shope (Full Song ) | Yo Yo Honey Singh | Deep Money | | Latest Punjabi Song</b><br></br>70 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv1"><a href="https://www.youtube.com/embed/muds1gFUTN8?si=xO3E6iN4yosjbQ65"><img src={aam} class="sv1aam"></img></a></div>
                                <div class="svt1"><b>Aam Jahe Munde | Parmish Verma feat Pardhaan | Desi Crew | Laddi Chahal</b><br></br>49 M views . 3 months ago</div>
                            </div>
                            <div class="smallvideo">
                                <div class="sv2"><a href="https://www.youtube.com/embed/RiZL2j5mIPw?si=E00emYONIJkKkSt3"><img src={check} class="sv2cheak"></img></a></div>
                                <div class="svt1"><b>Parmish Verma Ft. Paradox - Check It Out (Official Music Video)</b><br></br>125 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv3"><a href="https://www.youtube.com/embed/C4mBfkNVnEk?si=LAa2wTFKSNnY6X07"><img src={devil} class="sv3devil"></img></a></div>
                                <div class="svt1"><b>DEVIL Lyrical Video | PBX 1 | Sidhu Moose Wala | Byg Byrd | Latest Punjabi Songs 2018</b><br></br>256 M views . 6 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv4"><a href="https://www.youtube.com/embed/d3fWMXLSOI0?si=K9M8w56xligAPzTt" ><img src={photo} class="sv4photo"></img></a></div>
                                <div class="svt1"><b>Photo - Singga (Official Video) | Ft. Nikki Kaur | Latest Punjabi Song 2023 |</b><br></br>115 M views . 9 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv5"><a href="https://www.youtube.com/embed/afWNKI8g6is?si=_g6Yo87LnN0dBEPK"><img src={gabber} class="sv5gabber"></img></a></div>
                                <div class="svt1"><b>Gabbar Bhi Nachega (Official Video) | Masoom Sharma, Ashu T | Nidhi Sharma |</b><br></br>21 M views . 1 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv6"><a href="https://www.youtube.com/embed/dHsV56I1GwE?si=8qGAm9sBC1PMjjaE" ><img src={dope} class="sv6dope"></img></a></div>
                                <div class="svt1"><b>Dope Shope (Full Song ) | Yo Yo Honey Singh | Deep Money | | Latest Punjabi Song</b><br></br>70 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv1"><a href="https://www.youtube.com/embed/muds1gFUTN8?si=xO3E6iN4yosjbQ65"><img src={aam} class="sv1aam"></img></a></div>
                                <div class="svt1"><b>Aam Jahe Munde | Parmish Verma feat Pardhaan | Desi Crew | Laddi Chahal</b><br></br>49 M views . 3 months ago</div>
                            </div>
                            <div class="smallvideo">
                                <div class="sv2"><a href="https://www.youtube.com/embed/RiZL2j5mIPw?si=E00emYONIJkKkSt3"><img src={check} class="sv2cheak"></img></a></div>
                                <div class="svt1"><b>Parmish Verma Ft. Paradox - Check It Out (Official Music Video)</b><br></br>125 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv3"><a href="https://www.youtube.com/embed/C4mBfkNVnEk?si=LAa2wTFKSNnY6X07"><img src={devil} class="sv3devil"></img></a></div>
                                <div class="svt1"><b>DEVIL Lyrical Video | PBX 1 | Sidhu Moose Wala | Byg Byrd | Latest Punjabi Songs 2018</b><br></br>256 M views . 6 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv4"><a href="https://www.youtube.com/embed/d3fWMXLSOI0?si=K9M8w56xligAPzTt" ><img src={photo} class="sv4photo"></img></a></div>
                                <div class="svt1"><b>Photo - Singga (Official Video) | Ft. Nikki Kaur | Latest Punjabi Song 2023 |</b><br></br>115 M views . 9 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv5"><a href="https://www.youtube.com/embed/afWNKI8g6is?si=_g6Yo87LnN0dBEPK"><img src={gabber} class="sv5gabber"></img></a></div>
                                <div class="svt1"><b>Gabbar Bhi Nachega (Official Video) | Masoom Sharma, Ashu T | Nidhi Sharma |</b><br></br>21 M views . 1 years ago</div>

                            </div>
                            <div class="smallvideo">
                                <div class="sv6"><a href="https://www.youtube.com/embed/dHsV56I1GwE?si=8qGAm9sBC1PMjjaE" ><img src={dope} class="sv6dope"></img></a></div>
                                <div class="svt1"><b>Dope Shope (Full Song ) | Yo Yo Honey Singh | Deep Money | | Latest Punjabi Song</b><br></br>70 M views . 5 years ago</div>

                            </div>
                            <div class="smallvideo1"></div>
                            <div class="smallvideo2"></div>
                            <div class="smallvideo3"></div>
                            <div class="smallvideo4"></div>
                            <div class="smallvideo5"></div>
                            <div class="smallvideo6"></div>
                        </div>

                    </div>
                </div>

            </body>
        </html>
    )
};

export default videoplay;