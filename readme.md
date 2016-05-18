# react-range-slider - Semantic HTML5 range slider React component with upper and lower bound inputs.

react-range-slider is an input component that allows a user to specify an upper and a lower bound for a given range.
Extra attention is given to HTML5 semantics for accessibility. Unlike many other range components, react-range-slider uses
two HTML5 `input` elements styled to give the illusion of a true dual input control. This has benefits including working
with form submission if scripts are disabled and also in fallback scenarios when styles are disabled or not available.

# Building 

```
$ git clone
$ npm install
$ grunt 
$ git add dist
```

react-range-slider is currently deployed directly from github, so dist files must be checked in. This requirement
will be dropped once the module is on npm.

# Demo

browse to test.html after building

# running tests

$ npm test

