import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
        console.log(data[1].colonnes)
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
                    <Link className='tableaux__card' key={tableau.id} to={`/tableau/${tableau.id}`}>
                        <h3>{tableau.nom}</h3>
                        <p>{tableau.description}</p>
                    </Link>
                ))}
            </TableauxContainer>
        </>
    )
}

export default Tableaux