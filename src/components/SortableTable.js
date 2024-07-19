import Table from "./table";
import useSort from "../hooks/useSort";
import { GoChevronDown, GoChevronUp } from "react-icons/go";


function SortableTable(props){
    const {config, data} = props;
    const {sortBy, sortOrder, sortedData, handleClick} = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        else{
            return{
                ...column,
                header: () => <th onClick={() => handleClick(column.label)} >
                    <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label} 
                    </div>
                    </th>
            }
        }
    });


    return (
        <div>
            <Table {...props} data={sortedData} config={updatedConfig} />
        </div>
    )

}


function getIcons(label,sortBy,sortOrder){
    if(label !== sortBy){
        return (
            <div>
                <GoChevronUp/>
                <GoChevronDown/>
            </div>
        );
    }



    if(sortOrder === null){
        return (
            <div>
                <GoChevronUp/>
                <GoChevronDown/>
            </div>
        );
    }
    else if(sortOrder === 'asc'){
        return (
            <div>
                <GoChevronUp/>
            </div>
        );
    }
    else if(sortOrder === 'desc'){
        return (
            <div>
                <GoChevronDown/>
            </div>
        );
    }
}

export default SortableTable;