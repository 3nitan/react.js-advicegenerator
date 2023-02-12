import { useState, useEffect } from 'react';
import mobileDivider from './images/pattern-divider-mobile.svg';
import desktopDivider from './images/pattern-divider-desktop.svg';
import dice from './images/icon-dice.svg';

function App() {
  const [text, setText] = useState([]);
  const [isPending, setIsPending] = useState(false);

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    console.log(data);

    setText(data);
  };
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className='card'>
      <h1>advice #{text.slip.id}</h1>
      <p>{text.slip.advice}</p>

      <picture>
        <source media='(min-width: 768px)' srcSet={desktopDivider} />
        <img src={mobileDivider} alt='' />
      </picture>

      <div>
        <button onClick={fetchAdvice}>
          <img src={dice} alt='' />
        </button>
      </div>
    </div>
  );
}
export default App;
