import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface InputDataProps {
  tipo: "vencimento" | "lancamento";
}

const InputData = ({ tipo }: InputDataProps) => {
  const label =
    tipo === "lancamento" ? "Data de lançamento" : "Data de vencimento";

  return <DatePicker defaultValue={dayjs()} label={label} />;
};

export default InputData;
