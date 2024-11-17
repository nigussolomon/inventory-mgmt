import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import { Group, Button } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Supplier Code" placeholder="Supplier Code" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Supplier Name" placeholder="Supplier Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Supplier Description"
            placeholder="Supplier Description"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Primary Contact"
            placeholder="Primary Contact"
          />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
