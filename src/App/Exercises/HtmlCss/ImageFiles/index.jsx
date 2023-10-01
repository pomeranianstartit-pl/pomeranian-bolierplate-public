import { RoundedImage } from '../../../Components/RoundedImage/RoundedImage';
import './style.css';

export function ImageFiles() {
  const exampleVar = 'test';

  return (
    <div className="images-files">
      <img src="/sygnet96.png" alt="" />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt=""
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" />

      <RoundedImage
        src="https://www.svgrepo.com/show/85124/cat.svg"
        size={{
          width: '10rem',
          height: 10,
        }}
      />
    </div>
  );
}
