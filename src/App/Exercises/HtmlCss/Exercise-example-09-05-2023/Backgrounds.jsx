import './styles090523.css';

const gallery = [{image: '/images/maceo-bonnet-2lFBXJeEKX8-unsplash.jpg',
image: '/images/maceo-bonnet-2lFBXJeEKX8-unsplash.jpg'}]

const PaidImage = ( {isPaidUser, imageSource} ) => {
  return (
    <img
      src={imageSource}
      alt="image"
      height="256"
      width="256"
      className={isPaidUser ? '' : 'blured'}
    />
  );
};

export function Backgrounds() {
  return (
    <div>
      {gallery.map((gallery) => (
       <>
    <PaidImage isPaidUser={true} imageSource={gallery.image}/><PaidImage isPaidUser={false} imageSource={gallery.image} /></> 
))}
  
    </div>
  );
}
