import React, { Suspense, useRef } from 'react';
import {Canvas, useLoader, useFrame} from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Cube from '../models/cube2.glb';
import Loader from './Loader';

export default function Model() {
    const gltf = useLoader(GLTFLoader, Cube)

    const MyCube = () => {
        const cubes = useRef();

        useFrame(() => {
            cubes.current.rotation.y += 0.01;
        });
        return (
            <mesh ref={cubes} >
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
    <Canvas camera={{ position: [0, 20, 20], zoom: 1.9 }} shadows linear>
    <ambientLight intensity={0.6} />
      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <OrbitControls target={[0, 1, 0]} />
      <MyCube/>
    </Canvas>
    </Suspense>
  )
}
