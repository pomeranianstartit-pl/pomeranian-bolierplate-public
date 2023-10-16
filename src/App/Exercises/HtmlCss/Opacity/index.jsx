import './styles.css';

export function Exercise() {
  return (
    <div className="opacity-wrapper">
      EFEKT opacity:
      <div className='div1'>
        <p>to jest pierwszy div!</p>
      </div>

      EFEKT rgba
      <div className='div2'>
        <p>to jest drugi div!</p>
      </div>
    </div>
  );
}