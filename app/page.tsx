import ListTable from "@/app/ui/list-product";
import Search from "./ui/search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold">SIBICHA APP 😚</h1>
      <Search placeholder="Cari produk..." />
      <ListTable />
    </main>
  );
}
