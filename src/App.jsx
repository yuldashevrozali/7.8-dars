import { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState(null);
  const [text, setText] = useState('');

  function handleChange(e) {
    let inputValue = e.target.value;

    if (/^\d{0,2}$/.test(inputValue)) {
      setCode(inputValue === '' ? null : parseInt(inputValue, 10));
    }

    if (inputValue.length <= 12) {
      if (text.length === 1 || inputValue.length === 6 || inputValue.length === 9) {
        inputValue += ' ';
      }
      setText(inputValue);
    }

  }
  return (
    <>
      <div className='header'>
        <div className='block'>
          {
            (code === 99 || code === 77 || code === 98 || code === 95) ? (
              <img src="https://uztelecom.uz/images/favicon.ico" alt="UzTelecom Icon" />
            ) : ((code === 90 || code === 91) ? (<img src="https://beeline.uz/favicon.ico" alt="beeline Icon" />) :
              ((code === 94 || code === 93 || code === 50) ? (<img src="https://ucell.uz/img/favicon.ico" alt="uceel Icon" />) :
                (code === 33) ? (<img src="https://humans.uz/app-icons/favicon-32x32.png" alt="humans Icon" />) : 'uz'))
          }
          <input
            type="tel"
            value={text}
            onChange={handleChange}
            maxLength="12"
          />
        </div>
      </div>
      <div className='number'>
      <input
        type="submit"
        value="1"
        onClick={() => {
          if (text.length === 12) {
            // Handle the condition when text length is 12
          } else {
            setText(text + '1');
          }
        }}
      />
        <input type="submit" value="2" onClick={() => setText(text + '2')} />
        <input type="submit" value="3" onClick={() => setText(text + '3')} />
        <input type="submit" value="4" onClick={() => setText(text + '4')} />
        <input type="submit" value="5" onClick={() => setText(text + '5')} />
        <input type="submit" value="6" onClick={() => setText(text + '6')} />
        <input type="submit" value="7" onClick={() => setText(text + '7')} />
        <input type="submit" value="8" onClick={() => setText(text + '8')} />
        <input type="submit" value="9" onClick={() => setText(text + '9')} />
      </div>
    </>
  );
}

export default App;