import { createBrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Info from '../components/Info';
import Main from '../components/Main';
import InfoCard from '../components/InfoCards';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Main />
        <Info />
        <InfoCard />
      </>
    ),
  },
]);
