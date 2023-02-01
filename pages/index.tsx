import { AuthContextProvider } from '../src/template/AuthContextProvider';
import { Layout } from '../src/template/Layout';

const Home = () => {
  return (
    <AuthContextProvider>
      <span>demo</span>
    </AuthContextProvider>
  );
};

export default Home;
