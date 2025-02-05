import Columns from "@/components/columns";

export default function Home() {
  return (
    <section className="flex h-screen bg-gradient-to-r from-gray-800 via-blue-800 to-gray-900 py-12 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <Columns />
      </div>
    </section>
  );
}
