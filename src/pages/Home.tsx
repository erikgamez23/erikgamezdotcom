import leadPhoto from '../assets/erik.jpg'
import butterfly from '../assets/butterfly.jpeg'
import erikMnt from '../assets/erikmountain.jpg'
// import flower from '../assets/pinkflower.jpeg'
import Section from '../components/Section'

import '../App.css'

const Home = () => {
    return (
        <>
        <div>
            <img src={erikMnt} className="leadPhoto" alt="Erik Gamez" />
        </div>
        <h1> Hey, I'm Erik! </h1>
        <Section title="Who am I?" imageAlt='erik cooking' imageSrc={leadPhoto} side="left" body="I'm based in Chicago. I like taking pictures on my Fuji, and eating all kinds of food! I'm a software engineer specializing in iOS development, and I love tinkering with my computers at home! I love video games, but I am also frequently active lifting weights, walking to nearby restaurants, and riding my bike around the city."/>
        {/* <Section title="iOS Development" imageAlt='butterfly on finger' imageSrc={flower} side="right" body="My primary camera is a Fujifilm X-T30iii using an XF 55-200mm lens and the nifty, tiny, and surprisingly powerful Ricoh GRIV. I have examples of my work in the Photography section, with most of my favorite pictures being candid street photography. I am still fairly new to composition and color science, but it is probably my favorite hobby based on the amount of times I pull them out in public."/> */}
        <Section title="Photography" imageAlt='butterfly on finger' imageSrc={butterfly} side="left" body="My primary camera is a Fujifilm X-T30iii using an XF 55-200mm lens and the nifty, tiny, and surprisingly powerful Ricoh GRIV. I have examples of my work in the Photography section, with most of my favorite pictures being candid street photography. I am still fairly new to composition and color science, but it is probably my favorite hobby based on the amount of times I pull them out in public."/>
    </>
    )
};
export default Home