import { About } from "./components/About";
import { AppStyled } from "./components/css/AppStyled";
import { Dashboard } from "./components/Dashboard";
import { DealTerms } from "./components/DealTerms";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { TabsSelection } from "./components/TabsSelection";

function App() {
  return (
    <AppStyled>
      <Navbar />
      <About />
      <Dashboard />
      <DealTerms />
      <TabsSelection />
      <Footer />
    </AppStyled>
  );
}

export default App;
