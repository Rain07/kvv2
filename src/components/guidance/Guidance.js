import React, { Component } from 'react'
import GuidanceDate from './GuidanceDate';
import GuidanceImage from './GuidanceImage';
import GuidanceLogo from './GuidanceLogo';
import GuidanceTitle from './GuidanceTitle';
import './guidance.css';




class Guidance extends Component {
  

  render() {
      return (
        <div class Name="Guidance">

          <div className="jss31 jss34 jss32 jss713">
            <div className="jss718">
                <GuidanceLogo className="jss754"/>
            </div>
            <div className="jss714">
             
                <div
                  className="jss753 jss715"
                  data="[object Object]"
                  relay="[object Object]"
                  column="pictures"
                  imagesize={300}
                >
                 
                  <div className="jss62 jss85 jss70">
                    <div className="jss63">
                      <GuidanceImage className="jss754"/>
                    </div>
                    <div className="jss63 jss90">
                      <GuidanceTitle className="jss271 jss279 jss755 jss717"/>
                      <GuidanceDate className="jss271 jss279 jss756"/>
                    </div>
                  </div>
                </div>
              
              
                <div
                  className="jss753 jss715"
                  data="[object Object]"
                  relay="[object Object]"
                  column="pictures"
                  imagesize={300}
                ></div>
                  
                  
                  
            </div>
          </div>
        </div>
      );

   }
}

export default Guidance;