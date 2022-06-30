const  BuyLabKit = () => {
    return (  
        <div className="home">
            <div className = "pageheaderbackground">
                <p className = "hometext">Buy Lab Kit</p>
            </div>
            <div className = "bigRectangle">
                <p className = "lefttext">Step 1: Enter your Personal Information</p>

                <p className = "lefttext">First Name:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Last Name:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Email:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Phone #:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Address:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Step 2: Enter your Credit Card Information</p>

                <p className = "lefttext">Credit Card Number:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">CVV:</p>
                <input type="text" class="textbox"></input>

                <p className = "lefttext">Step 3: Select Lab Kit(s):</p>

                <div class = "checkbox">
                    <div className = "option">
                        <input className = "checkboxparameters" type="checkbox" id="1" name="1" value="1"/>
                        <label className = "labeltext" for="1">Lava Lamp Experiment Lab Kit: $25</label>

                    </div>

                    <br></br>

                    <div className = "option">
                        <input  className = "checkboxparameters" type="checkbox" id="2" name="2" value="2"/>
                        <label className = "labeltext" for="2">Volcano Eruption Experiment Lab Kit: $50</label>

                    </div>

                    <br></br>

                    <div className = "option">
                        <input className = "checkboxparameters" type="checkbox" id="3" name="3" value="3"/>
                        <label className = "labeltext" for="3">Explosive Foam Experiment Lab Kit: $20</label>
                    </div>

                    <br></br>

                    <div className = "option">
                        <input className = "checkboxparameters" type="checkbox" id="4" name="4" value="4"/>
                        <label className = "labeltext" for="4">Snow Globe Experiment Lab Kit: $75</label>
                    </div>

                    <br></br>

                    <div className = "option">
                        <input className = "checkboxparameters" type="checkbox" id="5" name="5" value="5"/>
                        <label className = "labeltext" for="5">Crystal Tree Experiment Lab Kit: $10</label>
                    </div>

                    <br></br>

                    <div className = "option">
                        <input className = "checkboxparameters" type="checkbox" id="6" name="6" value="6"/>
                        <label className = "labeltext" for="6">Ghost Bubbles Experiment Lab Kit: $90</label>
                    </div>   
                    
                </div>

                <div className = "buttonsection">  
                        <button className = "learnmorebutton">
                            <a href="/ConfirmationPage.js" className = "learnMoreLink">Submit</a>
                        </button>
                </div>
            </div>

        </div>
    );
}
 
export default  BuyLabKit;