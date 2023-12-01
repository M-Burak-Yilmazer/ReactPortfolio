import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import "./scss/app.scss"
const divStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  backgroundColor: "#ffbe0b",
};

function App() {
  return (
    <div>
      <Header />
      <div style={divStyle}>
        <Card />
      </div>

      <Footer />
    </div>
  );
}

export default App;
