import { Column, Reviews } from "@/components/ui/table/table";
import { dateFormatter, numberFormatter } from "@/lib/formatters";

interface RowData {
  product: string;
  quantity: string;
  supplier: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    accessor: "product",
    label: "Product",
  },
  {
    accessor: "quantity",
    label: "Quantity",
  },
  {
    accessor: "supplier",
    label: "Supplier",
  },
];

export const rows: RowData[] = [
  {
    product: "ABC123",
    quantity: "100",
    supplier: "XYZ Supplier",
    reviews: { positive: 123, negative: 45 },
  },
  {
    product: "DEF456",
    quantity: "50",
    supplier: "ABC Supplier",
    reviews: { positive: 456, negative: 78 },
  },
  {
    product: "ABC123",
    quantity: "100",
    supplier: "XYZ Supplier",
    reviews: { positive: 123, negative: 45 },
  },
];
