# udemy-demo

[![test](https://github.com/web-dev-classes/udemy-demo/actions/workflows/test.yml/badge.svg)](https://github.com/web-dev-classes/udemy-demo/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/41e19acc440d24fc498e/maintainability)](https://codeclimate.com/github/web-dev-classes/udemy-demo/maintainability) [![codecov](https://codecov.io/gh/web-dev-classes/udemy-demo/graph/badge.svg)](https://codecov.io/gh/web-dev-classes/udemy-demo) [![Version](https://img.shields.io/npm/v/udemy-demo.svg?colorB=green)](https://www.npmjs.com/package/udemy-demo) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/udemy-demo.svg)](https://www.npmjs.com/package/udemy-demo) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/udemy-demo) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Features

✅ Fully Treeshakable (import from udemy-demo/client/component)

✅ Full TypeScript Support

✅ Unleash the full power of React18 Server components

✅ Works with all build systems/tools/frameworks for React18

✅ Doccumented with [Typedoc](https://web-dev-classes.github.io/udemy-demo) ([Docs](https://web-dev-classes.github.io/udemy-demo))

## Install

```bash
$ pnpm add udemy-demo
```

or

```bash
$ npm install udemy-demo
```

or

```bash
$ yarn add udemy-demo
```

## Usage

Import the component from `udemy-demo` and use it.

```tsx
import styles from "./examples.module.css";
import { UdemyDemo } from "udemy-demo/server";

export default function Examples() {
  return (
    <div className={styles.examples}>
      <UdemyDemo>Wow! It was so simple!</UdemyDemo>
    </div>
  );
}
```

### 🤩 Don't forger to star [this repo](https://github.com/web-dev-classes/udemy-demo)!

Want hands-on course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://mayank-chaudhari.vercel.app/courses/react-and-next-js-with-typescript) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![Repo stats](https://repobeats.axiom.co/api/embed/3bf1f5016b8c32895a8feff80058d6183f498f52.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
