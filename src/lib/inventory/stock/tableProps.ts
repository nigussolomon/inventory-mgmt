import { Column, Reviews } from "@/components/ui/table/table";
import { numberFormatter } from "@/lib/formatters";

interface RowData {
  code: string;
  name: string;
  description: string;
  warehouse: string;
  stockQuantity: number;
  minimumStock: number;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Product Code",
    accessor: "code",
  },
  { label: "Product Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  { label: "Warehouse", accessor: "warehouse" },
  {
    label: "Minimum Stock",
    accessor: "minimumStock",
    render: (val) => numberFormatter(val.minimumStock),
  },
  {
    label: "Stock Quantity",
    accessor: "stockQuantity",
    render: (val) => numberFormatter(val.stockQuantity),
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    warehouse: "ABC Warehouse",
    stockQuantity: 100,
    minimumStock: 50,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    warehouse: "XYZ Warehouse",
    stockQuantity: 50,
    minimumStock: 25,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    warehouse: "ABC Warehouse",
    stockQuantity: 100,
    minimumStock: 50,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    warehouse: "XYZ Warehouse",
    stockQuantity: 50,
    minimumStock: 25,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    warehouse: "ABC Warehouse",
    stockQuantity: 100,
    minimumStock: 50,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    warehouse: "XYZ Warehouse",
    stockQuantity: 50,
    minimumStock: 25,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    warehouse: "ABC Warehouse",
    stockQuantity: 100,
    minimumStock: 50,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    warehouse: "XYZ Warehouse",
    stockQuantity: 50,
    minimumStock: 25,
    reviews: { positive: 456, negative: 78 },
  },
];
