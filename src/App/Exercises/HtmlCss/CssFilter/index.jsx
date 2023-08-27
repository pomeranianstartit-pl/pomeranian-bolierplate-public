import './styles.css';
import { RoundImage } from '../../../Exercises/HtmlCss/RoundImage';

export const Exercise = () => {
  return (
    <>
      <RoundImage
        url="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        size="140px"
      />
      <RoundImage url="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png" />
      <RoundImage url="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png" />
    </>
  );
};
