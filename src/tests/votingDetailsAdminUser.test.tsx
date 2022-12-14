const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// mock use decide context admin user
jest.mock('../hooks/useDecide', () => {
    return () => ({
          user: {
            is_staff: true,
          },
    });
});

import { fireEvent, render, screen } from '@testing-library/react';
import VotingDetails from '../components/votingDetails/index';
import '@testing-library/jest-dom'
import { Voting } from '../components/votingCard/types';



describe('Testear el componente de detalles de votación al completo como administrador', () => {

  let votacionFinalizada:Voting
  let votacionComenzada:Voting
  let votacionPendiente:Voting

  beforeEach(() => {
    votacionComenzada = {
      key: 1,
       id: 1,
       name: 'Votacion de prueba',
       desc: 'Descripcion de prueba',
       question: {
         desc: '¿Si o no?',
         options: [
         {
           number: 1,
           option: 'Si',
         },
         {
           number: 2,
           option: 'No',
         }
       ],
       },
       start_date: '2021-05-01T00:00:00Z',
     end_date: null,
     pub_key: '6565765756567',
     auths: [
       {
         name: 'nombre',
         url: 'link',
         me: true,
       }
     ],
     tally: null,
     postproc:null,
   };

    votacionFinalizada = {
      key: 1,
       id: 1,
       name: 'Votacion de prueba',
       desc: 'Descripcion de prueba',
       question: {
         desc: '¿Si o no?',
         options: [
         {
           number: 1,
           option: 'Si',
         },
         {
           number: 2,
           option: 'No',
         }
       ],
       },
       start_date: '2021-05-01T00:00:00Z',
     end_date: '2021-05-01T00:00:00Z',
     pub_key: '6565765756567',
     auths: [
       {
         name: 'nombre',
         url: 'link',
         me: true,
       }
     ],
     tally: null,
     postproc:null,
   };

   votacionPendiente = {
    key: 1,
     id: 1,
     name: 'Votacion de prueba',
     desc: 'Descripcion de prueba',
     question: {
       desc: '¿Si o no?',
       options: [
       {
         number: 1,
         option: 'Si',
       },
       {
         number: 2,
         option: 'No',
       }
     ],
     },
     start_date: null,
   end_date: null,
   pub_key: '6565765756567',
   auths: [
     {
       name: 'nombre',
       url: 'link',
       me: true,
     }
   ],
   tally: null,
   postproc:null,
 };
  });
  

// Test 1: Comprobar si se renderiza el componente de detalles de votación como admin
test('Testear si renderiza el componente de detalles de votación con usuario admin', () => {

  const component= render(<VotingDetails votacion={votacionComenzada} />)

  // Comprobar si el componente se renderiza
  expect(component).toBeTruthy();

  // Comprobar el titulo de la votacion
  expect(component.getByText('Votacion de prueba')).toBeInTheDocument();

  // Comprobar la descripcion de la votacion
  expect(component.getByText('Descripcion de prueba')).toBeInTheDocument();

  // Comprobar la pregunta de la votacion
  expect(component.getByText('¿Si o no?')).toBeInTheDocument();

  // Comprobamos las opciones de la votacion
  expect(component.getByText('Si')).toBeInTheDocument();
  expect(component.getByText('No')).toBeInTheDocument();

  // Comprobamos el boton de submit vote
  expect(component.getByText('submit_vote')).toBeInTheDocument();

})

// Test 2: Presionar el boton de  Mostrar resultados
test('Testear si el boton de Mostrar resultados funciona como usuario admin', () => {


  const component= render(<VotingDetails votacion={votacionComenzada} />)
  const button = component.getByText('results');

  // comprobar si el boton de mostrar resultados existe
  expect(component.getByText('results')).toBeInTheDocument();

  // click en el boton de mostrar resultados
  fireEvent.click(button);

  // comprobar si se llama a la funcion navigate
  expect(mockedUsedNavigate).toHaveBeenCalledWith('/visualizer/1');




})

// Test 3:  Presionar boton de parar votacion
test('Testear si el boton de stop voting se muestra en una votacion comenzada como usuario admin', () => {


  const component= render(<VotingDetails votacion={votacionComenzada} />)

  

  const button = component.getByText('stop_voting');

  // click en el boton de iniciar votacion
  fireEvent.click(button);


  // comprobar si el boton de parar votacion existe
  expect(component.getByText('stop_voting')).toBeInTheDocument();


})

// Test 4:  Presionar boton de contar votos
test('Testear si el boton de tally voting se muestra en una votacion finalizada como usuario admin', () => {


  const component= render(<VotingDetails votacion={votacionFinalizada} />)

  

  const button = component.getByText('tally_voting');

  // click en el boton de contar votos
  fireEvent.click(button);


  // comprobar si el boton de parar votacion existe
  expect(component.getByText('tally_voting')).toBeInTheDocument();


})

// Test 5:  Presionar boton de empezar botación
test('Testear si el boton de start voting se muestra en una votacion pendiente de comenzar como usuario admin', () => {


  const component= render(<VotingDetails votacion={votacionPendiente} />)

  

  const button = component.getByText('start_voting');

  // click en el boton de contar votos
  fireEvent.click(button);


  // comprobar si el boton de parar votacion existe
  expect(component.getByText('start_voting')).toBeInTheDocument();


})

// Test 6:  Comprobar que las opciones de la votacion son clickables
test('Testear si las opciones de la votacion aparecen y son clickables como admin', () => {


  const component= render(<VotingDetails votacion={votacionComenzada} />)

  const option1 = component.getByText('Si');
  const option2 = component.getByText('No');

  // comprobar si la primera opcion esta activada
  expect(option1).toBeEnabled();

  // comprobar si la segunda opcion esta activada
  expect(option2).toBeEnabled();

  // click en la primera opcion
  fireEvent.click(option1);

  // click en la segunda opcion
  fireEvent.click(option2);

  // comprobar si la primera opcion  ya NO esta clickada
  expect(option1).not.toHaveStyle('background-color: #fff');

  // comprobar si la segunda opcion esta clickada
  expect(option2).toHaveStyle('background-color: #fff');


})

// Test 7:  Presionar boton de submit vote cuando la votacion esta comenzada (debe de estar activado)
test('Testear si el boton de submit vote lo muestra correctamente y no esta desactivado cuando el estado de la votación esta comenzada', () => {


  const component= render(<VotingDetails votacion={votacionComenzada} />)

  const option = component.getByText('Si');

  // click en la primera opcion
  fireEvent.click(option);

  // comprobar si la primera opcion esta clickada
  expect(option).toHaveStyle('background-color: #fff');

  const button = component.getByText('submit_vote');

  // comprobar si el boton de submit vote esta activado
  expect(button).toBeEnabled();


})

// Test 8:  Comprobar que el boton de submit vote no esta activado cuando la votacion esta pendiente de comenzar
test('Testear si el boton de submit vote lo muestra correctamente y esta desactivado cuando el estado de la votación esta pendiente de comenzar', () => {


  const component= render(<VotingDetails votacion={votacionPendiente} />)

  const option = component.getByText('Si');

  // click en la primera opcion
  fireEvent.click(option);

  // comprobar si la primera opcion esta clickada
  expect(option).toHaveStyle('background-color: #fff');

  const button = component.getByText('submit_vote');

  // comprobar si el boton de submit vote no esta activado
  expect(button).not.toBeEnabled();


})

// Test 9:  Comprobar que el boton de submit vote no esta activado cuando la votacion esta finalizada
test('Testear si el boton de submit vote lo muestra correctamente y esta desactivado cuando el estado de la votación esta finalizada', () => {


  const component= render(<VotingDetails votacion={votacionPendiente} />)

  const option = component.getByText('Si');

  // click en la primera opcion
  fireEvent.click(option);

  // comprobar si la primera opcion esta clickada
  expect(option).toHaveStyle('background-color: #fff');

  const button = component.getByText('submit_vote');

  // comprobar si el boton de submit vote no esta activado
  expect(button).not.toBeEnabled();


})

})


