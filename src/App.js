import React, { Fragment, useState, useEffect } from 'react';
// Components
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // citas in LocalStorage
  let initialCitas = JSON.parse(localStorage.getItem('citas'))

  if (!initialCitas) {
    initialCitas = [];
  };

  const [citas, setCitas] = useState(initialCitas);

  const deleteCita = id => {
    const currentCitas = citas.filter(cita => cita.id !== id)
    setCitas(currentCitas)
  }
  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  };

  useEffect(() => {
    let initialCitas = JSON.parse(localStorage.getItem('citas'))
    if (initialCitas) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  return (
    <Fragment >
      <h1>Administrador de pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Formulario 
              createCita={createCita}
            />
          </div>  
          <div className='one-half column'>
            {citas.length > 0 ? <h2>Tus citas</h2> : <h2>No hay citas</h2>}
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                deleteCita={deleteCita}
              />
            ))}
          </div>    
        </div>
      </div>
    </Fragment>
  );
}

export default App;
