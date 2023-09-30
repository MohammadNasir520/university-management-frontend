"use client";

import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectFieldProps;
  placeholder: string;
};

const FormSelectField = ({
  options,
  name,
  size,
  value,
  label,
  defaultValue,
  placeholder,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            size={size}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
