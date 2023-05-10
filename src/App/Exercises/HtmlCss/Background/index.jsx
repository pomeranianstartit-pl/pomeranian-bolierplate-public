import './styles.css';

const PaidImage = ({ isPaidUser }) => {
  return (
    <img
      src="/Images/image3.jpg"
      alt="amazon forest"
      width="256"
      height="256"
      className={isPaidUser ? '' : 'blured'}
    />
  );
};
const MyImage = (props) => {
  return (
    <img
      src="/Images/image3.jpg"
      alt="amazon forest"
      width="256"
      height="256"
      className={props.isPaidUser ? '' : 'blured'}
    />
  );
};
const ImageFromSource = (props) => {
  return (
    <img
      src={props.src}
      alt="amazon forest"
      width="256"
      height="256"
      // className={props.isPaidUser ? '' : 'blured'}
    />
  );
};
export function Background() {
  return (
    <div>
      <PaidImage isPaidUser={false} />
      <MyImage isPaidUser={false} />
      <PaidImage isPaidUser={true} />
      <MyImage isPaidUser={true} />
      <ImageFromSource src={'/Images/image3.jpg'} />
    </div>
  );
}
