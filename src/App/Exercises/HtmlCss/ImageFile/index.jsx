import './styles.css';
import { RoundedImage } from '../../../Components/RoundedImage/roundedImage';

export function ImageFile() {
  return (
    <div className="image-files">
      <img
        src="https://edceah5uf5z.exactdn.com/wp-content/uploads/2023/02/kot.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        alt=""
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt="" />


      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" />
      {/* <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="" /> */}

      <RoundedImage
        src="https://edceah5uf5z.exactdn.com/wp-content/uploads/2023/02/kot.jpg?strip=all&lossy=1&sharp=1&ssl=1"
        size={{
          width: '100px',
          height: 100,
        }}
      />
    </div>
  );
}
