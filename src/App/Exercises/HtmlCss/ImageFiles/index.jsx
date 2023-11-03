import { RoundedImage } from '../../../Components/RoundedImage/RoundedImage';
import './style.css';
export function ImageFiles() {
  return (
    <div className="images-files">
      <img
        src="https://static.prsa.pl/images/90f30d6e-915a-46a2-b860-6fb270ede5b6.jpg"
        alt=""
      />
      <img
        src="https://png.pngtree.com/element_our/png/20181009/thai-cat-cream-tabby-sitting-png_131622.jpg"
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
