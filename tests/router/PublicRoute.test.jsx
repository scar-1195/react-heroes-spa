import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router';

describe('Pruebas en <PublicRoute />', () => {

  test('debe de moestrar el children si no esta autenticado', () => {

    const contextValue = { logged: false };

    render(
      <AuthContext.Provider value={ contextValue }>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta Pública') ).toBeTruthy();

  });

  test('debe de navegar si esta autenticado', () => {

    const contextValue = { 
      logged: true, 
      user: { 
        name: 'Oscar',
        id: '123',
      } 
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/login']}>
          
          <Routes>
            <Route path='login' element={
              <PublicRoute>
                <h1>Ruta Pública</h1>
              </PublicRoute>
            }/>

            <Route path='marvel' element={<h1>Página Marvel</h1>} />
          </Routes>
          

        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Página Marvel') ).toBeTruthy();

  });

});