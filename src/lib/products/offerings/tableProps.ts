import { Column, Reviews } from "@/components/ui/table/table";
import { ReactNode } from "react";
import { Badge } from "@mantine/core";

interface RowData {
  code: string;
  name: string;
  description: string;
  dimensions: string;
  primarySupplier: string;
  stock: boolean;
  reviews: Reviews;
}

export const columns: Column<RowData>[] = [
  {
    label: "Product Code",
    accessor: "code",
  },
  { label: "Product Name", accessor: "name" },
  { label: "Description", accessor: "description" },
  { label: "Primary Supplier", accessor: "primarySupplier" },
  { label: "Dimensions", accessor: "dimensions" },
  {
    label: "In Stock",
    accessor: "stock",
    render: (val) => (val?.stock ? "Yes" : "No"),
  },
];

export const rows: RowData[] = [
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    primarySupplier: "ABC Electronics",
    dimensions: "10x10x10 cm",
    stock: true,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    primarySupplier: "XYZ Clothing",
    dimensions: "15x15x15 cm",
    stock: false,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    primarySupplier: "ABC Electronics",
    dimensions: "10x10x10 cm",
    stock: true,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    primarySupplier: "XYZ Clothing",
    dimensions: "15x15x15 cm",
    stock: false,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    primarySupplier: "ABC Electronics",
    dimensions: "10x10x10 cm",
    stock: true,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    primarySupplier: "XYZ Clothing",
    dimensions: "15x15x15 cm",
    stock: false,
    reviews: { positive: 456, negative: 78 },
  },
  {
    code: "ABC123",
    name: "Electronics",
    description: "High-quality electronics",
    primarySupplier: "ABC Electronics",
    dimensions: "10x10x10 cm",
    stock: true,
    reviews: { positive: 123, negative: 45 },
  },
  {
    code: "DEF456",
    name: "Clothing",
    description: "Stylish clothing",
    primarySupplier: "XYZ Clothing",
    dimensions: "15x15x15 cm",
    stock: false,
    reviews: { positive: 456, negative: 78 },
  },
];
