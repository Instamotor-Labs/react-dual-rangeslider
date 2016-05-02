import React from 'react';
import numeral from 'numeral';


if(typeof window !== 'undefined') {
    require('./rangeslider.css');
}

class RangeSlider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            min: props.min,
            max: props.max,
            minElement: null,
            maxElement: null,
            minRange: 500
        };
    }
    componentDidMount() {
        this.state.minElement.value = this.state.min;
        this.state.maxElement.value = this.state.max;
    }
    render() {
        return (
            <div className="W(100%)">
                <div className="D(ib) C(#4e5b65)">
                    {numeral(this.state.min).format('$0,0')}
                </div>
                <div className="D(ib) Fl(end) C(#4e5b65)">
                        {numeral(this.state.max).format('$0,0')}{(this.props.max === this.state.max) ? '+' : ''}
                </div>
                <div
                    style={this.props.style}
                    className={this.props.ClassName + ' range-slider Pos(r) Ta(c) H(35px)'}>
                    <input
                        onChange={
                            (ev)=>{
                                if(ev.target.value < this.state.max - this.state.minRange) {
                                    this.setState(
                                        {min: parseInt(ev.target.value)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                                else {
                                    this.state.minElement.value = this.state.min;
                                    this.setState(
                                        {min: parseInt(this.state.min)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                            }
                        }
                        ref={(el)=>{this.state.minElement = el}}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        type="range"
                    />
                    <input
                        onChange={
                            (ev)=>{
                                if(ev.target.value > this.state.min + this.state.minRange) {
                                    this.setState(
                                        {max: parseInt(ev.target.value)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                                else {
                                    this.state.maxElement.value = this.state.max;
                                    this.setState(
                                        {max: parseInt(this.state.max)},
                                        function() {
                                            this.props.onChange(this.state);
                                        }
                                    );
                                }
                            }
                        }
                        ref={(el)=>{this.state.maxElement = el}}
                        min={this.props.min}
                        max={this.props.max}
                        step={this.props.step}
                        type="range"
                    />
                </div>
            </div>
        );
    }
}

export default RangeSlider;
