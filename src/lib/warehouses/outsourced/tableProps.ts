import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  code: string;
  partner: string;
  contact: string;
  manager: string;
  location: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Warehouse Code",
    accessor: "code",
  },
  { label: "Partner", accessor: "partner" },
  { label: "Contact Person", accessor: "contact" },
  { label: "Warehouse Manager", accessor: "manager" },
  { label: "Location", accessor: "location" },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    partner: "ABC Logistics",
    contact: "Jane Doe",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    partner: "DEF Logistics",
    contact: "John Doe",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    partner: "ABC Logistics",
    contact: "Jane Doe",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    partner: "DEF Logistics",
    contact: "John Doe",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    partner: "ABC Logistics",
    contact: "Jane Doe",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    partner: "DEF Logistics",
    contact: "John Doe",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    partner: "ABC Logistics",
    contact: "Jane Doe",
    manager: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    partner: "DEF Logistics",
    contact: "John Doe",
    manager: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
];
