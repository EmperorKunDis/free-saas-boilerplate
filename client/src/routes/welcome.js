import { Welcome } from 'views/welcome';

const Routes = [
  {
    path: '/',
    view: Welcome,
    title: 'Welcome to Gravity',
    protected: true  // pokud chcete, aby úvodní stránka byla přístupná pouze přihlášeným uživatelům
  }
];

export default Routes;