import { AuthContextProvider } from '../src/template/AuthContextProvider';
import { Layout } from '../src/template/Layout';

const Home = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <span>demo</span>
      </Layout>
    </AuthContextProvider>
  );
};

export default Home;
