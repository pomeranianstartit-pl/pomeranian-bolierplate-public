import { RoundedImage } from '../../../Components/RoundedImage/RoundedImage';
import './styles.css';

export function ImageFiles() {
  return (
    <div className="images-files">
      <img
        src="https://kakadu.pl/blog/wp-content/uploads/2022/09/208827851-760x535-1.jpg"
        alt="photo"
      />
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt="photo"
      />
      <img src="https://www.svgrepo.com/show/85124/cat.svg" alt="photo" />
      <img src="https://i.gifer.com/2GU.gif" alt="photo" />
      <RoundedImage
        src="/sygnet96.png"
        size={{
          width: '10rem',
          height: 10,
        }}
      />
    </div>
  );
}
