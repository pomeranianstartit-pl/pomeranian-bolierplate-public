import './styles.css';
import { RoundedImage } from '../../../Components/RoundedImage/RoundedImage';

export function ImageFiles() {
  return (
    <div className="image-files">
      <img
        src="https://cdn1.vectorstock.com/i/1000x1000/73/20/jpg-file-icon-format-document-symbol-vector-13837320.jpg"
        alt="image 1"
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt="image 2"
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="image 3" />

      <RoundedImage
        src="/sygnet96.png"
        size={{
          width: '100px',
          height: 200,
        }}
      />
    </div>
  );
}
