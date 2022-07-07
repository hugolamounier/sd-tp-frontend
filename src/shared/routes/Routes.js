import { Switch, Route } from 'react-router-dom';
import AddArtigos from '../../features/Artigos/addArtigos';
import Artigos from '../../features/Artigos';
import EditArtigos from '../../features/Artigos/editArtigos';
import ViewArtigos from '../../features/Artigos/viewArtigos';

function Routes() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route exact component={Artigos} path="/artigos" />
      <Route exact component={AddArtigos} path="/add-artigo" />
      <Route exact component={EditArtigos} path="/edit-artigo/:id" />
      <Route exact component={ViewArtigos} path="/artigo/:id" />
    </Switch>
  );
}

export default Routes;
