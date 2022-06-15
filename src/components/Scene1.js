import React from 'react'
// import * as THREE from 'three'

export default function Scene1() {


    return (
        <>
            {/* Camera */}
            <mesh>
                <boxGeometry args={[3, 3, 3]} />
                <meshPhysicalMaterial color={"#8A3FFC"} />
            </mesh>
            <hemisphereLight args={["#8A3FFC", "#D02670", 0.5]} />
            <pointLight color="#FFFFFF" position={[-2, 2, 3]} />
        </>
    )
}