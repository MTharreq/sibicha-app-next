import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { promises as fs } from "fs";

interface Product {
  id: number;
  barcode: number;
  name: string;
  price: number;
}

export default async function ListTable() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const { products } = JSON.parse(file);
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Code</TableHead>
          <TableHead>Nama Produk</TableHead>
          <TableHead className="w-[100px]">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: Product) => (
          <TableRow key={product.id}>
            <TableCell>{product.barcode}</TableCell>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
