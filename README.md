# accurate-calculate

[![npm (scoped)](https://img.shields.io/npm/v/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/accurate-calculate)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@bamblehorse/tiny.svg)](https://www.npmjs.com/package/accurate-calculate)


## Install

```
$ npm install accurate-calculate
```

## Usage

不清楚为什么0.2+0.1 !== 0.3的童鞋 [看一看](https://segmentfault.com/a/1190000010517876 "With a Title"). 
```js
// es6
import { accMul, accDiv, accAdd, accSub } from "accurate-calculate";
// common js
const { accMul, accDiv, accAdd, accSub } = require("accurate-calculate");

// no use
console.log(0.1 + 0.2);
//=> 0.30000000000000004
// use
console.log(accAdd(0.1, 0.2));
//=> 0.3