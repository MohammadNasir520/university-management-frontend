import { DatePicker, DatePickerProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

type UMDatePickerProps = {
  name: string;
  label?: string;
  onChange?: (value: Dayjs | null, valTow: string) => void;
  value?: Dayjs;
  size?: "large" | "small";
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  value,
  size,
}: UMDatePickerProps) => {
  const { control, setValue } = useFormContext();

  const HandleOnchange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };

  return (
    <div>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            value={dayjs(field.value) || null}
            onChange={HandleOnchange}
            size={size}
            style={{ width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
