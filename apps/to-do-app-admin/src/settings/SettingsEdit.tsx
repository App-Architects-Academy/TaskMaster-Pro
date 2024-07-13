import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SettingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="settingName" source="settingName" />
        <div />
      </SimpleForm>
    </Edit>
  );
};