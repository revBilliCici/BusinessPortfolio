import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { TailSpin } from "react-loader-spinner";
import {
  SignIn,
  SignUp,
  Header,
  Services,
  HowItWorks,
  Portfolio,
  Testimonials,
  Blogs,
  Footer,
} from "./containers";
import { Navbar, CTA } from "./components";
import { FaArrowUp } from "react-icons/fa";

const users = [
  {
    id: 1,
    firstName: "Jameel",
    lastName: "Ahmed",
    userName: "jameel",
    email: "Jameel99@gmail.com",
    password: "test1234",
    dateofBirth: "25-1-1999",
    profilePicture: undefined,
  },
];

const App = () => {
  const [Loaded, setLoaded] = useState(false);
  const [Token, setToken] = useState(undefined);
  const [NavbarName, setNavbarName] = useState("");
  const [isScrolledBTT, setisScrolledBTT] = useState(false);
  const [isScrolledNav, setisScrolledNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = () => {
    if (scrollY > 300) {
      setisScrolledBTT(true);
    } else {
      setisScrolledBTT(false);
    }

    if (scrollY > 5) {
      setisScrolledNav(true);
    } else {
      setisScrolledNav(false);
    }
  };

  // Already Loggedin Check
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    let isToken = localStorage.getItem("Token");
    let NavbarName = localStorage.getItem("Fullname");
    if (isToken) {
      setToken(isToken);
      setNavbarName(NavbarName);
    } else if (isToken == null) {
      setToken(undefined);
    }
  }, []);

  useEffect(() => {
    if (Token && location.pathname == "/login") {
      navigate("/");
    } else if (Token && location.pathname == "/register") {
      navigate("/");
    }
  });

  const handleSignUpSubmit = (user) => {
    users.forEach((u) => {
      if (user.userName != u.userName) {
        users.push({ id: users.length + 1, ...user });
        window.alert("User Registered");
        navigate("/login");
        return true;
      }
    });
    return false;
  };

  // Handle Sign In Form Submit
  const handleSigninSubmit = (username, password) => {
    let isUser = users.filter((user) => {
      if (username == user.userName && password == user.password) return user;
    });

    if (isUser != []) {
      let token = `Token${isUser[0].id}${isUser[0].userName}${isUser[0].firstName}${isUser[0].lastName}${isUser[0].dateofBirth}`;
      setToken(token);
      localStorage.setItem("Token", token);
      localStorage.setItem(
        "Fullname",
        `${isUser[0].firstName} ${isUser[0].lastName}`
      );
      setNavbarName(`${isUser[0].firstName} ${isUser[0].lastName}`);
    } else {
      window.alert("user not found")
      return;
    }
  };

  setTimeout(() => {
    setLoaded(true);
  }, 1000);
  return (
    <>
      {!Loaded ? (
        <div className="h-screen flex justify-center items-center">
          <TailSpin
            height="100"
            width="100"
            color="orange"
            ariaLabel="Loading"
          />
        </div>
      ) : (
        <div className="App__Container">
          <Navbar
            urlLocation={location.pathname}
            isLoggedIn={Token}
            NavName={NavbarName}
            isScrolled={isScrolledNav}
          />
          <div className={isScrolledNav ? "mt-52" : ""}></div>
          <Routes>
            <Route
              path="/register"
              element={<SignUp handleSignUpSubmit={handleSignUpSubmit} />}
            />
            <Route
              path="/login"
              element={<SignIn handleSigninSubmit={handleSigninSubmit} />}
            />
            <Route
              path="/"
              element={
                <div className="flex flex-col gap-24">
                  <Fade triggerOnce={true}>
                    <Header isScrolled={isScrolledNav} />
                  </Fade>
                  <Fade>
                    <Services />
                    <HowItWorks />
                    <Portfolio />
                    <Testimonials />
                    <Blogs />
                  </Fade>
                  <Zoom>
                    <CTA />
                    <Footer />
                  </Zoom>

                  {isScrolledBTT && (
                    <div
                      className="rounded-full p-5 bg-orange-500 w-fit cursor-pointer fixed bottom-10 right-10"
                      onClick={() => {
                        scrollTo(0, 0);
                      }}
                    >
                      <FaArrowUp />
                    </div>
                  )}
                </div>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
