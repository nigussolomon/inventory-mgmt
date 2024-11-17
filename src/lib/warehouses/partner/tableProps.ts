import { Column, Reviews } from "@/components/ui/table/table";

interface RowData {
  code: string;
  name: string;
  contact: string;
  location: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Partner Code",
    accessor: "code",
  },
  { label: "Partner Name", accessor: "name" },
  { label: "Partner Contact", accessor: "contact" },
  { label: "Location", accessor: "location" },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "ABC Logistics",
    contact: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Logistics",
    contact: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Logistics",
    contact: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Logistics",
    contact: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Logistics",
    contact: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Logistics",
    contact: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "ABC Logistics",
    contact: "John Doe",
    location: "New York",
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "DEF Logistics",
    contact: "Jane Smith",
    location: "London",
    reviews: { positive: 456, negative: 78 },
  },
];
