import HeroImage from "./HeroImage"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
        <div data-aos="fade-up" className="w-full sm:w-4xl lg:6xl text-white p-10 mt-15 ">
           <h1 className="text-3xl sm:text-4xl tracking-wide  text-center lg:text-6xl text-stone-700">Fresh Brews, Great Food, Better Moments</h1>
        </div>
        <div className="w-full h-70"> 
            <HeroImage/>
        </div>
      <div data-aos="fade-down" className="w-full w-full sm:w-4xl lg:6xl">
           <p className="text-center px-10 mt-10 text-xs tracking-widest">Town Coffee brings together handcrafted beverages, comfort plates, and a warm café atmosphere designed for everyday moments. Whether you're stopping by for a quick coffee, settling in for work, or catching up with friends, we serve quality without the fuss. Explore our menu, order directly on WhatsApp, or book a table — your perfect café experience is just a tap away.</p>
        </div>
    </div>
  )
}

export default Hero