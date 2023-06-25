import { useState } from 'react';
import './styles.css';

export function BoxModel() {

  const [isTrue, setIsTrue] =useState(true)
  const clickHandler = () => { 
    setIsTrue(!isTrue)
     
  }
// wykrzyknik pozwala na negacje !isTrue = false


  return (
    <div className='box-model-base'>
      <p className="paragraph" onClick={clickHandler}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis
        ut arcu porttitor porta. Maecenas vestibulum ex sed ante auctor, sed
        cursus enim condimentum. Fusce posuere eros odio, vitae porttitor magna
        elementum vel. Integer porttitor condimentum erat non tincidunt.
        Pellentesque bibendum ipsum non arcu elementum, ut pellentesque ipsum
        eleifend. Pellentesque scelerisque posuere risus, suscipit viverra urna
        finibus eu. Aenean purus risus, gravida nec porta eu, tristique aliquam
        tellus. Donec nec ipsum augue. Etiam quis orci scelerisque, venenatis
        augue id, lacinia libero. Sed ultricies ullamcorper dictum. Phasellus
        dui lorem, lacinia eu vehicula id, malesuada sit amet velit. Aenean
        consectetur tellus eu sem pharetra, ac tempus tortor porttitor. Quisque
        tempus interdum tellus. Suspendisse at mollis purus, eu auctor sem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque augue nisi, pulvinar in nisl a, scelerisque
        dapibus libero. Fusce scelerisque velit risus, eget fermentum libero
        feugiat ac. Phasellus eget purus ut tellus laoreet faucibus et eget
        libero. Ut ut ipsum at lectus lobortis scelerisque id at nisl. Cras
        condimentum dolor eu consectetur pharetra. Pellentesque cursus volutpat
        metus. Proin id nunc blandit, pharetra urna et, egestas nisi. Phasellus
        eros mauris, laoreet vel fermentum in, vulputate commodo diam. Nunc
        vitae accumsan orci. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Aliquam sodales sed nibh et
        tempor. Nam turpis nisi, sollicitudin at vulputate eget, molestie at
        tellus. Sed eget varius nunc.
        {/* conditional rendering  */}
        {isTrue && <span className='inline-span'>Test inline</span>}
        {/* skrócona forma if, jeżeli jest prawdą to wyświetl mi - conditional rendering */}
      </p>

      <p className="paragraph content-box">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis
        ut arcu porttitor porta. Maecenas vestibulum ex sed ante auctor, sed
        cursus enim condimentum. Fusce posuere eros odio, vitae porttitor magna
        elementum vel. Integer porttitor condimentum erat non tincidunt.
        Pellentesque bibendum ipsum non arcu elementum, ut pellentesque ipsum
        eleifend. Pellentesque scelerisque posuere risus, suscipit viverra urna
        finibus eu. Aenean purus risus, gravida nec porta eu, tristique aliquam
        tellus. Donec nec ipsum augue. Etiam quis orci scelerisque, venenatis
        augue id, lacinia libero. Sed ultricies ullamcorper dictum. Phasellus
        dui lorem, lacinia eu vehicula id, malesuada sit amet velit. Aenean
        consectetur tellus eu sem pharetra, ac tempus tortor porttitor. Quisque
        tempus interdum tellus. Suspendisse at mollis purus, eu auctor sem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque augue nisi, pulvinar in nisl a, scelerisque
        dapibus libero. Fusce scelerisque velit risus, eget fermentum libero
        feugiat ac. Phasellus eget purus ut tellus laoreet faucibus et eget
        libero. Ut ut ipsum at lectus lobortis scelerisque id at nisl. Cras
        condimentum dolor eu consectetur pharetra. Pellentesque cursus volutpat
        metus. Proin id nunc blandit, pharetra urna et, egestas nisi. Phasellus
        eros mauris, laoreet vel fermentum in, vulputate commodo diam. Nunc
        vitae accumsan orci. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Aliquam sodales sed nibh et
        tempor. Nam turpis nisi, sollicitudin at vulputate eget, molestie at
        tellus. Sed eget varius nunc.
       
      <span className='inline-span'>Test inline</span>
      
      </p>


      <p className=" paragraph relative-box-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis
        ut arcu porttitor porta. Maecenas vestibulum ex sed ante auctor, sed
        cursus enim condimentum. Fusce posuere eros odio, vitae porttitor magna
        elementum vel. Integer porttitor condimentum erat non tincidunt.
        Pellentesque bibendum ipsum non arcu elementum, ut pellentesque ipsum
        eleifend. Pellentesque scelerisque posuere risus, suscipit viverra urna
        finibus eu. Aenean purus risus, gravida nec porta eu, tristique aliquam
        tellus. Donec nec ipsum augue. Etiam quis orci scelerisque, venenatis
        augue id, lacinia libero. Sed ultricies ullamcorper dictum. Phasellus
        dui lorem, lacinia eu vehicula id, malesuada sit amet velit. Aenean
        consectetur tellus eu sem pharetra, ac tempus tortor porttitor. Quisque
        tempus interdum tellus. Suspendisse at mollis purus, eu auctor sem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque augue nisi, pulvinar in nisl a, scelerisque
        dapibus libero. Fusce scelerisque velit risus, eget fermentum libero
        feugiat ac. Phasellus eget purus ut tellus laoreet faucibus et eget
        libero. Ut ut ipsum at lectus lobortis scelerisque id at nisl. Cras
        condimentum dolor eu consectetur pharetra. Pellentesque cursus volutpat
        metus. Proin id nunc blandit, pharetra urna et, egestas nisi. Phasellus
        eros mauris, laoreet vel fermentum in, vulputate commodo diam. Nunc
        vitae accumsan orci. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Aliquam sodales sed nibh et
        tempor. Nam turpis nisi, sollicitudin at vulputate eget, molestie at
        tellus. Sed eget varius nunc.
       
      <span className='inline-span'>Test inline</span>
      
      </p>
      
      <p className=" paragraph relative-box-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non turpis
        ut arcu porttitor porta. Maecenas vestibulum ex sed ante auctor, sed
        cursus enim condimentum. Fusce posuere eros odio, vitae porttitor magna
        elementum vel. Integer porttitor condimentum erat non tincidunt.
        Pellentesque bibendum ipsum non arcu elementum, ut pellentesque ipsum
        eleifend. Pellentesque scelerisque posuere risus, suscipit viverra urna
        finibus eu. Aenean purus risus, gravida nec porta eu, tristique aliquam
        tellus. Donec nec ipsum augue. Etiam quis orci scelerisque, venenatis
        augue id, lacinia libero. Sed ultricies ullamcorper dictum. Phasellus
        dui lorem, lacinia eu vehicula id, malesuada sit amet velit. Aenean
        consectetur tellus eu sem pharetra, ac tempus tortor porttitor. Quisque
        tempus interdum tellus. Suspendisse at mollis purus, eu auctor sem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Pellentesque augue nisi, pulvinar in nisl a, scelerisque
        dapibus libero. Fusce scelerisque velit risus, eget fermentum libero
        feugiat ac. Phasellus eget purus ut tellus laoreet faucibus et eget
        libero. Ut ut ipsum at lectus lobortis scelerisque id at nisl. Cras
        condimentum dolor eu consectetur pharetra. Pellentesque cursus volutpat
        metus. Proin id nunc blandit, pharetra urna et, egestas nisi. Phasellus
        eros mauris, laoreet vel fermentum in, vulputate commodo diam. Nunc
        vitae accumsan orci. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Aliquam sodales sed nibh et
        tempor. Nam turpis nisi, sollicitudin at vulputate eget, molestie at
        tellus. Sed eget varius nunc.
       
      <span className='inline-span'>Test inline</span>
      
      </p>
      




    </div>
  );
}
