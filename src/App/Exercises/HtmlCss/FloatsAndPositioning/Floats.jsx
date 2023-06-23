import './styles.css';
import forest from './forest.jpg'


export const Floats = () => {
  return <>
    <img style={{ width: '50px', height: '50px' }} className='small-forest-foto' src={forest} alt="forest foto" />
    <img style={{ width: '500px', height: '500px' }} className='forest-foto' src={forest} alt="forest foto" />
    <div className='gray-rectangle' style={{ width: '200px', height: '500px' ,background: 'grey'}}></div>
    <p>Duis elementum tortor a interdum vestibulum. Phasellus id dui ac ligula aliquam aliquet eu id felis. Duis vitae quam maximus, lobortis velit non, convallis leo. Curabitur malesuada justo tellus, in efficitur elit gravida eget. Nam vel pretium metus, ac sodales mauris. Pellentesque sed arcu tellus. Suspendisse elementum sed lectus eu semper. Interdum et malesuada fames ac ante ipsum primis in faucibus. In suscipit felis et ultricies gravida. Quisque iaculis aliquam nisl, a cursus dolor mollis at. Ut fringilla maximus nunc, vel placerat risus vestibulum quis.</p>
    
  </>;
};
