import { Switch, Route } from 'react-router-dom';
import Artigos from '../../features/Artigos/index';

function Routes() {
  return (
    <Switch>
      <Route exact component={Artigos} path="/" />
    </Switch>
  );
}

export default Routes();
