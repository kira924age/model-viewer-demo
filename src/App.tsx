import React from 'react'
import { Tooltip } from 'react-tooltip'

import foxModel from './assets/Fox.glb'
import "@google/model-viewer";
import './App.css'

const content: JSX.Element = (<div>
    <div>
    Model License Information
    </div>
    <ul>
      <li>CC0: Low poly fox by PixelMannen</li>
      <li>CC-BY 4.0: Rigging and animation by @tomkranis on Sketchfab</li>
      <li>glTF conversion by @AsoboStudio and @scurest</li>
    </ul>
  </div>
)

const App: React.FC = () => {
  return (
    <>
      <Tooltip anchorSelect="#clickable" clickable style={{ backgroundColor: "white", color: "#222" }}>
      {content}</Tooltip>
      <div className="heading-container">
        <div>model-viewer demo</div>
        <a id="clickable">info</a>
      </div>
      <div className="model-viewer-container">
        { /* @ts-expect-error - model-viewer is not a valid HTML element, but it is a valid custom element */}
        <model-viewer src={foxModel} alt="A 3D model of a fox" ar camera-controls autoplay />
      </div>
    </>
  )
}

export default App
