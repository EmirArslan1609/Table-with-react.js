import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown ({options, value, onSelect}) {
    const [isOpen,setIsOpen] = useState(false);
    const divFocus = useRef();

    useEffect(() =>{
    const handler = (e) =>{
        if (!divFocus.current) {
            return;
          }

        if(!divFocus.current.contains(e.target)){
            setIsOpen(false);
        }
    };

    document.addEventListener('click', handler, true);

    return ()=>{
        document.removeEventListener('click', handler);
    };
    }, []);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    };

    const optionsClick = (option) =>{
        setIsOpen(false);
        onSelect(option);
        if(option.value === 'red'){
            document.body.style.backgroundColor = 'red';
        }
        else if(option.value === 'green'){
            document.body.style.backgroundColor = 'green';
        }
        else if(option.value === 'yellow'){
            document.body.style.backgroundColor = 'yellow';
        }
        else if(option === null){
            document.body.style.backgroundColor = 'white';
        }
    };

    const renderedOptions = options.map((option) =>{
        return(
            <div className="hover: bg-sky-100 rounded-md border-4 border-white cursor-pointer p-3" onClick={() => optionsClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });



    return (
        <div ref={divFocus} className=" w-36 relative m-5">
                <div className="flex justify-between cursor-pointer items-center border rounded p-3 shadow bg-white w-full" onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown/>
                </div>
                {isOpen && <div>{renderedOptions}</div>}

        </div>
    );

}


export default Dropdown;