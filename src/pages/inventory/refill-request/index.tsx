import ProductsLayout from "../_layout";
import { columns, rows } from "@/lib/inventory/refill-request/tableProps";
import CustomTable from "@/components/ui/table/table";
import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Divider, Group, Button, Drawer } from "@mantine/core";
import { IconBrandAppgallery } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import New from "./_new";

export default function ProductDetailsPage() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <ProductsLayout
      title="REFILL REQUESTS"
      action={
        <Button
          onClick={open}
          color="black"
          leftSection={<IconBrandAppgallery size={16} />}
          size="xs"
        >
          NEW REFILL REQUEST
        </Button>
      }
    >
      <Group grow gap="md">
        <CustomTextInput
          label="Search Refill Request"
          placeholder="Place your search here"
          value=""
          onChange={() => {}}
        />
        <Group grow>
          <CustomSelect
            label="Requested By"
            placeholder="Select a requester"
            value=""
            onChange={() => {}}
            data={[]}
          />
          <CustomSelect
            label="Status"
            placeholder="Select a status"
            value=""
            onChange={() => {}}
            data={[]}
          />
        </Group>
      </Group>
      <Divider my="md" />
      <Drawer size="xl" opened={opened} onClose={close} title="New Refill Request">
        <New />
      </Drawer>
      <CustomTable columns={columns} rows={rows} />
    </ProductsLayout>
  );
}
