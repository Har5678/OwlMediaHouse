import React from 'react'
import { assets } from '../../assets/assets';
import "./Scroller.css";

const Scroller = () => {

  return (
    <section class="frames">
            <div class="frame1" style={{
              backgroundImage: `url(${assets.Banner1})`
            }}>
                

            </div>
            <div class="frame2" style={{
              backgroundImage: `url(${assets.Banner2})`
            }}>
                

            </div>
            <div class="frame3" style={{
              backgroundImage: `url(${assets.Banner3})`
            }}>
                

            </div>

            <div class="frame4" style={{
              backgroundImage: `url(${assets.Banner4})`
            }}>
               
                </div>

        </section>
  )
}

export default Scroller;
