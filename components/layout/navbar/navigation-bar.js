import HomeLogo from "./home-logo";
import Links from "./links";

const NavigationBar = () => {
  return (
    <div className="flex flex-row justify-between mb-20 p-10 border-b-2 border-black">
      <HomeLogo />
      <Links />
    </div>
  );
};

export default NavigationBar;
