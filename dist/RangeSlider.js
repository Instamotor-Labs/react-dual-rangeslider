'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof window !== 'undefined') {
    require('./rangeslider.css');
    require('./atomic.css');
}

var RangeSlider = function (_React$Component) {
    _inherits(RangeSlider, _React$Component);

    function RangeSlider(props) {
        _classCallCheck(this, RangeSlider);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RangeSlider).call(this));

        _this.state = {
            min: props.min,
            max: props.max,
            minElement: null,
            maxElement: null,
            minRange: props.minRange || 500
        };
        return _this;
    }

    _createClass(RangeSlider, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.state.minElement.value = this.state.min;
            this.state.maxElement.value = this.state.max;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'W(100%)' },
                _react2.default.createElement(
                    'div',
                    { className: 'D(ib) C(#4e5b65)' },
                    (0, _numeral2.default)(this.state.min).format('$0,0')
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'D(ib) Fl(end) C(#4e5b65)' },
                    (0, _numeral2.default)(this.state.max).format('$0,0'),
                    this.props.max === this.state.max ? '+' : ''
                ),
                _react2.default.createElement(
                    'div',
                    {
                        style: this.props.style,
                        className: this.props.ClassName + ' range-slider Pos(r) Ta(c) H(35px)' },
                    _react2.default.createElement('input', {
                        onChange: function onChange(ev) {
                            if (ev.target.value < _this2.state.max - _this2.state.minRange) {
                                _this2.setState({ min: parseInt(ev.target.value) }, function () {
                                    this.props.onChange(this.state);
                                });
                            } else {
                                _this2.state.minElement.value = _this2.state.min;
                                _this2.setState({ min: parseInt(_this2.state.min) }, function () {
                                    this.props.onChange(this.state);
                                });
                            }
                        },
                        ref: function ref(el) {
                            _this2.state.minElement = el;
                        },
                        min: this.props.min,
                        max: this.props.max,
                        step: this.props.step,
                        type: 'range'
                    }),
                    _react2.default.createElement('input', {
                        onChange: function onChange(ev) {
                            if (ev.target.value > _this2.state.min + _this2.state.minRange) {
                                _this2.setState({ max: parseInt(ev.target.value) }, function () {
                                    this.props.onChange(this.state);
                                });
                            } else {
                                _this2.state.maxElement.value = _this2.state.max;
                                _this2.setState({ max: parseInt(_this2.state.max) }, function () {
                                    this.props.onChange(this.state);
                                });
                            }
                        },
                        ref: function ref(el) {
                            _this2.state.maxElement = el;
                        },
                        min: this.props.min,
                        max: this.props.max,
                        step: this.props.step,
                        type: 'range'
                    })
                )
            );
        }
    }]);

    return RangeSlider;
}(_react2.default.Component);

exports.default = RangeSlider;
//# sourceMappingURL=RangeSlider.js.map
