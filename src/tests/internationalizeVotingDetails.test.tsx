// mock use decide context normal user
jest.mock('../hooks/useDecide', () => {
    return () => ({
          user: {
            is_staff: true,
          },
    });
});

//mock useHref()
const mockedUseHref = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHref: () => mockedUseHref,
}));


import en from '../i18n/languages/en-US'
import es from '../i18n/languages/es-ES'
import i18n from '../i18n/index';
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import VotingDetails from '../components/votingDetails/index'
import '@testing-library/jest-dom'
import Navbar from '../components/navbar/index'
import { Voting } from '../components/votingCard/types'
import { MemoryRouter } from 'react-router-dom'
import { I18nContext, I18nextProvider } from 'react-i18next';

// mock use navigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

//testear que el formulario de votación se internacionaliza correctamente a varios idiomas
describe('Testear que el formulario de votación se internacionaliza correctamente a varios idiomas', () => {
    let votacion: Voting
  beforeEach(() => {
    votacion = {
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
  });

    //Test 1: Comprobar que el formulario de votación se internacionaliza correctamente al idioma en-US
    test('Testear que el formulario de detalles de votación se internacionaliza correctamente al idioma en-US', () =>{
        const navbar = render(<MemoryRouter> <Navbar /></MemoryRouter>)

        // cambiar el idioma a en-US
        fireEvent.click(navbar.getByText("🇺🇸"))
        waitFor(() => 
            i18n.changeLanguage('en_US')

        )
        let i18nMock: any

        //mock i18n fro correct language change
        i18nMock = {
            ...i18n,
            language: 'en_US',
            changeLanguage: jest.fn(),
            t: jest.fn().mockImplementation((key: string) => key),
        };
        
        const component = render(
            <I18nextProvider i18n={i18nMock}>
                <I18nContext.Provider value={i18nMock}>
                    <VotingDetails votacion={votacion} />
                </I18nContext.Provider>
            </I18nextProvider>
        );

        
        const submitButton = component.getByText(en.submit_vote)
        const resultsButton = component.getByText(en.results)
        const stopButton = component.getByText(en.stop_voting)

        //comprobar que el idioma se ha cambiado correctamente
        expect(i18n.language).toBe('en_US')
    
        //comprobar que los botones se han internacionalizado correctamente
        expect(submitButton).toBeInTheDocument()
        expect(resultsButton).toBeInTheDocument()
        expect(stopButton).toBeInTheDocument()
    })
    
    //Test 2: Comprobar que el formulario de votación se internacionaliza correctamente al idioma es-ES
    test('Testear que el formulario de detalles votación se internacionaliza correctamente al idioma es-ES', () => {
        const navbar = render(<MemoryRouter> <Navbar /></MemoryRouter>)

        // cambiar el idioma a en-US
        fireEvent.click(navbar.getByText('🇪🇸'))
        let i18nMock: any
        waitFor(() => 
          i18n.changeLanguage('es_ES')

        )
         //mock i18n fro correct language change
         i18nMock = {
            ...i18n,
            language: 'es_ES',
            changeLanguage: jest.fn(),
            t: jest.fn().mockImplementation((key: string) => key),
        };
        
        const component = render(
            <I18nextProvider i18n={i18nMock}>
                <I18nContext.Provider value={i18nMock}>
                    <VotingDetails votacion={votacion} />
                </I18nContext.Provider>
            </I18nextProvider>
        );

    
        const submitButton = component.getByText(es.submit_vote)
        const resultsButton = component.getByText(es.results)
        const stopButton = component.getByText(es.stop_voting)


        //comprobar que el idioma se ha cambiado correctamente
        expect(i18n.language).toBe('es_ES')
    
        //comprobar que los botones se han internacionalizado correctamente
        expect(submitButton).toBeInTheDocument()
        expect(resultsButton).toBeInTheDocument()
        expect(stopButton).toBeInTheDocument()
    })
    })