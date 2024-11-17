import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Warehouse Code" placeholder="Warehouse Code" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect data={[]} label="Warehouse Manager" placeholder="Warehouse Manager" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Warehouse Location" placeholder="Warehouse Location" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}