import React, { useState } from 'react';

const TaskCreator = props => {

    const { entrada, control } = props;

    

    return (

        <div className="my-1">
                <input
                    type="text"
                    className="form-control"
                    value={entrada}
                    onChange={control}
                    pattern="[0-9-,]{0,13}"
                />
        </div>
    )
};

export default TaskCreator;