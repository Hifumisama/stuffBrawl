import Image from 'next/image';
import RetroMenu from '@/components/RetroMenu';

export default function Home() {
  return (
    <main className="relative min-h-screen retro-grid retro-glow crt">
      <div className="vignette" />
      {/* Image de fond avec effet de flou */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgroundHomePage.png"
          alt="Background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>

      {/* Contenu centré */}
      <div className="relative flex min-h-screen items-center justify-center z-10">
        <RetroMenu />
      </div>
    </main>
  );
}
