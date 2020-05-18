import React, { useState, useEffect } from 'react';
import TaskTable from './TaskTable';
import TaskCreator from '../components/TaskCreator';
import TaskCreator2 from '../components/TaskCreator';
import { useForm } from 'react-hook-form'

function TaskRow() {

    const [taskItems, setTaskItems] = useState([]);

    const [sele, setSele] = useState('');

    //const [index, setIndex] = useState(0);

    const [valor, setValor] = useState('');

    const [numero, setNumero] = useState('');

    useEffect(() => {
        localStorage.setItem('tesks', JSON.stringify(taskItems))
    }, [taskItems]);

    const handleValor = e => {
        const esValido = e.target.validity.valid;
        if (esValido) {
            setValor(e.target.value)
        }
    }

    const handleNumero = e => {
        const esValido = e.target.validity.valid;
        if (esValido) {
            setNumero(e.target.value)
        }
    }

    const TaskTables = () => (
        taskItems.map(task => (
            <TaskTable task={task} key={task.dato} />
        ))
    )

    const updateTask = e => setSele(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!sele == '' && !valor == '') {
            if (!taskItems.find(t => t.dato === valor && t.valor === numero)) {
                setTaskItems([...taskItems, { dato: valor, info: sele, valor: numero }])
            }
        }
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'initialState/json',
                    'content-Type': 'initialState/json'
                },
                body: JSON.stringify(taskItems)
            }

            let res = await fetch('http://localhost:3000/posts', config)
            let jsn = await res.json()

            console.log(jsn)
            console.log('OK')
        } catch (error) {

        }
    }

    const cancelCourse = (e) => {
        e.preventDefault();
        setTaskItems([])
    }

    return (
        <div className="container">
            <form>
                <h1 className="h1 my-1"> Formulario </h1>
                <div className="form-group">
                    <label>VALOR:</label>
                    <TaskCreator
                        entrada={valor}
                        control={handleValor}
                    // ref={register({required:{value: true}})}
                    />
                </div>
                <div className="form-group">
                    <label>DESCRIPCION:</label>
                    <select name='info'
                        className="form-control form-control-lg"
                        value={sele}
                        onChange={updateTask}>
                        <option value="">Seleccionar...</option>
                        <option value="grapefuit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>TRM:</label>
                    <TaskCreator2
                        entrada={numero}
                        control={handleNumero}

                    />
                </div >
                <button type="submit"
                    placeholder="Guarda"
                    className="btn btn-success btn-block my-4"
                    onClick={handleSubmit}
                    
                >Guarda</button>

                <button type="submit"
                    className="btn btn-secondary btn-block"
                    onClick={cancelCourse}> Eliminar</button>

                <table className="table table-striped table-dark my-4">
                    <thead>
                        <tr>
                            <th> Valor </th>
                            <th> Descripcion </th>
                            <th> TRM </th>
                        </tr>
                    </thead>
                    <tbody>
                        {TaskTables()}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default TaskRow;