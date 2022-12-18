import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'
import { poseLink } from '../../utils/data'
import { poseImages } from '../../utils/pose_images'

import Yt from '../Yt/Yt'

import './Instructions.css'

export default function Instructions({ currentPose }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        <>
        <Yt embedId={poseLink[currentPose]} />
        <div className="instructions-container">
         
            <ul className="instructions-list">
                {instructions[currentPose].map((instruction) => {
                    return (
                        <li className="instruction">{instruction}</li>
                    )

                })}
            </ul>
            <img
                className="pose-demo-img"
                src={poseImages[currentPose]} />
        </div>              
        </>
    )
}
