import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TableauxContainer } from './tableaux.style';

const Tableaux = () => {
    const navigate = useNavigate();
    const [tableaux, setTableaux] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            fetchTableaux();
        }, 1000);
    }, [])

    const fetchTableaux = async () => {
        const response = await fetch("/tableaux");
        const data = await response.json();
        setTableaux(data);
    }

    const goToTableau = () => {
        navigate('/tableau');
    }

    return (
        <>
            <TableauxContainer className='tableaux'>
                <h1>Mes tableaux</h1>
                {
                    tableaux.length === 0 &&
                    <>
                        <div className='tableaux__card empty'></div>
                        <div className='tableaux__card empty'></div>
                        <div className='tableaux__card empty'></div>
                        <div className='tableaux__card empty'></div>
                        <div className='tableaux__card empty'></div>
                        <div className='tableaux__card empty'></div>
                    </>
                }
                {tableaux.map((tableau) => (
                    <div className='tableaux__card' key={tableau.id} tableau={tableau} onClick={goToTableau}>
                        <h3>{tableau.nom}</h3>
                        <p>{tableau.description}</p>
                    </div>
                ))}
            </TableauxContainer>
        </>
    )
}

export default Tableaux