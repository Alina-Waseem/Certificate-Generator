import React, { useState, useCallback, useRef } from 'react';
import certificateTemplate from './Certificate.jpg';
import { toPng } from 'html-to-image';

function Home() {
  const ref = useRef(null);
  const [name, setName] = useState('');

  const onButtonClick = useCallback((e) => {
    e.preventDefault();

    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <section className='certificate'>
      <div className='container'>
        <form className='form ' onSubmit={(e) => e.preventDefault()}>
          <h1>Generate your Certificate</h1>
          <input
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <div ref={ref} className='certificate-preview'>
            <img src={certificateTemplate} height={400} alt="Certificate Template" />
            <div className='content'>
              <h1>{name}</h1>
            </div>
          </div>
          <button type='button' onClick={onButtonClick} className='btn'>
            Download Certificate
          </button>
        </form>
      </div>
    </section>
  );
}

export default Home;
