import { Suspense, lazy } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

const router = createBrowserHistory();

function App() {
  const RegisterPage = lazy(() => import('./screens/Register'));
  const LoginPage = lazy(() => import('./screens/Login'));
  const RepoPage = lazy(() => import('./screens/Repo'))

  return (
    <div className="App">
      <Suspense fallback="...loading">
        <Router history={router}>
          <Switch>
            <Route path={'/register'} exact component={RegisterPage} />
            <Route path={'/'} exact component={LoginPage} />
            <Route exact path="/repos/:id">
              <RepoPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
