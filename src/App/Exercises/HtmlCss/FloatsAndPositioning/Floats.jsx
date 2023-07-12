import sky from './sky.png';
export function Floats() {
  return (
    <><div>
        <img style={{ float: 'left', height:'100px'}} src={sky} alt="" />
        <img style={{ float: 'left' }} src={sky} alt="" />
        <div
        style={{
          height: '500px',
          width: '200px',
          backgroundColor: 'grey',
          float: 'right',
        }}
      ></div>
    </div>
      
      <p style={{clear:'none'}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      
    </>
  );
}
export default Floats;
