import RightCard from "@/components/RightCard";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <main className="headerHero">
        <Header />
        <Hero />
      </main>
      <div className="content-card">
        <RightCard
          id={4}
          image="/images/hiker.png"
          logo="Get Started"
          title="What level of hiker are you?"
          description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        />
        <RightCard
          id={1}
          image="/images/hiking.png"
          logo="Hiking Essentials"
          title="Picking the right Hiking Gear!"
          description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        />

        <RightCard
          id={3}
          image="/images/timing.png"
          logo="where you go is the key"
          title="Understand Your Map & Timing"
          description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        />
      </div>
    </div>
  );
}

export default Home;
