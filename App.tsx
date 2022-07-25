import * as React from 'react';
import './style.css';
import Counter from './counter';

export default function App() {
  return (
    <div>
      <h3>All Products</h3>
      <div style={{ display: 'flex', padding: '1rem 0' }}>
        <p style={{ marginRight: '0.5rem' }}>black snekers</p>{' '}
        <button>choose</button>
      </div>
      <Counter />
      <div style={{ display: 'flex', padding: '1rem 0' }}>
        <p style={{ marginRight: '0.5rem' }}>t-shirts</p>{' '}
        <button>choose</button>
      </div>
      <Counter />
      <div style={{ display: 'flex', padding: '1rem 0' }}>
        <p style={{ marginRight: '0.5rem' }}>books</p> <button>choose</button>
      </div>
      <Counter />
    </div>
  );
}
