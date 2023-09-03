
# @maphel/classnames Package
[![Classnames Package](https://img.shields.io/badge/@maphel-classnames-8A2BE2)](https://github.com/maphel/classnames)
[![NPM version](https://img.shields.io/npm/v/@maphel/classnames.svg)](https://www.npmjs.com/package/@maphel/classnames)
[![Build Status](https://img.shields.io/github/actions/workflow/status/maphel/classnames/build.yml)](https://github.com/maphel/classnames/actions/workflows/build.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/maphel/classnames)](https://coveralls.io/github/maphel/classnames?branch=main)
[![Dependabot Status](https://img.shields.io/github/license/maphel/classnames)]()


> A TypeScript utility for conditionally concatenating class names.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
    - [classNames(...args)](#classnamesargs)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

```bash
npm install class-names-package
```

## Usage

Import the utility function into your TypeScript or JavaScript file:
```typescript
import { classNames } from '@maphel/classnames';
```

## API
```typescript
classNames(...args)
```
Returns a concatenated string of class names based on the given arguments.

### Parameters
-  args

A list of `ClassValue` or `ClassMap` values that you want to concatenate.
`ClassValue` can be `string | undefined | null | boolean`.
ClassMap is a `Record<string, boolean>`.

### Return Value
A string that is a concatenated list of class names based on the given arguments.

## Examples

Here are a few examples to show how you can use `classNames`.
```typescript
import { classNames } from 'class-names-package';

// Basic usage
const result = classNames('class1', 'class2');  // Output: "class1 class2"

// With conditions
const isEnabled = true;
const isHidden = false;

const conditionalResult = classNames(
  'base-class',
  { 'enabled': isEnabled, 'hidden': isHidden }
);  // Output: "base-class enabled"

// With array
const arrayResult = classNames(['base-class', 'base-class2']]);  // Output: "base base2"
```

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests.

## Licence

This project is licensed under the MIT License - see the LICENSE.md file for details.
