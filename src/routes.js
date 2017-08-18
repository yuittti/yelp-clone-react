import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import makeMainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  let main = makeMainRoutes();

  return (
    <Route path=''>
      {main}
    </Route>
  )
 
}

export default makeRoutes;