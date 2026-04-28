import Header from "./Header";
function App() {
  const username = "Shivam";
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Header username={username} />
    </div>
  );
}
export default App;
