import CustomTextInput from "@/components/ui/inputs/textInput/textInput";
import CustomSelect from "@/components/ui/inputs/select/select";
import { Group, Button } from "@mantine/core";
import { IconPackage } from "@tabler/icons-react";

export default function New() {
  return (
    <div>
      <Group gap="md">
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Product Code" placeholder="Product Code" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput label="Product Name" placeholder="Product Name" />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomTextInput
            label="Product Description"
            placeholder="Product Description"
          />
        </Group>
        <Group gap="md" grow style={{ width: "100%" }}>
          <CustomTextInput label="Width" placeholder="Width" />
          <CustomTextInput label="Height" placeholder="Height" />
          <CustomTextInput label="Length" placeholder="Length" />
          <CustomSelect label="Unit" placeholder="Unit" data={[]} />
        </Group>
        <Group grow style={{ width: "100%" }}>
          <CustomSelect
            label="Primary Supplier"
            placeholder="Primary Supplier"
            data={[]}
          />
        </Group>
        <Button fullWidth color="dark" size="sm">
          Submit
        </Button>
      </Group>
    </div>
  );
}
