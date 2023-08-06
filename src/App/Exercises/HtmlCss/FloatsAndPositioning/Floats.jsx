import mountains from './mountains.jpg';

const Floats = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img 
      style={{ width: '500px', float: 'left'}}
      src={mountains} 
      alt="mountain (d) view" />
      <img
        style={{
          width: '40px',
          float: 'left',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '1',
        }}
        src={mountains}
        alt="mountain (d) view"
        />
      <div
      style={{ 
        width: '200px', 
        height: '500px', 
        background: 'gray', 
        float: 'right' 
      }}
      ></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum commodi corporis necessitatibus magni inventore. Provident totam laborum nobis quia facilis quas itaque rerum fugiat voluptas dolorem, aliquid consequatur a modi.
      </p>
      />
    </div>
  );
};

export default Floats;

