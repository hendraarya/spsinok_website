import Spsilogo from "../assets/images/logospsi.png";
const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-r from-white to-gray-900 px-6">
      <div className="container">
        <div className="flex flex-wrap">
          <img src={Spsilogo} alt="SPSI" className="w-16 md:w-96" />
          <h3 className="font-bold text-2xl from-neutral-800 py-6">
            PUK <span className="text-">SPSI NOK</span>
          </h3>
        </div>
      </div>
    </nav>
  );
};
export default NavigationBar;
