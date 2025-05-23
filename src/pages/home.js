import { Helmet } from 'react-helmet-async';
// sections
import { HomeView } from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> Quambiant: The starting point for your next project</title>
      </Helmet>

      <HomeView />
    </>
  );
}
