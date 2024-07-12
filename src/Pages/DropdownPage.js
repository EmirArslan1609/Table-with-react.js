import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage(){
    const [selection,setSelection] = useState(null);

    const select = (option)=>{
        setSelection(option);
    };

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Yellow', value: 'yellow'}
    ];

    return (
    <div>
    <Dropdown options={options} value={selection} onSelect={select} />
    </div>
    );
}

export default DropdownPage;