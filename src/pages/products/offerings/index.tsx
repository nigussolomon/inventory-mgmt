import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/products/offerings/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="PRODUCT OFFERINGS"
      action={
        <Button onClick={open} color="black" leftSection={<IconPackage size={16} />} size="xs">
          NEW PRODUCT OFFERING
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Product"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />

        <CustomSelect
          label="Product Category"
          placeholder="Select a product category"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="Primary Supplier"
          placeholder="Select a primary supplier"
          value=""
          onChange={() => {}}
          data={[]}
        />
        <CustomSelect
          label="In Stock"
          placeholder="Select 'Yes' or 'No'"
          value=""
          onChange={() => {}}
          data={[]}
        />
      </Group>
      <Divider my="md" />
      <Drawer size="lg" opened={opened} onClose={close} title="New Product Offering">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
