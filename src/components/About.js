import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <div className="vp-100 no-scroll-x">
        <Header/>
        <div className="flex flex-row m-t-20 m-centerj centerj m-col flip-landing m-pad-b-10">
            <div className="flex flex-column centered">
                <h2 className="sub-title m-0 p-0 m-center">About Me</h2>
                <div className="container mpl-10 m-t-10">
                    <p className="bioTxt">
                    I'm a Full-Stack Developer and Computer Vision Engineer with a passion for building innovative, high-performance applications. With a strong background in JavaScript, TypeScript, React, Django, Python, FastAPI, and Ray Serve, I specialize in blending modern web development with AI-driven solutions.

                    My work spans full-stack application development, scalable API design, real-time communication systems, and deploying computer vision models into production environments. I love solving complex technical challenges, whether that's optimizing deep learning pipelines, scaling GPU workloads, or creating sleek, interactive user interfaces.

                    Creativity fuels my approach to engineering. I'm inspired by space, technology, and exploration — themes that often show up in the interactive, visually rich designs I build. From integrating 3D elements with Three.js to crafting intuitive frontends, I aim to make every project both technically strong and visually engaging.

                    I'm constantly expanding my skills, from AI model serving to cloud-native deployments. I believe in pushing the limits of what's possible by combining deep technical expertise with creative design thinking.

                    Whether it’s developing full-stack platforms, scaling AI systems, or building immersive web experiences, I’m always focused on delivering work that’s future-facing, reliable, and built with passion.
                    </p>
                    <p className="sub-head">
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
