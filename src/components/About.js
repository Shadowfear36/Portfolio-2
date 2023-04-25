import React from 'react';
import Header from './Header';

export default function About() {
  return (
    <div className="vp-100">
        <Header/>
        <div className="flex flex-row m-t-20">
        <div className="flex flex-column centered">
            <h2 className="sub-title m-0 p-0">About Me</h2>
            <div className="container m-t-10">
                <p>
                I am A full Stack Software Engineer.
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
                </div>

                <p>
                    Other Technologies:
                </p>

                <div className="tag-container">
                    <button className="tag bg-aqua">Wordpress</button>
                    <button className="tag bg-green">Shopify</button>
                    <button className="tag bg-red">GCS</button>
                    <button className="tag bg-pink">Insanity</button>
                </div>
            </div>
        </div>
        <div className="gif">
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzc5NjVlZmY1ZGI0OGI1MDA5ODUwZDA4ZWE0NzBlNjNhOTM3NjUwNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/dxmjrltfAJRLvqADOl/giphy.gif"/>
        </div>
        </div>
    </div>
  )
}
