import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import { poseImages } from "../../utils/pose_images";

import "./DropDown.css";

export default function DropDown({ poseList }) {
  // const [currentPose, setCurrentPose] = useState(poseList[0]);
  let { state } = useLocation();
  console.log(useLocation());
  /* useEffect(() => {
    setCurrentPose(poseList[state]);
  });*/

  return (
    <div>
      {console.log({ poseList })}
      {console.log({ state })}
    </div>
  );
}
