import React from 'react';
import ReactDOM from 'react-dom';
import RangeSlider from './RangeSlider';

ReactDOM.render(
    <div>
        <RangeSlider
            min={0}
            max={1000}
            minRange={10}
            onChange={()=>{}}
            step={1}
        />
        <div style={{width: '50%'}}>
            <RangeSlider
                min={0}
                max={1000}
                minRange={10}
                onChange={()=>{}}
                step={1}
            />
        </div>
    </div>,
    document.getElementById('example')
);
