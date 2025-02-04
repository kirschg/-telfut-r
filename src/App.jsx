import "bootstrap/dist/css/bootstrap.css";
import { Outlet } from "react-router-dom";
import './Style.css';

function App() {
  return (
    <div className="App">
      <header className="constant">
        <h1>Ételfutár®</h1>
      </header>
        <nav>
        <ul className="nav">
          <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-basket2-fill" viewBox="0 0 16 16">
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
            </svg>
          </li>
          <li style={{padding:0}}><select>
            <option selected disabled hidden>Language</option>
            <option value="HU">HU</option>
            <option value="EN">EN</option>
          </select></li>
          <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">reg</li>
          <li data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">log</li>
          <li onclick="Welcome()">start</li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <p>2024 Ételfutár® - Minden jog fenntartva.</p>
      </footer>
    </div>
  );
}
export default App;
