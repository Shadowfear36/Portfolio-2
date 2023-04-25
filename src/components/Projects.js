import React, {useState} from 'react'
import Header from './Header';
import ProjectCard from './ProjectCard';
import ReactSimplyCarousel from 'react-simply-carousel';
import AudiophileImage from '../images/AudioPhile.png';
export default function Projects() {

const projArray = [{ 
        title: "AudioPhile",
        description: "A Social Media Like Music App for Artists, DJs, Producers, and even Listeners to share, listen, like, comment theirs and others music.",
        image: AudiophileImage,
        demo: "https://guarded-tundra-66113.herokuapp.com/",
        github: "https://github.com/Shadowfear36/Audiophile",
    }, {
        title: "TableTalk",
        description: "This is a project on TableTalk",
        image: "randomlink",
        demo:"ranolink",
        github: "randolink"
    }]

    const mappedProjects = projArray.map(proj => {
            return <ProjectCard proj={proj}/>
        })


    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="vp-100">
        <Header page="projects"/>
        <div className="m-t-20">
            <h2 className="sub-title m-0 p-0">Projects</h2>
            <div>
            <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
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
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
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
          children: <span>{`<`}</span>,
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
            </div>
        </div>
    </div>
  )
}
