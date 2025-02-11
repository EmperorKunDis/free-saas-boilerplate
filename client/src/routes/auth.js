import { SignIn } from 'views/auth/signin';
import { SignUp } from 'views/auth/signup';
import { Profile } from 'views/auth/profile';

const Routes = [
  {
    path: '/signin',
    view: SignIn,
    title: 'Sign In',
    protected: false
  },
  {
    path: '/signup',
    view: SignUp,
    title: 'Sign Up',
    protected: false
  },
  {
    path: '/profile',
    view: Profile,
    title: 'Profile',
    protected: true
  }
];

export default Routes;