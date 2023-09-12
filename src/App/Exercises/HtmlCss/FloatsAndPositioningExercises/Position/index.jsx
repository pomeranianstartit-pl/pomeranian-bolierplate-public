import './styles.css';

export const Position = () => {
  return (
    <div className="position__wrapper">
      <div className="div1">
        <p className="div1__absolute">To jest paragraph</p>
      </div>
      <div className="div2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        sequi veniam ea enim nesciunt doloremque delectus sint consectetur qui
        <span className="div2__sticky">To jest element sticky</span>
        magnam. Recusandae, hic quidem officia, asperiores sit libero sapiente
        totam eum.Recusandae, hic quidem officia, asperiores sit libero sapiente
        totam eum.
      </div>

      <div className="div3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        sequi veniam ea enim nesciunt doloremque delectus sint consectetur qui
        <span className="div3__fixed">To jest element sticky</span>
        magnam. Recusandae, hic quidem officia, asperiores sit libero sapiente
        totam eum.Recusandae, hic quidem officia, asperiores sit libero sapiente
        totam eum.
      </div>
      <div className="div4">
        <p className="div4__z-index_1">To jest paragraph</p>
        <p className="div4__z-index_2">To jest paragraph</p>
        <p className="div4__z-index_3">To jest paragraph</p>
      </div>
    </div>
  );
};
