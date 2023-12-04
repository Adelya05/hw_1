import React, { useEffect } from 'react';
import { useTheme } from './WithTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log('Theme changed:', theme);
    console.log('Computed background color:', window.getComputedStyle(document.body).backgroundColor);
  }, [theme]);

  return (
    <div className="block" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <button onClick={toggleTheme} className="btn">
        button
      </button>
      <h1>Hello</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, molestiae. Cumque temporibus sint molestiae voluptas magni neque sequi sunt nihil totam quisquam quis adipisci facere nobis debitis, laboriosam doloremque illum.</p>
    </div>
  );
}

export default App;