import CarouselHome from '@/components/client/CarouselHome'
import Footer from '@/components/client/footer';
import MainGridHome from '@/components/client/mainGridHome';
import MeilleuresOffres from '@/components/client/meilleuresOffres';

export default function Home() {
  return (
    <>
    <CarouselHome/>
    <MainGridHome/>
    <MeilleuresOffres/>
    <Footer/>
    </>
  );
}
