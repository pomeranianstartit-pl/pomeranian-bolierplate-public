import { RoundedImage } from '../../../Components/RoundedImage/Index';
import './styles.css';
export function ImageFiles() {
  return (
    <div className="images-files">
      <img
        src="https://img.freepik.com/darmowe-zdjecie/strzal-zblizenie-piekny-kotek-krajowych-imbir-siedzi-na-bialej-powierzchni_181624-35913.jpg"
        alt=""
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt=""
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" />
      <RoundedImage
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        size={{
          width: '100px',
          height: 100,
        }}
      />
    </div>
  );
}
