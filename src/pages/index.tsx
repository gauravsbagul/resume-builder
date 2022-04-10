import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>E-Resume: Home</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout />
    </div>
  );
};

export default HomePage;
