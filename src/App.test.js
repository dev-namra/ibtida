import { render, screen } from '@testing-library/react';
import BookingForm from './components/bookings-page/BookingForm';


test('there is a section for reserving a table', () => {
  render(<BookingForm />);

  const heading = screen.getByTestId('heading');

  expect(heading).toHaveTextContent('Reserve a table');
})