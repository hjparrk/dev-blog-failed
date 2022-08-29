import Footer from "./footer/footer";
import NavigationBar from "./navbar/navigation-bar";

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
