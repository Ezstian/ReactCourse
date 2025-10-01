import profilePics from './Pictures/pfp.jpg';
function Card(){
    return (

        <div className="card">
            <img src={profilePics} alt="pfp"></img>
            <h2>BroCode</h2>
            <p>IiE</p>
        </div>
    );
}
export default Card;