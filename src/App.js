import React, { Component } from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';
// import './App.css';
import {
  faUserCircle,
  faFolderOpen,
  faEnvelope,
  faCamera,
  faHandsHelping,
  faPen,
  faUser,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import SectOneOne from './Components/UI/SectOneOne';
import SectOneThree from './Components/UI/SectOneThree';
import Logo from './Components/UI/Logo';
import MainNav from './Containers/MainNav';
import ContentBlock from './Components/ContentBlock';
import Card from './Components/UI/Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import mbp from './Assets/Images/macbook_pro.jpg';
import headshot from './Assets/Images/my-head-shot.jpg';
import portfolioImg from './Assets/Images/portfolio.jpeg';
import cardOne from './Assets/Images/eye-chart.png';
import SkillsTable from './Components/SkillsTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {colors} from './themeColors';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from './Containers/ContactForm';
import Btn from './Components/UI/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

library.add(
  fab,
  faUserCircle,
  faFolderOpen,
  faEnvelope,
  faCamera,
  faHandsHelping,
  faPen,
  faUser,
  faGlobe
  )

const IntroSnippetBox = styled(ContentBlock)`
  position: absolute;
  box-sizing: border-box;
  width: 50%;
  @media(max-width: 800px) {
    right: 0px;
    }
  @media(min-width: 800px) {
    margin-left: 67%;
    width: 30%;
  }
`
const IntroSnippetText = styled.p`
  @media(min-width: 800px) {
    font-size: 2rem;
  }
`

const OneThirdSnippetBlock = styled.div`
  width: 90%;
  margin: 10px 1%;
  color: ${props => props.color || 'black'};
  padding: 15px;
  font-size: ${props => props.fontSize || '1.2rem'};
  border-radius: 10px;
  @media(min-width: 800px) {
    /* display: inline-block; */
    /* width: 30%; */
    /* margin: 0px 7.5px; */
    /* font-size: 1.3rem */
  }
`

const FaIcn = styled(FontAwesomeIcon)`
  padding: 5px;
  color: ${colors.primary};
`

// const TwoColGrid = styled.div`
//   margin: auto;
//   width: 90%;
//   text-align: left;
//   color: ${colors.primary};
//   /* @media(min-width: 800px) {
//     width: 30%;
//   } */
//   align-items: center;
//   display: grid;
//   grid-template-columns: 50%;
//   grid-template-rows: 30px;
// `

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SectOneOne
          height="70px"
          backgroundColor="rgb(35,35,35)"
          shadow={true}
          sticky={true}
        >
          <Logo size={50} />
          <MainNav />
        </SectOneOne>
        <SectOneOne id="home"
          // height="950px"
          // bgImgPath={mbp}
        >
          <img src={mbp} alt="Macbook Pro" style={{width: '100%', display: 'block'}} />
          <IntroSnippetBox
            backgroundColor="rgba(0,0,0,0.5)"
          >
            <IntroSnippetText>
            Hi. My name is Pieter. Front end development &amp; design is my passion.
            </IntroSnippetText>
          </IntroSnippetBox>
        </SectOneOne>
        <SectOneOne
          height="15px"
        >
          <img src={headshot} alt="Pieter Wolmarans" style={{width: '111.5px', height: '151.5px', objectFit: 'contain', display: 'block', margin: '-50% auto', border: '10px solid white', borderRadius: '50%'}} />
        </SectOneOne>
        <SectOneOne id="about"
          backgroundColor={colors.primary}
        >
          <ContentBlock
            style={{margin: 'auto', padding: '5px'}}
          >
            <h1 style={{margin: 'auto', marginTop: 65}}>About me</h1>
            <p>Design driven development</p>
          </ContentBlock>
        </SectOneOne>
      
        <SectOneThree
          // backgroundColor={colors.secondary}
          // border={`2px solid ${colors.primary}`}
          marginTop="0px"
          paddingY="30px"
        >
          <OneThirdSnippetBlock style={{backgroundColor: colors.secondary}}>
          <h2 style={{margin: 'auto'}}>Who am I ?</h2>
            <p>My name is Pieter Wolmarans. I am based in Port Elizabeth South Africa. Before starting on this ongoing journey of learning web development, I was (and still am) a practising optometrist. It was only later in life that decided to take the plunge and throw all of my efforts into doing what I really love, the result of which you see on this page. I am a creative person. I love development, design, photography and the way they interact and manifest in beautiful creations.</p>
          </OneThirdSnippetBlock>

          <OneThirdSnippetBlock
            style={{backgroundColor: colors.five}}
            color="black"
          >
            <h2 style={{margin: 'auto'}}>Skills at a glance</h2>
            <SkillsTable
              skills={
                [
                  {name: <span><FaIcn icon={["fab", "html5"]} transform="down-5"/>HTML5</span>, points: 7},
                  {name: <span><FaIcn icon={["fab", "css3"]} transform="down-5"/>CSS3</span>, points: 7},
                  {name: <span><FaIcn icon={["fab", "js-square"]} transform="down-5"/>Js (ES06)</span>, points: 6},
                  {name: <span><FaIcn icon={["fab", "react"]} transform="down-5"/>React &amp; Redux</span>, points: 6},
                  {name: <span><FaIcn icon={["fab", "sketch"]} transform="down-5"/>Sketch</span>, points: 5},
                  {name: <span><FaIcn icon={["fab", "adobe"]} transform="down-5"/>Photoshop</span>, points: 8},
                  {name: <span><FaIcn icon={["fab", "python"]} transform="down-5"/>Python</span>, points: 4},
                  {name: <span><FaIcn icon={["fab", "java"]} transform="down-5"/>Java</span>, points: 4},
                ]}
            />
          </OneThirdSnippetBlock>
        </SectOneThree>
        {/* <SectOneOne
          backgroundColor={colors.primary}
          marginTop="15px"
          height="2px"
        /> */}

        <SectOneThree
          marginTop="0px"
          paddingY="30px"
          backgroundColor={colors.five}
        >
          <OneThirdSnippetBlock /* style={{backgroundColor: 'lightgrey'}} */>
            
              {/* <FaIcn icon={["fab", "html5"]} size="2x"/> */}
              {/* <FaIcn icon={["fab", "css3"]} size="2x"/> */}
              {/* <FaIcn icon={["fab", "js-square"]} size="2x"/> */}
              <FaIcn icon={["fab", "react"]} size="3x"/>
            
      <p>My main focus and interest currently is developing compelling UI’s and SPA’s using ReactJS. Feel free to look at some of my most recent projects <AnchorLink offset="90" href="#portfolio">here.</AnchorLink></p>
          </OneThirdSnippetBlock>
          <OneThirdSnippetBlock style={{backgroundColor: 'white'/* , color: 'white' */}}>
            
              <FaIcn icon="camera" title="Camera" size="3x"/>
              {/* <FaIcn icon={["fab", "adobe"]} size="2x"/> */}
            
            <p>I have a strong background in photography and design. I used to do professional wedding photography. You can see some of the work I’ve done in that area <a href="http://www.pixelume.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </OneThirdSnippetBlock>
          <OneThirdSnippetBlock >
            
              <FaIcn icon="hands-helping" size="3x"/>
            
            <p>My background as an optometrist gave me a solid base for critical problem solving and the ability to listen to people and understand their needs.</p>
          </OneThirdSnippetBlock>
        </SectOneThree>

        <SectOneOne id="portfolio"
          height="100px"
          backgroundColor={colors.primary}
          // border={`2px solid ${colors.primary}`}
          // marginTop="15px"
        >
          <ContentBlock
            style={{margin: 'auto'}}
          >
            <h1 style={{margin: 'auto'}}>Recent Work</h1>
          </ContentBlock>
        </SectOneOne>
        <SectOneThree
          marginTop="0px"
          paddingY="30px"
        >
          <Card
            src={cardOne}
            alt="Eye Chart App"
            buttons={
              <div>
                <a href="https://eyechart.online" target="_blank" rel="noopener noreferrer"><Btn><FontAwesomeIcon icon="globe"/>&nbsp; Demo Site</Btn></a>
                <a href="https://github.com/pixelume/eye_chart_v2" target="_blank" rel="noopener noreferrer"><Btn><FontAwesomeIcon icon={["fab", "github"]}/>&nbsp; Github Repo</Btn></a>
              </div>
              }
          >
            <h3>React Eye Chart</h3>
            <p>
              This SPA is a fully fledged Eye Chart application written for Eye Care Professionals. 
              There is a bit of math involved to calculate the display sizes and spacing of the optotypes according 
              to specified standards which depends on the resolution of, and the viewing distance from the display. 
              The project was done using React, Redux, Styled Components &amp; React Router with Firebase authentication 
              and real time database. It utilises quite a few CSS transitions &amp; animations. 
              It includes an REST API integration with unsplash.com to pull featured images from their platform.
            </p>
            <p style={{fontStyle: 'italic'}}>To test use Email: pieter@pixelume.com Password: testPassword </p>
          </Card>
          <Card
            src={portfolioImg}
            alt="Porfolio Site"
            buttons={
              <div>
                <AnchorLink href="#home"><Btn><FontAwesomeIcon icon="globe"/>&nbsp; Demo Site</Btn></AnchorLink>
                <a href="https://github.com/pixelume/portfolio" target="_blank" rel="noopener noreferrer"><Btn><FontAwesomeIcon icon={["fab", "github"]}/>&nbsp; Github Repo</Btn></a>
              </div>
              }
          >
            <h3>Portfolio Site</h3>
            <p>This is of course my porfolio site that you are currently on. This Project was custom coded using React and styled components. No themes were used. It is a static site which is fully resposive to look good on any screen size. It includes a custom coded contact form that validates user input as they are typing using Regular Expressions.</p>
          </Card>
          {/* <Card src={cardOne} alt="Eye Chart App">
            <p>This Project was done using React &amp; Redux. It is a fully fledged Eye Chart application written for Eye Care Professionals.</p>
          </Card> */}
        </SectOneThree>
        <SectOneOne id="contact"
          backgroundColor={colors.primary}
          // border={`2px solid ${colors.primary}`}
          // marginTop="15px"
          height="100px"
        >
          <ContentBlock
            style={{margin: 'auto'}}
          >
            <h1 style={{margin: 'auto'}}>Get in Touch</h1>
          </ContentBlock>
        </SectOneOne>
        <SectOneThree>
          <OneThirdSnippetBlock style={{margin: 'auto'}}>
            <ContactForm />
          </OneThirdSnippetBlock>
        </SectOneThree>
        <SectOneOne id="footer"
          height="200px"
          backgroundColor={colors.primary}
          // border={`2px solid ${colors.primary}`}
          // marginTop="15px"
        >
          <ContentBlock
            style={{margin: 'auto'}}
          >
            <p style={{margin: 'auto'}}>© 2019 <span style={{color: colors.three}}>Pieter Wolmarans</span></p>
            <a href="https://github.com/pixelume" target="_blank" rel="noopener noreferrer" style={{color: 'lightgrey'}}><div style={{margin: 50, display: 'inline-block'}}><FontAwesomeIcon icon={["fab", "github"]} size="2x"/></div></a>
            <a href="https://github.com/pixelume" target="_blank" rel="noopener noreferrer" style={{color: 'lightgrey'}}><div style={{margin: 50, display: 'inline-block'}}><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x"/></div></a>
          </ContentBlock>
        </SectOneOne>
      </React.Fragment>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
