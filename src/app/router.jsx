import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoadingSpinner from '@components/ui/loading-spinner';

const HomePage = lazy(() => import('@routes/home'));
const AboutPage = lazy(() => import('@routes/about'));
const PricingPage = lazy(() => import('@routes/pricing'));
const BlogPage = lazy(() => import('@routes/blog'));
const BlogSinglePage = lazy(() => import('@routes/blog-single'));
const ContactPage = lazy(() => import('@routes/contact'));
const LoginPage = lazy(() => import('@routes/login'));
const RegisterPage = lazy(() => import('@routes/register'));

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

const createRoute = (path, Component, name, label = null, showInNav = false) => ({
  path,
  name,
  label,
  showInNav,
  element: (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  ),
});

const routes = [
  createRoute('/', HomePage, 'home', 'Home', true),
  createRoute('/about', AboutPage, 'about', 'About', true),
  createRoute('/pricing', PricingPage, 'pricing', 'Pricing', true),
  createRoute('/blog', BlogPage, 'blog', 'Blog', true),
  createRoute('/blog/:slug', BlogSinglePage, 'blog-single'),
  createRoute('/contact', ContactPage, 'contact', 'Contact', true),
  createRoute('/login', LoginPage, 'login', 'Login'),
  createRoute('/register', RegisterPage, 'register', 'Register'),
];

export const router = createBrowserRouter(routes);

export const getRouteByName = (name) => {
  const route = routes.find(r => r.name === name);
  return route ? route.path : '/';
};

export const generatePath = (name, params = {}) => {
  let path = getRouteByName(name);
  Object.keys(params).forEach(key => {
    path = path.replace(`:${key}`, params[key]);
  });
  return path;
};

export const getNavigationRoutes = () => {
  return routes.filter(route => route.showInNav).map(route => ({
    to: route.path,
    label: route.label,
    name: route.name
  }));
};