# responsive-grid-react

> a responsive grid system craeted on react and css-grid

[![NPM](https://img.shields.io/npm/v/responsive-grid-react.svg)](https://www.npmjs.com/package/responsive-grid-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save responsive-grid-react
```

## Usage

```jsx
import React, { Component } from 'react'

import {Grid} from 'responsive-grid-react'
import 'responsive-grid-react/dist/index.css'

class Example extends Component {
  render() {
    return <Grid columns={[1,2,3,4]} >
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    </Grid>
  }
}
```

## License

MIT © [Hassan zerouali kouhihal](https://github.com/Hassan zerouali kouhihal)
