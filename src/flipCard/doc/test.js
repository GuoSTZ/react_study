import React from 'react';
import './index.css';
import one from './images/1.png';
import two from './images/2.png';
import three from './images/3.png'

export default class TestDemo extends React.Component {
  render() {
    return (
      <div className='test-wrap'>
        {/* 伪类 */}
        {/* <div className='test-weilei'><img src={two} /></div> */}

        {/* 层级 */}
        {/* <div className='test-zindex1'></div> */}
        {/* <div className='test-zindex2'></div> */}


        {/* 旋转原点 */}
        {/* <div className='test-box'><img src={one} /></div> */}
        {/* <div className='test-box test-one'><img src={one} /></div> */}
        {/* 背面不可见 */}
        {/* <div className='test-box test-one-2'><img src={one} /></div> */}

        {/* data-*以及attr */}
        {/* <div className='test-text' data-data="red"><a href='www.test.com'>it is a test</a></div> */}

        {/* perspective */}
        {/* <div className='test-perspective'></div> */}
        {/* <div className='test-perspective2'></div> */}
        {/* translateZ */}
        {/* <div className='test-perspective3'></div> */}
      </div>
    )
  }
}
