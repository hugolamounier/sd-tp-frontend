import { Switch, Route } from 'react-router-dom';
import AddArtigos from '../../features/Artigos/addArtigos';
import Artigos from '../../features/Artigos';
import EditArtigos from '../../features/Artigos/editArtigos';
import ViewArtigos from '../../features/Artigos/viewArtigos';
import Home from '../../features/Home';
import Login from '../../features/Login';
import PrivateRoute from '../components/PrivateRoute';
import Forbidden from '../../features/Errors/403';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact component={Home} path="/home" />
      <Route exact component={Login} path="/login" />
      <Route exact component={Forbidden} path="/403" />
      <PrivateRoute exact component={Artigos} path="/artigos" />
      <PrivateRoute exact component={AddArtigos} path="/add-artigo" />
      <PrivateRoute exact component={EditArtigos} path="/edit-artigo/:id" />
      <PrivateRoute exact component={ViewArtigos} path="/artigo/:id" />
    </Switch>
  );
}

export default Routes;
