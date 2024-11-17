import { Column, Reviews } from "@/components/ui/table/table";
import { dateFormatter, numberFormatter } from "@/lib/formatters";

interface RowData {
  reference: string;
  warehouse: string;
  requestedBy: string;
  requestDate: string;
  expectedDate: string;
  requestQuantity: number;
  status: string;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Request Reference",
    accessor: "reference",
  },
  {
    label: "Warehouse",
    accessor: "warehouse",
  },
  {
    label: "Requested By",
    accessor: "requestedBy",
  },
  {
    label: "Request Date",
    accessor: "requestDate",
    render: (val) => dateFormatter(val.requestDate),
  },
  {
    label: "Expected Date",
    accessor: "expectedDate",
    render: (val) => dateFormatter(val.expectedDate),
  },
  {
    label: "Total Request Quantity",
    accessor: "requestQuantity",
    render: (val) => numberFormatter(val.requestQuantity),
  },
  {
    label: "Status",
    accessor: "status",
  },
];

export const rows: RowData[] = [
  {
    reference: "ABC123",
    warehouse: "ABC Warehouse",
    requestedBy: "John Doe",
    requestDate: "2023-01-01",
    expectedDate: "2023-01-15",
    requestQuantity: 100,
    status: "Pending",
    reviews: { positive: 123, negative: 45 },
  },
  {
    reference: "DEF456",
    warehouse: "XYZ Warehouse",
    requestedBy: "Jane Smith",
    requestDate: "2023-02-01",
    expectedDate: "2023-02-15",
    requestQuantity: 50,
    status: "Approved",
    reviews: { positive: 456, negative: 78 },
  },
  {
    reference: "ABC123",
    warehouse: "ABC Warehouse",
    requestedBy: "John Doe",
    requestDate: "2023-01-01",
    expectedDate: "2023-01-15",
    requestQuantity: 100,
    status: "Pending",
    reviews: { positive: 123, negative: 45 },
  },
  {
    reference: "DEF456",
    warehouse: "XYZ Warehouse",
    requestedBy: "Jane Smith",
    requestDate: "2023-02-01",
    expectedDate: "2023-02-15",
    requestQuantity: 50,
    status: "Approved",
    reviews: { positive: 456, negative: 78 },
  },
  {
    reference: "ABC123",
    warehouse: "ABC Warehouse",
    requestedBy: "John Doe",
    requestDate: "2023-01-01",
    expectedDate: "2023-01-15",
    requestQuantity: 100,
    status: "Pending",
    reviews: { positive: 123, negative: 45 },
  },
  {
    reference: "DEF456",
    warehouse: "XYZ Warehouse",
    requestedBy: "Jane Smith",
    requestDate: "2023-02-01",
    expectedDate: "2023-02-15",
    requestQuantity: 50,
    status: "Approved",
    reviews: { positive: 456, negative: 78 },
  },
  {
    reference: "ABC123",
    warehouse: "ABC Warehouse",
    requestedBy: "John Doe",
    requestDate: "2023-01-01",
    expectedDate: "2023-01-15",
    requestQuantity: 100,
    status: "Pending",
    reviews: { positive: 123, negative: 45 },
  },
  {
    reference: "DEF456",
    warehouse: "XYZ Warehouse",
    requestedBy: "Jane Smith",
    requestDate: "2023-02-01",
    expectedDate: "2023-02-15",
    requestQuantity: 50,
    status: "Approved",
    reviews: { positive: 456, negative: 78 },
  },
];
