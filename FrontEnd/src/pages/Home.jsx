import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import PostCreator from '../components/home/PostCreator';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <PostCreator />
      <Footer />
    </>
  );
};

export default Home;
