import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import CustomDateInput from "@/components/ui/inputs/dateInput/dateInput";
import CustomTable from "@/components/ui/table/table";
import { columns, rows } from "@/lib/inventory/refill-request/newTableProps";
import { Group, Button, Divider } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Warehouse" placeholder="Warehouse" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomDateInput label="Expected Date" placeholder="Expected Date" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Product" placeholder="Product" />
          <CustomTextInput label="Quantity" placeholder="Quantity" />
          <CustomSelect data={[]} label="Supplier" placeholder="Supplier" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTable pagingOff columns={columns} rows={rows} />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <Divider variant="dashed" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
