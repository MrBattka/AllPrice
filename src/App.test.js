import { render, screen } from '@testing-library/react';
import App from './App';

test('renders admin layout or main content', () => {
  render(<App />);

  // Проверим, например, наличие логотипа (если он в DOM)
  const imgElement = screen.getByAltText('Logo');
  expect(imgElement).toBeInTheDocument();

  // Или заголовок из Header
  // expect(screen.getByText(/Управление прайсами/i)).toBeInTheDocument();
});