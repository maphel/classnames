# `@maphel/classnames`

![Classnames Package](https://img.shields.io/badge/@maphel-classnames-8A2BE2)
![NPM version](https://img.shields.io/npm/v/@maphel/classnames.svg)
![Build Status](https://img.shields.io/github/actions/workflow/status/maphel/classnames/build.yml)
![Coverage Status](https://img.shields.io/coverallsCoverage/github/maphel/classnames)
![License](https://img.shields.io/github/license/maphel/classnames)


> The `@maphel/classnames` package is a TypeScript utility for easily managing CSS class names in your JavaScript or TypeScript application. Ideal for frontend frameworks like React, Angular, and Vue, it lets you dynamically generate className strings using conditions. Merge multiple class names, use conditionals, and manage UI state effortlessly.

---

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [API](#API)
  - [Parameters](#Parameters)
- [Examples](#Examples)
- [Contributing](#Contributing)
- [License](#License)


---

## Features
Type Safety: Being written in TypeScript, it offers type safety while handling class names.
Conditional Classes: Easily apply class names based on conditions.
Array and Object Support: Accepts an array or object of class names, giving you flexibility in how you manage your classes.

## Why @maphel/classnames?
Working with dynamic class names often leads to cumbersome ternary or logical operations that can make the code less readable. The @maphel/classnames utility helps you create class name strings in a more expressive, readable, and error-free manner.

---

## Installation
```bash
npm install @maphel/classnames
```

## Usage
Import `classNames` into your TypeScript or JavaScript file.
```typescript
import { classNames } from '@maphel/classnames';
```

## API
```typescript
classNames(...args: ClassValue[]): string;
```

### Parameters
- `args`: ClassValue[]  
  Array of `ClassValue` elements to concatenate.

### Return Value
Returns a concatenated string of class names based on `args`.

---

## Examples
```typescript
import { classNames } from '@maphel/classnames';

// Basic Usage
const basicResult = classNames('class1', 'class2');
console.log(basicResult);  // Output: "class1 class2"

// Conditional Usage
const conditionalResult = classNames(
        'base',
        { 'active': true, 'disabled': false }
);
console.log(conditionalResult);  // Output: "base active"

// Array Usage
const arrayResult = classNames(['array-class1', 'array-class2']);
console.log(arrayResult);  // Output: "array-class1 array-class2"

```
---
## Contributing
Refer to the [CONTRIBUTING.md](./CONTRIBUTING.md) file for contribution guidelines.

## License
This project is under the MIT License. Refer to the [LICENSE.md](./LICENSE.md) file for details.
