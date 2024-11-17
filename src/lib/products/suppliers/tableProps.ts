import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  code: string;
  name: string;
  description: string;
  primaryContact: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Supplier Code",
    accessor: "code",
  },
  { label: "Supplier Name", accessor: "name" },
  { label: "Supplier Description", accessor: "description" },
  { label: "Primary Contact", accessor: "primaryContact" },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "ABC Electronics",
    description: "High-quality electronics",
    primaryContact: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Clothing",
    description: "Stylish clothing",
    primaryContact: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Electronics",
    description: "High-quality electronics",
    primaryContact: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Clothing",
    description: "Stylish clothing",
    primaryContact: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Electronics",
    description: "High-quality electronics",
    primaryContact: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Clothing",
    description: "Stylish clothing",
    primaryContact: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Electronics",
    description: "High-quality electronics",
    primaryContact: "John Doe",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Clothing",
    description: "Stylish clothing",
    primaryContact: "Jane Smith",
    reviews: { positive: 456, negative: 78 },
  },
];
