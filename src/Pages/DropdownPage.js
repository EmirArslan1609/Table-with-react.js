import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){
    const [selection,setSelection] = useState(null);

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Yellow', value: 'yellow'}
    ];

    const select = (option)=>{
        setSelection(option);
    };
    const resetSubmit = () =>{
        setSelection(null);
        document.body.style.backgroundColor = '';
    };

    return (
    <div className="flex flex-row">
        <Dropdown options={options} value={selection} onSelect={select} />
        <button onClick={resetSubmit} className="fixed left-80 mx-10 my-7 p-1 w-24 border-2 hover:border-blue-700 border-sky-600 rounded">Reset</button>
    </div>
    );
}

export default DropdownPage;