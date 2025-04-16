import MonsTrucGrid from "@/components/MonsTrucGrid";


export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Collection de MonsTrucs</h1>
        <MonsTrucGrid />
      </div>
    </main>
  );
} 