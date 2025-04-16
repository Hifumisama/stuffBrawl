import Button from '@/components/button/Button';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
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
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-6xl text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-pixel-mania)' }}>
          BATTLE THINGS
        </h1>
        <div className="p-10">
          <Button href="/monsthing">Voir les MonsThings</Button>
        </div>
      </div>
    </main>
  );
}
