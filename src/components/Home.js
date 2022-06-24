import React from "react";
import keysplint_hard from "../images/raw/keyprint/keysplint_hard.png";
import keysplint_soft from "../images/raw/keyprint/keysplint_soft.png";
import cleaner_icon from "../images/raw/keyprint/easily_cleaned_icon.png";
import bio_icon from "../images/raw/keyprint/biocompatible_icon.png";
import strong_icon from "../images/raw/keyprint/strong_icon.png";

function HomeHeader() {
  return (
    <header className="home_header">
      <div className="home_header--container">
        <h1 className="home_header--title">HIGH-TECH DENTAL PRODUCTS</h1>
        <div className="home_header--about">
          <span id="long-hyphen"></span><h3>ABOUT US</h3>
        </div>
        <p>
          Advanced Dental Solutions, LLC is a manufacturer and distributer of
          innovative dental products. Interested in modernization?
        </p>
      </div>
    </header>
  )
}

function HomeCardOne() {
    return (
        <section className="home_card_one">
          <div className="home_card_one--container">
            <div className="home_card_one--item">
              <h2>3-D PRINTED TECHNOLOGY</h2>
              <p>The next evolutionary step in occusal splints has arrived. Digitally
                  designed and 3-D printed for maximum precision.</p>
            </div>
            <div className="home_card_one--item">
              <img id="home_card_one--img" src={keysplint_hard}></img>
              <h3>KEYSPLINT HARD</h3>
            </div>      
          </div>      
        </section>
    )
}

function HomeCardTwo() {
  return (
    <section className="home_card_two">
      <div className="flex_col border">
        <h2>WHY 3-D PRINTED SPLINTS/GUARDS?</h2>
        <div className="home_card_two--container flex_row">
          <div className="home--item home_card_two--item">
            <img id="cleaner_icon" src={cleaner_icon}></img>
            <h3>EASY TO CLEAN</h3>
            <p>
              Compliant with global industry standards. Rigorous testing for
              safety and effectiveness per ISO 10993
            </p>
          </div>

          <div className="home--item home_card_two--item">
            <img id="bio_icon" src={bio_icon}></img>
            <h3>FULLY BIOCOMPATIBLE</h3>
            <p>
              Compliant with global industry standards. Rigorous testing for
              safety and effectiveness per ISO 10993
            </p>
          </div>

          <div className="home--item home_card_two--item">
            <img id="strong_icon" src={strong_icon}></img>
            <h3>DURABLE AND LONG LIFE</h3>
            <p>
              Compliant with global industry standards. Rigorous testing for
              safety and effectiveness per ISO 10993
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeCardThree() {
    return (
        <section className="home_card_three home--container">
          <div className=" home--item">
            <img id="home_card_three--img" src={keysplint_soft}></img>
            <h3>KEYSPLINT SOFT</h3>
          </div>
          <div className="home--item">
            <h2 >ELASTIC MEMORY BENEFITS ALL</h2>
            <p>By simply warming in water, placement become easy, fast and painless. Less
                hassle and chairside time. Increased patient comfort. </p>
          </div>  

        </section>
    )
}

function HomeMain() {
  return (
    <div className="home_main">
      <HomeCardOne />
      <HomeCardTwo />
      <HomeCardThree />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <HomeMain />
    </div>
  );
}
