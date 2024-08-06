import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import PostCreator from '../components/home/PostCreator';
import Comment from '../components/home/Comment';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <PostCreator />
      <Comment />
      <Footer />
    </>
  );
};

export default Home;
