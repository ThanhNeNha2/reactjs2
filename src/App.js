import logo from "./logo.svg";
import "./App.css";
import HeaderWeb from "../src/component/header/HeaderWeb";
import FootEnd from "../src/component/food/FootEnd";
import Content from "../src/component/Contents/Content";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* bawts buoc viet hoa chu dau  */}
      <HeaderWeb />

      {/*   <FootEnd>    </FootEnd> dùng trong bao bọc component  */}
      <FootEnd>
        <header />
      </FootEnd>

      {/*    <FootEnd  />  dùng trong trường hợp truyển  ( thanh ) */}
      {/* <FootEnd thanh="thanh hahaha" />
      </header> */}

      <Content />
    </div>
  );
}

export default App;
