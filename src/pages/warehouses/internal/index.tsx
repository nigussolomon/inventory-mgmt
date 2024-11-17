import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/warehouses/internal/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Divider, Button, Drawer } from "@mantine/core";
import { IconBuildingWarehouse } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="INTERNAL WAREHOUSE"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconBuildingWarehouse size={16} />}
          size="xs"
        >
          NEW WAREHOUSE
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Warehouse"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <Group grow>
          <CustomSelect
            label="Warehouse Manager"
            placeholder="Select a warehouse manager"
            value=""
            onChange={() => {}}
            data={[]}
          />
          <CustomSelect
            label="Warehouse Location"
            placeholder="Select a warehouse location"
            value=""
            onChange={() => {}}
            data={[]}
          />
        </Group>
      </Group>
      <Divider my="md" />
      <Drawer opened={opened} onClose={close} title="New Internal Warehouse">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
