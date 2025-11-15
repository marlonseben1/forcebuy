import { LocalizationProvider } from "@mui/x-date-pickers";
import { TabelaPrincipal } from "./containers/tabelaPrincipal/tabelaPrincipal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TabelaPrincipal />
      </LocalizationProvider>
    </>
  );
}

export default App;
