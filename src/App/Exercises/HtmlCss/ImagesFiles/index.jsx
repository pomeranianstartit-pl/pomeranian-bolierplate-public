import { RoundedImage } from '../../../Components/RoundedImage';
import './style.css';
export function ImagesFiles() {
  return (
    <div className="imagesfiles">
      <img src="/sygnet96.png" alt="" />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt=""
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" />

      <RoundedImage
        src="/sygnet96.png"
        size={{
          width: '100px',
          height: 100,
        }}
      />
    </div>
  );
}
