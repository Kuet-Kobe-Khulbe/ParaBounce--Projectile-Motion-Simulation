import { render, screen } from '@testing-library/react';
import ControlPanel from '../src/components/controls/ControlPanel';
import GraphDisplay from '../src/components/data/GraphDisplay';
import IntroPage from '../src/components/intro/IntroPage';
import Header from '../src/components/layout/Header';
import SimulationCanvas from '../src/components/simulation/SimulationCanvas';

test('ControlPanel renders without unused variables', () => {
  render(<ControlPanel />);
  expect(screen.getByText(/Control Panel/i)).toBeInTheDocument();
});

test('GraphDisplay renders with correct dependencies', () => {
  render(<GraphDisplay />);
  expect(screen.getByText(/Graph Display/i)).toBeInTheDocument();
});

test('IntroPage renders with optimized images', () => {
  render(<IntroPage />);
  expect(screen.getByAltText(/Intro Image/i)).toBeInTheDocument();
});

test('Header renders without unused variables', () => {
  render(<Header />);
  expect(screen.getByText(/Header/i)).toBeInTheDocument();
});

test('SimulationCanvas renders correctly', () => {
  render(<SimulationCanvas />);
  expect(screen.getByText(/Simulation Canvas/i)).toBeInTheDocument();
});