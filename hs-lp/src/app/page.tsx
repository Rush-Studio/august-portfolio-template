import { Suspense } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import CurrentVentures from './components/CurrentVentures';
import Writings from './components/Writings';
import dynamic from 'next/dynamic';
import Footer from './components/Footer';

const Scribbles = dynamic(
  () => import('./components/Scribbles').then(mod => mod.default),
  {
    ssr: true,
    loading: () => <div>Loading...</div>
  }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-8">
      <Header />
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        <Profile />
        <CurrentVentures />
        <Writings />
        <Suspense fallback={<div>Loading...</div>}>
          <Scribbles />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}