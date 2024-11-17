import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Name" placeholder="Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Description" placeholder="Description" />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
