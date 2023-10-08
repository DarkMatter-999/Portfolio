import React, {Component} from 'react'
import pc from "../assets/pc.svg"
import cursor from "../assets/pointinghand.svg"

import "./PcImage.css"

class PcImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseX: 0, 
      mouseY: 0,
    };
  }

  handleMouseMove = (e) => {
    const pcImage = document.querySelector('.PC'); 
    if (pcImage) {
      const rect = pcImage.getBoundingClientRect();

      const normX = e.clientX / window.innerWidth;
      const normY = e.clientY / window.innerHeight;
      
      const rectW = rect.right - rect.left;
      const rectH = rect.bottom - rect.top;

      const adjustedMouseX =  normX * rectW * 0.75 + rectW * 0.035;
      const adjustedMouseY = normY * rectH * 0.4 + rectW * 0.03; 

      this.setState({
        mouseX: adjustedMouseX,
        mouseY: adjustedMouseY,
      });
    }
  }; 

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    const { mouseX, mouseY } = this.state;

    return (
      <div className="PcImage">
        <img className="PC" src={pc} alt="PC" />
        <img
          className="Cursor"
          src={cursor}
          alt="Cursor"
          style={{
            position: 'absolute',
            left: mouseX + 'px',
            top: mouseY + 'px', 
          }}
        />
      </div>
    );
  }
}

export default PcImage;
