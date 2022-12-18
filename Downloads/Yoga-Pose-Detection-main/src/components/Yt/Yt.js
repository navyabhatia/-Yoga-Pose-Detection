import React from "react";
import PropTypes from "prop-types";

import './Yt.css'

const Yt = ({ embedId }) => (
  <div style={{alignItems:'center', marginLeft:'163px'}}>
  <div className="video-responsive">
    <iframe
      style={{maxWidth:640, width:'98%', height:'300px', overflow:'visible', alignItems:'center'}}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </div>
);

Yt.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Yt;