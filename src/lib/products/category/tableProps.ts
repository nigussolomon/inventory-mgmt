import { Column, Reviews } from "@/components/ui/table/table";
import { numberFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  totalProducts: number;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Category Code",
    accessor: "code",
  },
  { label: "Category Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  {
    label: "Total Products",
    accessor: "totalProducts",
    render: (row) => numberFormatter(row.totalProducts),
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    totalProducts: 10,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    totalProducts: 5,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    totalProducts: 10,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    totalProducts: 5,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    totalProducts: 10,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    totalProducts: 5,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    totalProducts: 10,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    totalProducts: 5,
    reviews: { positive: 456, negative: 78 },
  },
];
