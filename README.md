# bitwise-status

[![Badge](https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square)](https://996.icu/#/en_US)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg?style=flat-square)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
![Node](https://img.shields.io/badge/node-%3E=14-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/bitwise-status.svg)](https://badge.fury.io/js/bitwise-status)

A library for managing bitwise status flags in JavaScript. It provides functions to add, check, and remove status flags using bitwise operations.

This library is designed to be lightweight and efficient, making it suitable for applications where performance is critical.

## Installation

```bash
npm install bitwise-status --save
```

## Usage

```js
// import via esm
import { hasStatus } from "bitwise-status";

// import via cjs
const { hasStatus } = require("bitwise-status");
```

```js
import { addStatus, hasStatus, removeStatus } from "bitwise-status";

const STATUS_NONE = 1 < 0; // 1
const STATUS_READ = 1 << 1; // 2
const STATUS_WRITE = 1 << 2; // 4
const STATUS_DOWNLOAD = 1 << 3; // 8

addStatus(STATUS_NONE, STATUS_READ); // 3
addStatus(STATUS_READ, STATUS_WRITE); // 6
addStatus(STATUS_WRITE, STATUS_DOWNLOAD); // 12

hasStatus(addStatus(STATUS_READ, STATUS_WRITE), STATUS_WRITE); // true
hasStatus(addStatus(STATUS_READ, STATUS_WRITE), STATUS_DOWNLOAD); // false

removeStatus(addStatus(STATUS_READ, STATUS_WRITE), STATUS_WRITE); // 2
```

## License

The [Anti 996 License](LICENSE)
