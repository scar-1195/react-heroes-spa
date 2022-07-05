import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router';

describe('Pruebas en <PrivateRoute />', () => {

  test('debe de moestrar el children si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Oscar López',
      },
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText('Ruta Privada') ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');

  });

});