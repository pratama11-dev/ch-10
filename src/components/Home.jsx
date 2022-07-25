import React from 'react'
import "./StyleHome.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <>
      <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-style bd-navbar ">

        <a className="navbar-brand ml-5 px-5" href="/">
          Logo
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar4" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi" fill="currentColor"
            viewBox="0 0 16 16">
            <path fillRule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
            </path>
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbar4">

          <div className="navbar-nav ml-3">
            <a href="/" className="nav-item nav-link ml-5 px-4" id="home">
              HOME
            </a>
            <a href="/#" className="nav-item nav-link px-4" id="work">
              WORK
            </a>
            <a href="/#" className="nav-item nav-link px-4" id="contact">
              CONTACT
            </a>
            <a href="/#" className="nav-item nav-link px-4" id="about-us">
              ABOUT US
            </a>
            {user ? (
              <a href="/users" className="nav-item nav-link px-4" id="users">
                USERS LIST
              </a>
            ) : (
              "")
            }
          </div>

          <div className="collapse navbar-collapse d-flex flex-row-reverse" id="nav-right">
            <ul className="navbar-nav px-lg-2 mt-3 mt-lg-0 dropdown p-2 bd-highlight ">
              <li className="nav-item">
                <a className="nav-link dropdown-toggle " href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                SIGN UP
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  {user ? (
                    <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
                    ) : (<>
                      <li><a className="dropdown-item" href="/register">SIGN UP</a></li>
                      <li><a className="dropdown-item" href="/login">LOGIN</a></li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row row-cols-1 ml-1 header-info">
        <div className="col header-info-col">
          <h1 className="header-title-info text-center">Play Traditional Game</h1>
          <h3 className="mini-info text-center">Experience new tradition game play</h3>
          <a href="/games" className="btn btn-warning btn-lg header-info-button">
          Play NOW ||
          <i className="bi bi-dice-5"></i>
          </a>
        </div>
        <div className="col align-self-end story-scroll-down">
          <a href="#gallery" className="header-scroll-link-wrapper+">
            <p className="header-scroll-toggle">
              THE STORY
            </p>
            <i className="bi bi-caret-down story-scroll-down-img"></i>
          </a>
        </div>
      </div>
    </header>

    <section className="gallery" id="gallery">
      <div className="container">
        <div className="row ml-5 gallery-content">
          <div className="col-5  gl-left-side">
            <h3 className="gallery-mini-info">
              What's So Special ?
            </h3>
            <h1 className="gl-h1-info">
              THE GAMES
            </h1>
          </div>
          <div className="col-7  gl-right-side">
            <div id="Indicatordot" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#Indicatordot" data-bs-slide-to="0" className="active rounded-circle" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#Indicatordot" data-bs-slide-to="1" aria-label="Slide 2" className="rounded-circle"></button>
                <button type="button" data-bs-target="#Indicatordot" data-bs-slide-to="2" aria-label="Slide 3" className="rounded-circle"></button>
                <button type="button" data-bs-target="#Indicatordot" data-bs-slide-to="3" aria-label="Slide 4" className="rounded-circle"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="../../assets/img/slide-1.webp" className="d-block w-100" alt="slide 1" />
                </div>
                <div className="carousel-item " data-bs-interval="10000">
                  <img src="../../assets/img/slide-2.webp" className="d-block w-100" alt="slide 2" />
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <img src="../../assets/img/slide-3.webp" className="d-block w-100" alt="slide 3" />
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <img src="../../assets/img/slide-4.webp" className="d-block w-100" alt="slide 4" />
                </div>
              </div>
              <button className="carousel-control-prev icon-costum-left" type="button" data-bs-target="#Indicatordot" data-bs-slide="prev">
              <span className="carousel-control-prev-icon " aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next icon-costum-right" type="button" data-bs-target="#Indicatordot" data-bs-slide="next">
              <span className="carousel-control-next-icon " aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features ">
      <div className="container">
        <div className="row justify-content-end features-contents">
          <div className="col-4 features-info mb-2">
            <h3 className="features-info-title">
              What's so special?
            </h3>
            <h1 className="features-info-content">
              FEATURES
            </h1>
          </div>
        </div>
        <div className="row justify-content-end features-timeline">
          <div className="col-5 features-timeline-content">
            <div className="row timeline">
              <div className="col-3 pt-2 mt-1 timeline-dot">
                <img src="../../assets/img/Ellipse.svg" alt=""/>
              </div>
              <div className="col tl-info">
                <h2 className="tl-info-title">
                  TRADITIONAL GAMES
                </h2>
                <p className="tl-info-content">
                  If you miss your childhood, we provide many traditional games here
                </p>
              </div>
            </div>
            <div className="row timeline">
              <div className="col-3 pt-2 mt-1 timeline-dot">
                <img src="../../assets/img/Ellipse-transparent.svg" alt="" />
              </div>
              <div className="col tl-info">
                <h2 className="tl-info-title">
                  GAME SUIT
                </h2>
              </div>
            </div>
            <div className="row timeline">
              <div className="col-3 pt-2 mt-1 timeline-dot">
                <img src="../../assets/img/Ellipse-transparent.svg" alt="" />
              </div>
              <div className="col tl-info">
                <h2 className="tl-info-title">
                  To be decide
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sysreq">
      <div className="container d-flex justify-content-between">
        <div className="req-info-top">
          <h5>Can My Computer Run This Game?</h5>
        </div>
        <div className="row">
          <div className="col">
            <div className="display-2 text-left system__req mb-5">System Requirements</div>

            <table className="table table-bordered table-content-sys">
              <tbody>
                <tr>
                  <td>
                    <h2 className="requirements-info">OS:</h2>
                    <p className="requirements-info-content">
                      Windows 7 64-bit only<br />(No OSX support at this time)
                    </p>
                  </td>
                  <td>
                    <h2 className="requirements-info">Processor:</h2>
                    <p className="requirements-info-content">Intel Core 2 Duo @2.4GHz or AMD Athlon X2 @ 2.8GHz</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2 className="requirements-info">Memory:</h2>
                    <p className="requirements-info-content">4 GB RAM</p>
                  </td>
                  <td>
                    <h2 className="requirements-info">Storage:</h2>
                    <p className="requirements-info-content">8 GB available space</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h2 className="requirements-info">Graphics:</h2>
                    <p className="requirements-info-content">
                      NVIDIA GeForce GTX 660 2GB or<br />AMD Radeon HD 7850 2GB DirectX11 (Shader Model S)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </section>

    <section className="score" id="score">
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="col-lg-2 d-flex align-items-center score-left-side">
            <div>
              <div className="display-5">Top Scores</div>
              <p className="font-weight-normal my-5">This top score from various games provided on this platform</p>
              <a href="/#" className="btn btn-warning">see more</a>
            </div>
          </div>

          <div className="col mb-5">
            <div className="row">
              <div className="col-lg-4 col-md-7 offset-lg-6 offset-md-2 offset-sm-1 twittercards">
                <div className="card text-white bg-dark mb-2 ">
                  <div className="card-header">
                    <div className="d-flex justify-content-around">
                      <div className="symbol symbol-40 symbol-lg-80 symbol-circle mr-3">
                        <img alt="Pic" src="../../assets/img/evan.png"/>
                      </div>
                      <div className="col-6">
                        <h3>Evan Lahti</h3>
                        <h4>PC Gamer</h4>
                      </div>
                      <img src="../../assets/img/twitter.svg" className="img-fluid float-right col-2 " alt="twitter"/>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      "One of my gaming highlights of the year."
                    </h5>
                    <p className="card-text">October 18, 2018</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-7 offset-lg-3 offset-md-2 offset-sm-1 twittercards">
                <div className="card text-white bg-dark mb-2 " id="card-2">
                  <div className="card-header">
                    <div className="d-flex justify-content-around">
                      <div className="symbol symbol-40 symbol-lg-80 symbol-circle mr-3">
                        <img alt="Pic" src="../../assets/img/jada.png"/>
                      </div>
                      <div className="col-6">
                        <h3>Jada Griffin</h3>
                        <h4>Nerdreactor</h4>
                      </div>
                      <img src="../../assets/img/twitter.svg" className="img-fluid float-right col-2 " alt="twitter" />
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      "The next big thing in the world of streaming and survival games."
                    </h5>
                    <p className="card-text">December 21, 2018</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-7 offset-lg-5 offset-md-2 offset-sm-1 twittercards">
                <div className="card text-white bg-dark mb-1 " id="card-3">
                  <div className="card-header">
                    <div className="d-flex justify-content-around">
                      <div className="symbol symbol-40 symbol-lg-80 symbol-circle mr-3">
                        <img alt="Pic" src="../../assets/img/aaron.png"/>
                      </div>
                      <div className="col-6">
                        <h3>Aaron Williams</h3>
                        <h4>Uproxx</h4>
                      </div>
                      <img src="../../assets/img/twitter.svg" className="img-fluid float-right col-2 " alt="twitter"/>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      "Snoop Dogg Playing The Wildly Entertaining 'SOS' Is Ridiculous
                    </h5>
                    <p className="card-text">December 24, 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="footer pt-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <figure>
              <img src="../../assets/img/skull.webp" alt="skull" id="skull" />
            </figure>
          </div>
          <div className="col-6">
            <div className="footer-content-right ">
              <h3 className="font-weight-normal">Want to stay in <br /> touch?</h3>
              <div className="display-1">Newsletter Subscribe</div>
              <p className="mt-3">
                In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
              </p>
            </div>
            <div className="footer-content-left">
              <form className="form row d-flex align-items-center">
                <div className="form-group col-md-7">
                  <input type="text" className="form-control mr-sm-2 bg-dark text-white" id="email" placeholder="youremail@binar.co.id" />
                </div>
                <div className="col-md-5 text-left">
                  <button className="btn btn-warning w-100">
                  Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation text-center" id="navigation">
        <div>
          <div className="row">
            <div className="col-12 my-2 nav-item">
              <div className="d-flex justify-content-between mx-5">
                <a className="font-weight-bold" href="/#"><span>Main</span></a>
                <a className="font-weight-bold" href="/#"><span>About</span></a>
                <a className="font-weight-bold" href="/#"><span>Game Features</span></a>
                <a className="font-weight-bold" href="/#"><span>System Requirements</span></a>
                <a className="font-weight-bold" href="/#"><span>Quotes</span></a>
                <a className="font-weight-bold" href="https://facebook.com/">
                  <span className="icon facebook">
                    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z"
                        fill="white" />
                    </svg>
                  </span>
                </a>
                <a className="font-weight-bold" href="https://twitter.com/">
                  <span className="icon twitter">
                    <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M21.2138 2.42967C20.4408 2.75167 19.6098 2.96667 18.7388 3.06467C19.6288 2.56467 20.3118 1.77267 20.6338 0.830668C19.7998 1.29267 18.8778 1.62867 17.8958 1.81067C17.1108 1.02467 15.9898 0.534668 14.7508 0.534668C12.3708 0.534668 10.4398 2.34367 10.4398 4.57367C10.4398 4.89067 10.4778 5.19967 10.5518 5.49467C6.96981 5.32567 3.79381 3.71767 1.66781 1.27467C1.29681 1.87167 1.08481 2.56467 1.08481 3.30567C1.08481 4.70567 1.84581 5.94367 3.00181 6.66767C2.29581 6.64567 1.63181 6.46467 1.04981 6.16167C1.04981 6.17967 1.04981 6.19467 1.04981 6.21367C1.04981 8.17067 2.53481 9.80267 4.50681 10.1737C4.14581 10.2657 3.76381 10.3137 3.37181 10.3137C3.09381 10.3137 2.82381 10.2897 2.56081 10.2437C3.10881 11.8467 4.70081 13.0157 6.58681 13.0487C5.11181 14.1317 3.25381 14.7767 1.23381 14.7767C0.885811 14.7767 0.542811 14.7577 0.205811 14.7207C2.11281 15.8657 4.37881 16.5357 6.81281 16.5357C14.7408 16.5357 19.0758 10.3797 19.0758 5.04267C19.0758 4.86667 19.0708 4.69367 19.0628 4.51967C19.9048 3.94967 20.6358 3.23867 21.2138 2.42967Z"
                        fill="white" />
                    </svg>
                  </span>
                </a>
                <a className="font-weight-bold" href="https://youtube.com/">
                  <span className="icon youtube">
                    <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z"
                        fill="#FF1313" />
                    </svg>
                  </span>
                </a>
                <a className="font-weight-bold" href="https://twitch.tv/">
                  <span className="icon twitch">
                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd"
                        d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z"
                        fill="white"></path>
                      <path
                        d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z">
                      </path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex content-justify-end">
            <div className="col-lg-4">
              <div className="d-inline">
                <p>© 2018 Your Games, inc. All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-2 mb-2">
              <div className="d-inline">
                <a href="/#"><span>Privacy Policy </span></a>|
                <a href="/#"><span>Terms of Services </span></a>|
                <a href="/#"><span>Code of Conduct</span></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Home
