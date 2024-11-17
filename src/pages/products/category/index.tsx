import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/products/category/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import { Divider, Button, Drawer } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";
export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title={"PRODUCT CATEGORIES"}
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconPackage size={16} />}
          size="xs"
        >
          NEW PRODUCT CATEGORY
        </Button>
      }
    >
      <CustomTextInput
        label="Search Product Category"
        placeholder="Place your search here"
        value=""
        onChange={() => {}}
      />
      <Divider my="md" />
      <Drawer
        opened={opened}
        onClose={close}
        title="New Product Category"
      >
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
