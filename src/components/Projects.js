import React, {useState} from 'react'
import Header from './Header';
import ProjectCard from './ProjectCard';
import ReactSimplyCarousel from 'react-simply-carousel';
import AudiophileImage from '../images/AudioPhile.png';
import Planets3JS from '../images/ThreeJS-Planets.png';
export default function Projects() {

const projArray = [{ 
        title: "AudioPhile",
        description: "A Social Media Like Music App for Artists, DJs, Producers, and even Listeners to share, listen, like, comment theirs and others music.",
        image: AudiophileImage,
        demo: "https://guarded-tundra-66113.herokuapp.com/",
        github: "https://github.com/Shadowfear36/Audiophile",
    }, {
        title: "Planet Weight Calculator",
        description: "ThreeJS interactive Planet Weight Calculator, calculate your weight on all of the planets in our solar system.",
        image: Planets3JS,
        demo:"https://planets-3js.herokuapp.com",
        github: "https://github.com/Shadowfear36/planets-3js"
    },
    {
      title: "UpWork Job Scraper",
      description: "Python Script using Selenium & Twilio that scrapes UpWork for jobs that match your search criteria and sends you an sms with the results directly to your phone number.",
      image: "https://images.ctfassets.net/lzny33ho1g45/O97hZQ1aOEmlyKFuO2IuD/55f05f194e124c28674e713730124e7b/Python.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760",
      demo:"https://github.com/Shadowfear36/Python-Script-UpW",
      github: "https://github.com/Shadowfear36/Python-Script-UpW"
  },
  {
    title: "Cover Letter Generator w/ ChatGPT ",
    description: "Uses ChatGPT API to Generate a cover letter based on your resume, and a given job description.",
    image: "https://ideascale.com/wp-content/uploads/2023/03/ChatGPT1.jpeg",
    demo:"https://github.com/Shadowfear36/cover-app",
    github: "https://github.com/Shadowfear36/cover-app"
},
  ]

    const mappedProjects = projArray.map(proj => {
            return <ProjectCard proj={proj}/>
        })


    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="vp-100 no-scroll-x">
        <Header page="projects"/>
        <div className="m-t-20 no-scroll-x" >
            <h2 className="sub-title m-center m-0 p-0">Projects</h2>
            <div className="carousel-container">
            <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              preventScrollOnSwipe={true}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  className: 'custom-btn',
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30
                },
                children: <span>{``}</span>,
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  className: 'custom-btn',
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <span>{``}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 2,
                  itemsToScroll: 2,
                  minWidth: 768,
                },
              ]}
              speed={400}
              easing="linear"
            >
                {mappedProjects}

            </ReactSimplyCarousel>
              <p className="t-center">{`<--- Swipe --->`}</p>
            </div>
        </div>
    </div>
  )
}
