import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/warehouses/outsourced/tableProps";
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
      title="OUTSOURCED WAREHOUSE"
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
        <CustomSelect
          label="Warehouse Partner"
          placeholder="Select a warehouse partner"
          value=""
          onChange={() => {}}
          data={[]}
        />

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
      <Divider my="md" />
      <Drawer opened={opened} onClose={close} title="New Outsourced Warehouse">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
