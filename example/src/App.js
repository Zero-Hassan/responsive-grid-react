import React from 'react'

import {Grid} from 'responsive-grid-react';
import 'responsive-grid-react/dist/index.css'

const App = () => {
  return <Grid columns={[1,2,3,4]}>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
  </Grid>
}

export default App
