import landscape from './landscape.jpg';
import doggy from './doggy.jpg';

const Floats = () => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{ height: '400px', width: '300px', float: 'left' }}
        src={landscape}
        alt="zdjecie domu"
      />
      <img
        style={{
          height: '150px',
          width: '100px',
          float: 'left',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '1',
        }}
        src={doggy}
        alt="zdjecie psa"
      />
      <div
        style={{
          width: '300px',
          height: '400px',
          background: 'gray',
          float: 'right',
        }}
      ></div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia quasi
        omnis maxime ipsum, molestiae quam illum incidunt doloribus fugiat
        consectetur culpa nobis eligendi facere provident. Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Minus numquam perferendis maxime
        tempore similique accusantium eos, eius optio amet natus.
      </p>
    </div>
  );
};

export default Floats;
