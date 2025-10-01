import profilePics from './Pictures/pfp.jpg';
function Card(){
    return (

        <div className="card">
            <img className="card-image" src={profilePics} alt="pfp"></img>
            <h2 className="card-title">BroCode</h2>
            <p className="card-text">IiE</p>
        </div>
    );
}
export default Card;