import Button from '../components/Button.jsx';

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col relative bg-cover bg-center"
      id="home"
      style={{ backgroundImage: "url('/assets/herobg.jpg')" }}
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 text-white text-center">
        <p className="sm:text-3xl text-xl font-medium font-generalsans">
          Hi, I am Godspower <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient"> I BUIDL Cool Stuff</p>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
