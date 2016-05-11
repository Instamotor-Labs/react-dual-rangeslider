import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';

ReactDOM.render(
    <RangeSlider
        min={0}
        max={1000}
        minRange={10}
        onChange={()=>{}}
        step={1}
    />,
    document.getElementById('example')
);
