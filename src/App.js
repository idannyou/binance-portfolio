import { MarketProvider } from "./marketContext";
import BasicTable from "./Table";

function App() {
  return (
    <MarketProvider>
      <BasicTable />
    </MarketProvider>
  );
}

export default App;
