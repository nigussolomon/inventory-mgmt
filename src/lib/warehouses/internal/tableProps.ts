import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  code: string;
  manager: string;
  location: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Warehouse Code",
    accessor: "code",
  },
  { label: "Warehouse Manager", accessor: "manager" },
  { label: "Location", accessor: "location" },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
];
