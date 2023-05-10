import './styles.css';

const PaidImage = ({ isPaidImage }) => {
  return (
    <img
      src="/images/maceo-bonnet-2lFBXJeEKX8-unsplash.jpg"
      alt=""
      height="256"
      width="256"
      className={isPaidImage ? '' : 'blured'}
    />
  );
};

export function Backgrounds() {
  return (
    <div>
      <PaidImage isPaidImage={true} />
      <PaidImage isPaidImage={false} />
    </div>
  );
}
