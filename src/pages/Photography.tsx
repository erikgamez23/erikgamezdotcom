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
        <h1> Fujifilm X-T30iii w/ XF55-200mm </h1>
        <img src={lighthouse} className="leadPhoto" alt="Lighthouse" loading="lazy" />
        <img src={pinkflower} className="leadPhoto" alt="Pink flower with vivid blue background" loading="lazy" />
        <img src={sepButterfly} className="leadPhoto" alt="butterfly" loading="lazy" />
        <img src={train} className="leadPhoto" alt="Pink Line Chicago Train" loading="lazy" />
        <img src={waterman} className="leadPhoto" alt="man near lake" loading="lazy" />
      </div>
    </>
  )
};

export default Photography
