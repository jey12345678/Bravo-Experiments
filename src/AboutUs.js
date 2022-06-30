import kidspic from './Images/kidspic.png';
const AboutUs = () => {
    return (
        <div className="home">
            <div className = "pageheaderbackground">
                <p className = "hometext">About Us</p>
            </div>
            <div className = "aboutUsRectangle">
                <div className = "aboutUsContainer">
                    <img className = "aboutUsImage" src=  {kidspic} alt="Kids Experimenting Picture"/>
                    <p className = "aboutUsText">Ac auctor augue mauris augue neque gravida in. Nam libero justo laoreet sit. Ipsum nunc aliquet bibendum enim facilisis gravida. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Vitae justo eget magna fermentum iaculis eu. Diam in arcu cursus euismod quis viverra nibh. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Parturient montes nascetur ridiculus mus. Dignissim suspendisse in est ante in nibh mauris cursus mattis. </p>
                </div>
            </div>

        </div>

     );

}
export default AboutUs;