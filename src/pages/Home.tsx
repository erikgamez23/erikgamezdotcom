import erikPhoto from '/erik.png'
import Section from '../components/Section'
import erikMnt from '/erikmountain.jpg'
import '../App.css'

const Home = () => {
    return (
        <>
        <div>
            <img src={erikMnt} className="erikPhoto" alt="Erik Gamez" />
        </div>
        <h1> Hey, I'm Erik! Get to know me a lil bit </h1>
        <Section title="Who am I?" body="I'm based in Chicago. I like taking pictures on my Fuji, and eating all foods. I'm a software engineer specializing in iOS development, and I love tinkering with my computers at home! I play video games mostly on PC, but I promise I am also actively outdoors touching grass and riding my bike around the city." imageSrc={erikPhoto} side="left" />
        {/* <Section title="Photography" body="My primary camera is a Fujifilm X-T30iii using an XF 55-200mm lens, and the nifty Ricoh GRIV. I have examples of my work in the Photography section, with most of my favorite pictures being candid street photography. I am still fairly new to composition and color science, but it is probably my favorite hobby based on the amount of times I pull them out in public."/> */}
      </>
    )
};
export default Home