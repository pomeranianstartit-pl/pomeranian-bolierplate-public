import './styles.css';
import snowWolf from '../../../Images/snow-wolf.png';

export const FloatAndPositioning = () => {
  return (
    <div className="main">
      <div className="text text1">
        NullLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ullamcorper ex mattis, convallis turpis eget, tempus sapien. Nunc
        pellentesque neque ligula, fringilla facilisis tortor dictum vel. Sed
        vel ligula mi. a suscipit mattis nisl ultricies posuere. Vestibulum et
        ligula sed augue suscipit porttitor. Integer bibendum, mi non hendrerit
        efficitur, ligula nulla volutpat est, in malesuada leo urna vel tellus.
        Nunc finibus convallis nisi rutrum tempus. In bibendum, velit non
        interdum cursus, tortor nisi interdum erat, vitae tristique justo ex non
        quam. Vestibulum in fringilla odio. Praesent vitae mattis urna. Vivamus
        laoreet, ipsum vitae iaculis pulvinar, sapien velit iaculis lorem, sed
        vulputate magna diam quis justo.
      </div>
      <div className="text text2">
        <img src={snowWolf} alt="obrazek" className="wolf" />{' '}
        <div className="pop-up">
          NullLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ullamcorper ex mattis, convallis turpis eget, tempus sapien. Nunc
        pellentesque neque ligula, fringilla facilisis tortor dictum vel. Sed
        vel ligula mi. Nulla sllamcorper ex mattis, convallis turpis eget,
        tempus sapien. Nunc pellentesque neque ligula, fringilla facilisis
        tortor dictum vel. Sed vel ligula mi. Nulla suscipit mattis nisl
        ultricies posuere. Vestibulum et ligula sed augue suscipit porttitor.
        Integer bibendum, mi non hendrerit efficitur, ligula nulla volutpat est,
        in malesuada leo urna vel tellus. Nunc finibus convallis nisi rutrum
        tempus. In bibendum, velit non interdum cursus, tortor nisi interdum
        erat, vitae tristique justo ex non quam. Vestibulum in fringilla odio.
        Praesent vitae mattis urna. Vivamus laoreet, ipsum vitae iaculis
        pulvinar, sapien velit iaculis lorem, sed vulputate magna duscipit
        mattis nisl ultricies posuere. Vestibulum et ligula sed augue suscipit
        porttitor. Integer bibendum, mi non hendrerit efficitur, ligula nulla
        volutpat est, in malesuada leo urna vel tellus. Nunc finibus convallis
        nisi rutrum tempus. In bibendum, velit non interdum cursus, tortor nisi
        interdum erat, vitae tristique justo ex non quam. Vestibulum in fri
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        ullamcorper ex mattis, convallis turpis eget, tempus sapien. Nunc
        pellentesque neque ligula, fringilla facilisis tortor dictum vel. Sed
        vel ligula mi. Nulla suscipit mattis nisl ultricies posuere. Vestibulum
        et ligula sed augue suscipit porttitor. Integer bibendum, mi non
        hendrerit efficitur, ligula nulla volutpat est, in malesuada leo urna
        vel tellus. Nunc finibus convallis nisi rutrum tempus. In bibendum,
        velit non interdum cursus, tortor nisi interdum erat, vitae tristique
        justo ex non quam. Vestibulum in fringilla odio. Praesent vitae mattis
        urna. Vivamus laoreet, ipsum vitae iaculis pulvinar, sapien velit
        iaculis lorem, sed vulputate magna diam quis justo.
      </div>
      <button>Kliknij mnie</button>
      <div className="box-container">
        <div className="box box1">1</div>
        <div className="box box2">2</div>
        <div className="box box3">3</div>
      </div>
    </div>
  );
};
