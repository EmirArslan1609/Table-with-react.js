import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";

function App(){
    return(
        <div className="relative">
        <div className="flex flex-row">
            <Sidebar />
            <div>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>

                <Route path="/modal">
                    <ModalPage />
                </Route>

                <Route path="/table">
                    <TablePage />
                </Route>

            </div>
        </div>
        </div>
    );
}

export default App;