import lighthouse from '../assets/lighthouse.jpeg'
import '../App.css'

const Photography = () => {
    return (
      <>
        <h1> Stay on the lookout for more of my shots </h1>
        <h2> All taken on a Fujifilm X-T30iii with the XF 1:3.5-4.8 R LM OIS 55-200mm lens </h2>

        <div>
          <img src={lighthouse} className="leadPhoto" alt="Erik Gamez" />
        </div>
      </>
    )
};

export default Photography
