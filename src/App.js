import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DropdownPage from "./Pages/DropdownPage";
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";

function App(){
    return(
        <div className="relative">
        <div className="flex flex-row justify-start">
            <Sidebar />
            <div className=" mx-8 my-1">

                <Route path="/dropdown">
                    <DropdownPage />
                </Route>

                <Route path="/modal">
                    <ModalPage />
                </Route>

                <Route path="/table">
                    <TablePage />
                </Route>

                <Route path="/counter">
                    <CounterPage />
                </Route>

            </div>
        </div>
        </div>
    );
}

export default App;