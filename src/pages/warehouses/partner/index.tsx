import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/warehouses/partner/tableProps";
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
      title="WAREHOUSE PARTNERS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconBuildingWarehouse size={16} />}
          size="xs"
        >
          NEW WAREHOUSE PARTNER
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Partner"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <Group grow>
          <CustomSelect
            label="Partner Contact"
            placeholder="Select a partner contact"
            value=""
            onChange={() => {}}
            data={[]}
          />
          <CustomSelect
            label="Partner Location"
            placeholder="Select a partner location"
            value=""
            onChange={() => {}}
            data={[]}
          />
        </Group>
      </Group>
      <Divider my="md" />
      <Drawer opened={opened} onClose={close} title="New Warehouse Partner">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
