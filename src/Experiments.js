import lavalamp from './Images/lavalamppic.png';
import volcano from './Images/volcanopic.png';
import snowglobe from './Images/snowglobepic.png';
import elephantpaste from './Images/elephantpastepic.png';
import crystaltree from './Images/crystalpic.png';
import ghostbubbles from './Images/ghostbubblespic.png';

const Experiments = () => {
    return (
        <div className="home">
             <div className = "pageheaderbackground">
                <p className = "hometext">Experiments</p>
            </div>

            <div className = "experimentRectangle">
              
              <div className = "cardsGroup">
                    <div className = "card">
                        <img className = "cardimage" src=  {lavalamp} alt="Lava Lamp Picture"/>
                        <p className = "cardHeading">Lava Lamp Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $25</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a  href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <div className = "card">
                        <img className = "cardimage" src=  {volcano} alt="Volcano Eruption Picture"/>
                        <p className = "cardHeading">Volcano Eruption Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $50</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <div className = "card">
                        <img className = "cardimage" src=  {elephantpaste} alt="Explosive Foam Picture"/>
                        <p className = "cardHeading">Explosive Foam Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $20</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
              </div>

              <div className = "cardsGroup">
                    <div className = "card">
                        <img className = "cardimage" src=  {snowglobe} alt="Snow Globe Picture"/>
                        <p className = "cardHeading">Snow Globe Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $75</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <div className = "card">
                        <img className = "cardimage" src=  {crystaltree} alt="Crystal Tree Picture"/>
                        <p className = "cardHeading">Crystal Tree Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $10</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <div className = "card">
                        <img className = "cardimage" src=  {ghostbubbles} alt="Ghost Bubbles Picture"/>
                        <p className = "cardHeading">Ghost Bubbles Experiment</p>
                        <p className = "cardHeading">Price of Lab Kit: $90</p>
                        <p className = "cardText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>

                        <div className = "buttonsection">  
                            <button className = "watchdemobutton">
                                <a href="/Demos.js" className = "learnMoreLink">Watch Demo</a>
                            </button>
                        </div>
                    </div>
              </div>

              <div className = "buttonsection">  
                        <button className = "learnmorebutton">
                            <a  href="/BuyLabKit.js" className = "learnMoreLink">Buy Lab Kit</a>
                        </button>
               </div>

                

            </div>




        </div>
      );
}
 
export default Experiments;