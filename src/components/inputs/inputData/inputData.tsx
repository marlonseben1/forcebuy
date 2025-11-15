import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const InputData = () => {
  return (
    <DatePicker
      defaultValue={dayjs()}
      label="Data de lançamento"
      sx={{ height: "100%" }}
    />
  );
};

export default InputData;
