import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FoodTrucks from './FoodTrucksPage';
import foodTruckData from './foodTruckData';
import { BrowserRouter } from 'react-router-dom';

// Mock the Layout component
jest.mock('./Layout', () => ({ children }) => <div data-testid="layout">{children}</div>);

describe('FoodTrucks Component', () => {
  it('renders the search bar and food truck cards', () => {
    render(
      <BrowserRouter>
        <FoodTrucks />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Find a food truck near you')).toBeInTheDocument();
    foodTruckData.forEach((truck) => {
      expect(screen.getByText(truck.title)).toBeInTheDocument();
    });
  });

  it('filters food trucks by cuisine type', () => {
    render(
      <BrowserRouter>
        <FoodTrucks />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Find a food truck near you');
    fireEvent.change(searchInput, { target: { value: 'Pizza' } });

    const filteredTrucks = foodTruckData.filter((truck) =>
      truck.cuisineType.toLowerCase().includes('pizza')
    );

    filteredTrucks.forEach((truck) => {
      expect(screen.getByText(truck.title)).toBeInTheDocument();
    });

    const otherTrucks = foodTruckData.filter(
      (truck) => !truck.cuisineType.toLowerCase().includes('pizza')
    );

    otherTrucks.forEach((truck) => {
      expect(screen.queryByText(truck.title)).not.toBeInTheDocument();
    });
  });

  it('displays a maximum of 16 food trucks', () => {
    render(
      <BrowserRouter>
        <FoodTrucks />
      </BrowserRouter>
    );

    const foodTruckCards = screen.getAllByRole('img');
    expect(foodTruckCards.length).toBeLessThanOrEqual(16);
  });
});
