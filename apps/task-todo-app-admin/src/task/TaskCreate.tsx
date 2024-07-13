import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dueDate" source="dueDate" />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
