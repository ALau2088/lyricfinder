// functional component hold search and tracks components.
import React from 'react';
import Tracks from '../tracks/Tracks';
import Search from '../tracks/Search'

const Index = () => {
  return (
    <React.Fragment>
      <Search/>
      <Tracks/>
    </React.Fragment>
  )
}

export default Index;
