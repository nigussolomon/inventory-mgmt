import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Partner Code" placeholder="Partner Code" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Partner Name" placeholder="Partner Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Partner Contact"
            placeholder="Partner Contact"
          />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Partner Location"
            placeholder="Partner Location"
          />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
