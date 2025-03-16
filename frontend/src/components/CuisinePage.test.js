import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cuisine from './CuisinePage';
import cuisineData from './cuisineData';
import { BrowserRouter } from 'react-router-dom';

// Mock the Layout component
jest.mock('./Layout', () => ({ children }) => <div data-testid="layout">{children}</div>);

describe('Cuisine Component', () => {
  it('renders the search bar and cuisine cards', () => {
    render(
      <BrowserRouter>
        <Cuisine />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Search cuisines...')).toBeInTheDocument();
    cuisineData.forEach((cuisine) => {
      expect(screen.getByText(cuisine.name)).toBeInTheDocument();
    });
  });

  it('filters cuisines by name', () => {
    render(
      <BrowserRouter>
        <Cuisine />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search cuisines...');
    fireEvent.change(searchInput, { target: { value: 'Shisa' } });

    const filteredCuisines = cuisineData.filter((cuisine) =>
      cuisine.name.toLowerCase().includes('shisa')
    );

    filteredCuisines.forEach((cuisine) => {
      expect(screen.getByText(cuisine.name)).toBeInTheDocument();
    });

    const otherCuisines = cuisineData.filter(
      (cuisine) => !cuisine.name.toLowerCase().includes('shisa')
    );

    otherCuisines.forEach((cuisine) => {
      expect(screen.queryByText(cuisine.name)).not.toBeInTheDocument();
    });
  });
});
