import { useState } from "react";

function CounterPage(){
    const [count, setCount] = useState(0);
    const[valueToAdd, setValueToAdd] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement = () =>{
        setCount(count-1);
    }

    const handleChange = (e) =>{
        const valueToAdd = parseInt(e.target.value) || 0;

        setValueToAdd(valueToAdd);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        setCount(count + valueToAdd);
        setValueToAdd(0);
    }


    function getColor(color){
        if(count < 0){
            color =  'text-red-500';
        }
        else if( count > 0){
            color = 'text-green-500';
    
        }
        else{
            color = 'text-black';
        }
        return color;
    }




    return(
        <div className="w-full h-auto my-5 mx-10 border-2 rounded flex flex-col">
            <h2 className= {`m-5 text-lg text-center ${getColor()}`} >Count is:  {count}</h2>
            <div className="flex flex-row justify-center">
                <button className="border border-2 rounded m-3 p-3" onClick={decrement}>Decrement</button>
                <button className="border border-2 rounded m-3 p-3" onClick={increment}>Increment</button>
            </div>

            <form onSubmit={handleSubmit}  className="flex flex-col m-5">
                <label>Add numbers</label>
                <input onChange={handleChange} value={valueToAdd || ''} type="number" className=" m-3 p-2 bg-gray-50 border-gray-300"/>
                <button className="border border-2 rounded m-3 p-3">Add</button>
            </form>
        </div>
    );
}

export default CounterPage;