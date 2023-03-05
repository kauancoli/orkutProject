import Header from './Header';
import MyProfile from './MyProfile';
import InfoProfile from './InfoProfile';
import Friends from './FriendsComunity';

export const Home = () => {
  return (
    <div className="bg-blueLight h-screen">
      <Header />

      <main className="flex flex-row gap-8 py-12 justify-center">
        <MyProfile />
        <InfoProfile />
        <Friends />
      </main>
    </div>
  );
};

export default Home;
