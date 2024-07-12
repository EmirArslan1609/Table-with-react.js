import Table from "./table";
import  {useState} from 'react';

function SortableTable(props, data){
    const {config} = props;
    const [sortBy,setSortBy] = useState(null);
    const [sortOrder,setSortOrder] = useState(null);

    let sortedOrder = data;
    if(sortOrder && sortBy){
        const {sortValue} = config.find(column => column.label === sortBy);
    }

    const handleClick = (label) =>{
        if(sortOrder===null){
            setSortOrder('asc');
            setSortBy(label);
        }
        else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }
        else if(sortOrder === 'desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    };

    const updatedConfig = config.map((column) => {
        if(!column.sortValue){
            return column;
        }
        else{
            return{
                ...column,
                header: () => <th onClick={() => handleClick(column.label)} >{column.label}  is sortable</th>
            }
        }
    });


    return <Table {...props} config={updatedConfig} />;
}

export default SortableTable;