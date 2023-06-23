import './styles.css';
import baltyk from './DSC07234.jpg';
export function Floats() {
  return (
    <div style={{ position: 'relative' }}>
      <img
        style={{ width: '200px', float: 'left' }}
        src={baltyk}
        alt="bałtyk"
      />
      <img
        style={{
          width: '40px',
          float: 'left',
          position: 'absolute',
          left: '0',
          top: '0',
          zIndex: '1',
        }}
        src={baltyk}
        alt="bałtyk"
      />
      <div
        style={{
          width: '200px',
          height: '500px',
          background: 'gray',
          float: 'right',
        }}
      ></div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        velit, sagittis ut metus ut, imperdiet laoreet dolor. Cras venenatis
        arcu erat, non dignissim libero gravida fermentum. Etiam tempor sagittis
        erat, sed posuere lectus ultricies vel. Mauris ante risus, aliquet non
        odio at, ultricies mattis nisl. Sed vitae dui ante. Etiam hendrerit
        ornare nisl eget ultrices. Ut accumsan ante dolor, vitae interdum felis
        ullamcorper ut. Pellentesque libero enim, suscipit at ligula et,
        suscipit volutpat lacus. Sed porta est quis scelerisque ornare. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat
        posuere ligula ac aliquam. Fusce nec tristique diam. Ut feugiat in sem
        vitae porta. Donec auctor, sapien vel suscipit dictum, nisl ante semper
        lorem, suscipit congue purus turpis maximus massa.
      </p>
    </div>
  );
}
