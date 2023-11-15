import './styles.css';

export const MenuField = ({ title = '', children }) => {
  return (
    <div >
      <h5 className='titleh5'>{title}</h5>
      <div className='childrendiv'>{children}</div>
    </div>
  );
};