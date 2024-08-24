import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <div className="vp-100 no-scroll-x">
        <Header/>
        <div className="flex flex-row m-t-20 m-centerj centerj m-col flip-landing">
            <div className="flex flex-column centered">
                <h2 className="sub-title m-0 p-0 m-center">About Me</h2>
                <div className="container mpl-10 m-t-10">
                    <p>
                    I am A full Stack Software Engineer. Who is experienced in Deploying production grade applications, <br/>I am also experienced in Computer Vision and Machine Learning applications.
                    </p>
                    <p>
                    Languages I Know:
                    </p>
                    <div className="tag-container">
                        <button className="tag bg-yellow">JS</button>
                        <button className="tag bg-red">Ruby</button>
                        <button className="tag bg-aqua">React</button>
                        <button className="tag bg-pink">Rails</button>
                        <button className="tag bg-yellow">Three</button>
                        <button className="tag bg-green">Python</button>
                        <button className="tag bg-aqua">Liquid</button>
                        <button className="tag bg-pink">SASS</button>
                        <button className="tag bg-orange">HTML</button>
                        <button className="tag bg-pink">CSS</button>
                        <button className="tag bg-purple">NextJS</button>
                    </div>

                    <p>
                        Other Technologies:
                    </p>

                    <div className="tag-container">
                        <button className="tag bg-aqua">Wordpress</button>
                        <button className="tag bg-green">Shopify</button>
                        <button className="tag bg-red">GCS</button>
                        <button className="tag bg-pink">Insanity</button>
                        <button className="tag bg-blue">Docker</button>
                    </div>
                </div>
            </div>
            <div className="gif">
                <img alt="Space Man Floating" src="https://i.gifer.com/X5NY.gif"/>
            </div>
        </div>
    </div>
  )
}
