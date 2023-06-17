import React, { Suspense, useRef } from 'react';
import {Canvas, useLoader, useFrame} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Planet from '../models/Planet_1.glb';
import Loader from './Loader';

export default function Model() {
    const gltf = useLoader(GLTFLoader, Planet)

    const MyCube = () => {
        const planet = useRef();

        useFrame(() => {
            planet.current.rotation.y += 0.005;
        });
        return (
            <mesh ref={planet} >
            <primitive
                object={gltf.scene}
                position={[0, 0, 0]}
                children-0-castShadow
                dispose={null}
            />
            </mesh>
        )
    }

  return (
    <Suspense fallback={<Loader/>}>
    <Canvas camera={{ position: [0, 0, 33], zoom: 1 }} shadows linear>
    <ambientLight intensity={0.6} />
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <OrbitControls target={[0, 1, 0]} />
      <MyCube/>
    </Canvas>
    </Suspense>
  )
}
