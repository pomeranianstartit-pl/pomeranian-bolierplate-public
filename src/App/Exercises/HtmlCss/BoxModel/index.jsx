import {useState} from 'react';
import './styles.css';

export function BoxModel() {
  const [isTrue,setIsTrue] =useState(true)

  const clickHandler = () => {
    setIsTrue(!isTrue);
  }
  return(
  <div className="box-model-base">
    <p className='para' onClick= {clickHandler}>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor diam, commodo sed euismod eu, tincidunt sit amet leo. Nulla at eros eget orci finibus dapibus. Donec consequat rutrum tellus, et varius leo sodales in. Nullam laoreet hendrerit pellentesque. Nullam leo dui, aliquet in arcu sed, lacinia tristique nibh. In in hendrerit dolor, non consectetur eros. Praesent aliquet sem non faucibus tempus. Mauris vel condimentum mi, rhoncus tincidunt odio. Nam rhoncus eu tortor a luctus. Nulla malesuada vel lacus sit amet tincidunt. Pellentesque vel ex pellentesque nibh dignissim sodales. Morbi quis euismod ligula. Aenean convallis libero a venenatis gravida. Cras vulputate turpis eget mattis laoreet.

     {isTrue && <span className='inline-span'> Test inlinowy! </span>}
    </p>

    <p className='para content-box'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor diam, commodo sed euismod eu, tincidunt sit amet leo. Nulla at eros eget orci finibus dapibus. Donec consequat rutrum tellus, et varius leo sodales in. Nullam laoreet hendrerit pellentesque. Nullam leo dui, aliquet in arcu sed, lacinia tristique nibh. In in hendrerit dolor, non consectetur eros. Praesent aliquet sem non faucibus tempus. Mauris vel condimentum mi, rhoncus tincidunt odio. Nam rhoncus eu tortor a luctus. Nulla malesuada vel lacus sit amet tincidunt. Pellentesque vel ex pellentesque nibh dignissim sodales. Morbi quis euismod ligula. Aenean convallis libero a venenatis gravida. Cras vulputate turpis eget mattis laoreet.
    <span className="inline-span">Test liniowy! </span>
    </p>
    <p className='para relative-box'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor diam, commodo sed euismod eu, tincidunt sit amet leo. Nulla at eros eget orci finibus dapibus. Donec consequat rutrum tellus, et varius leo sodales in. Nullam laoreet hendrerit pellentesque. Nullam leo dui, aliquet in arcu sed, lacinia tristique nibh. In in hendrerit dolor, non consectetur eros. Praesent aliquet sem non faucibus tempus. Mauris vel condimentum mi, rhoncus tincidunt odio. Nam rhoncus eu tortor a luctus. Nulla malesuada vel lacus sit amet tincidunt. Pellentesque vel ex pellentesque nibh dignissim sodales. Morbi quis euismod ligula. Aenean convallis libero a venenatis gravida. Cras vulputate turpis eget mattis laoreet. 
    </p>
    <p className='para relative-box'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor diam, commodo sed euismod eu, tincidunt sit amet leo. Nulla at eros eget orci finibus dapibus. Donec consequat rutrum tellus, et varius leo sodales in. Nullam laoreet hendrerit pellentesque. Nullam leo dui, aliquet in arcu sed, lacinia tristique nibh. In in hendrerit dolor, non consectetur eros. Praesent aliquet sem non faucibus tempus. Mauris vel condimentum mi, rhoncus tincidunt odio. Nam rhoncus eu tortor a luctus. Nulla malesuada vel lacus sit amet tincidunt. Pellentesque vel ex pellentesque nibh dignissim sodales. Morbi quis euismod ligula. Aenean convallis libero a venenatis gravida. Cras vulputate turpis eget mattis laoreet. 
    </p>
    
  </div>
  )
}
