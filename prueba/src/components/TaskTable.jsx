import React from 'react';

function numberWithCommas(x){
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
}

const TaskTable = props => (

        <tr key= {props.task}>
            <td>{numberWithCommas(props.task.dato)}</td>
            <td>{props.task.info}</td>
            <td>{numberWithCommas(props.task.valor)}</td>
        </tr>
    
);

export default TaskTable;