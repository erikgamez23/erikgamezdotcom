import leadPhoto from '../assets/erik.jpg'
import butterfly from '../assets/butterfly.jpeg'
import erikMnt from '../assets/erikmountain.jpg'
import Section from '../components/Section'

import '../App.css'

const Home = () => {
    return (
        <>
            <img src={erikMnt} className="leadPhoto" alt="Erik Gamez" />

            <h1> Hey, I'm Erik! </h1>

            <Section
                title="Who am I?"
                imageAlt='erik cooking'
                imageSrc={leadPhoto}
                side="left"
                body="I'm based in Chicago. I like taking pictures on my Fuji, and eating all kinds of food! I'm a software engineer specializing in iOS development, and I love tinkering with my computers at home! I love video games, but I am also frequently active lifting weights, walking to nearby restaurants, and riding my bike around the city."
            />

            <Section
                title="Software Development"
                imageAlt='pretty flower in bloom'
                body="I am a full-time iOS Software Engineer! While I truly started 
            my career working on the flagship iOS Target app, I am currently delivering 
            engaging Scores experiences to the Fanatics FanApp that is also one of the 
            most popular sports apps in the App Store!"
            />

            <Section
                title="Photography"
                imageAlt='butterfly on finger'
                imageSrc={butterfly}
                side="right"
                body="My primary camera is a Fujifilm X-T30iii using an XF 55-200mm lens and the nifty, tiny, and surprisingly powerful Ricoh GRIV. I have examples of my work in the Photography section, with most of my favorite pictures being candid street photography. I am still fairly new to composition and color science, but it is probably my favorite hobby based on the amount of times I pull them out in public."
            />
        </>
    )
};
export default Home