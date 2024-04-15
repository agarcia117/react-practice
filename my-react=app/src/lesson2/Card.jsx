import profilePic from '../assets/Dragon_ball.jpg'

function Card() {
  return (
    <div className="card">
        <img className='card-image' src={profilePic} alt="profile picture" />
        <h2 className='card-title'>Bruh</h2>
        <p className='card-text'>Practicing for jobs and play games</p>
    </div>
  );
}

export default Card