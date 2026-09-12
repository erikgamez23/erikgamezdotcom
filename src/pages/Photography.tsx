import lighthouse from '../assets/lighthouse.jpeg'
import sepButterfly from '../assets/sepbutteryfly.jpg'
import waterman from '../assets/waterman.jpeg'
import train from '../assets/train.jpg'
import pinkflower from '../assets/pinkflower.jpeg'

import '../App.css'

const Photography = () => {
  return (
    <>
      <div>
        <h1> Fujifilm X-T30iii w/ XF 1:3.5-4.8 R LM OIS 55-200mm </h1>
        <img src={lighthouse} className="leadPhoto" alt="Lighthouse" />
        <img src={waterman} className="leadPhoto" alt="man near lake" />
        <img src={sepButterfly} className="leadPhoto" alt="butterfly" />
        <img src={train} className="leadPhoto" alt="Pink Line Chicago Train" />
        <img src={pinkflower} className="leadPhoto" alt="Pink flower with vivid blue background" />
      </div>
    </>
  )
};

export default Photography
