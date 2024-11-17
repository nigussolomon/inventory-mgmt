import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/products/suppliers/tableProps";
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
      title="PRODUCT SUPPLIERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconPackage size={16} />}
          size="xs"
        >
          NEW PRODUCT SUPPLIER
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
        <Group grow>
          <CustomSelect
            label="Primary Contact"
            placeholder="Select a primary contact"
            value=""
            onChange={() => {}}
            data={[]}
          />
        </Group>
      </Group>
      <Divider my="md" />
      <Drawer
        opened={opened}
        onClose={close}
        title="New Product Supplier"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
