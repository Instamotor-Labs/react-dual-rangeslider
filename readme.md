# react-dual-rangeslider - Semantic HTML5 range slider React component with upper and lower bound inputs.

react-dual-rangeslider is an input component that allows a user to specify an upper and a lower bound for a given range.
Extra attention is given to HTML5 semantics for accessibility. Unlike many other range components, react-dual-rangeslider uses
two HTML5 `input` elements styled to give the illusion of a true dual input control. This has benefits including working
with form submission if scripts are disabled and also in fallback scenarios when styles are disabled or not available.

# Building 

```
$ git clone
$ npm install
$ grunt 
$ git add dist
```

react-dual-rangeslider is currently deployed directly from github, so dist files must be checked in. This requirement
will be dropped once the module is on npm.

# Usage

```
import RangeSlider from 'react-dual-rangeslider';

// in render function
    <RangeSlider
        min={0}
        max={1000}
        minRange={10}
        onChange={(state)=>{
            console.log('react-dual-rangeslider max: ', state.max);
            console.log('react-dual-rangeslider min: ', state.min);
        }}
        step={1}
    />
```

# API

## props

```
min - range lower bound 
max - range upper bound 
minRange - minimum range size
onChange - callback
minValue - initial lower range value 
maxValue - initial upper range value
step - size of slider increment
className - class names are merged to container element
style - supplied styles are applied to container element
```

## callback data

```
{min: max:}
```

# Demo

browse to test.html after building

# running tests

```
$ npm test
```
