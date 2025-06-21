import { useEffect, useRef, useState } from "react";

const Header = () => {

  const headerRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     console.log(window.scrollY);
  //     if (window.scrollY > 100) {
  //       headerRef.current.style.background = "#0c1524";
  //       headerRef.current.style.padding = "20px 0";
  //       headerRef.current.style.margin = "0";
  //     } else {
  //       headerRef.current.style.background = "transparent";
  //       headerRef.current.style.padding = "60px 0";
  //     };
  //   });
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
        headerRef.current.style.marginTop = "0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "60px 0";
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [links, setLinks] = useState(["Features", "Team", "Signin"]);

  return (
    <header
      ref={headerRef}
      className="mt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-[0] flex-col sm:flex-row">
        <a href="/">
          <img src="./src/assets/images/logo.svg" alt="LOGO" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {
              links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLocaleLowerCase()}`}
                    className="
                    text-white
                    opacity-[0.9]
                    hover:opacity-[1]
                    hover:underline
                    transition-opacity
                    duration-200
                  "
                  >
                    {link}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;