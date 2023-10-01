import _ from 'lodash';
import primtMe from './print.js';
import './style.css';
import Water from "./water.png";
import Data from "./data.xml";
import Notes from "./data.csv";



function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button");
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerText = "Click me and check the console";
    
    // Add the image to our existing div.
    const myImg = new Image();
    myImg.src = Water;

    element.appendChild(myImg);

    btn.onclick = primtMe;
    btn.classList.add("hello");
    element.appendChild(btn);
  
    // Read files extern with Data
    console.log(Data);
    console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());