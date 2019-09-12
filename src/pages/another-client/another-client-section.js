import React from 'react'
import {Router} from '@reach/router'
import AnotherClientPageWithParams from '../../components/another-client/another-page-with-params'
import AnotherClientHome from '../../components/another-client/another-home'
import AnotherClientPage from '../../components/another-client/one-more-page'
const AnotherSection=()=>{
    console.log(`router another sectionwas hit`);
    return (
        <Router basepath="/">
          <AnotherClientHome path="another-client" />
          <AnotherClientPageWithParams path="another-client/another-page/:someparam" />
          <AnotherClientPage path="another-client/another-page/another-random-page" />
        </Router>
      )
}

export default AnotherSection