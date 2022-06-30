import lavaLamp from './Images/lavaLamp.png';

const Home = () => {
    const handleClick = () =>{
        console.log('hello, ninjas');
    }
    const handleClickAgain = (name) =>{
        console.log('hello'+ name);

    }
    return (  
        <div className="home">
            <img className = "lavalampimage" src= {lavaLamp} alt="Image of Lava Lamp"/>

            <div className = "divisionOne">
                <p className = "hometext">Take A Look At Our Science Experiments!</p>
            </div>


            <div className = "ourmissiondivision">
                <p className = "hometext">Our Mission</p>
            </div>

            <div className = "textdivision">
                <p className = "smallerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.</p>
                <div className = "buttonsection">  
                    <button className = "learnmorebutton">
                        <a href="/AboutUs.js" className = "learnMoreLink">Learn More</a>
                    </button>
                </div>
                
            </div>

            

            

        </div>
    );
}
 
export default Home;