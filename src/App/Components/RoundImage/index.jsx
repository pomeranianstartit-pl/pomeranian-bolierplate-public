import './styles.css';

import png from './Images/lotos.png';
import jpg from './Images/logos.jpg';
import gif from './Images/fire XXXXXXXXX';
import {RoundImage} from '../../Components/ROundImage/RoundImage';

export function ExerciseImages(){
const images=[
{
title:'To jest png!',
src: png,
width 50,
height:50,
color:'red'
}
{
title:'To jest jpg!',
src: jpg,
width 150,
height: 150,
color:'yellow',
}
{
title:'To jest gif!',
src: gif,
width 250,
height:250,
color:'black',
},
];

Return (
<div>
{
images.map ((el) => ) <RoundImage title={el.title} src={el.src} width={el.width} height={el.height} color={el.color}/>
}
</div>]
);
}