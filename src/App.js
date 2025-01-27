import "./App.css";
import Header from "./components/Header";
import AsideBar from "./components/AsideBar";
function App() {
  return (
    <>
      <Header />

      <main className="main">
        <AsideBar />
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
      </main>
    </>
  );
}

export default App;
