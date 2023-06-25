import { useState } from 'react';
import './styles.css';
import { SingleQuestion } from './SingleQuestion.jsx';


export const Faq = () => {
  
  
 
  return (
    <div>
      <a href="./App/Dashboard/index.jsx">FAQ</a>

      <p>Tutaj znajdź odpowiedzi na naczęściej zadawane pytania</p>

    
      
     <SingleQuestion
     question={"Jak zapisać się mna kurs?"} 
     answear={  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placera  suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas  aliquam, adipiscing adipiscing iaculis habitant. Viverra pretiu tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elitnLorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifen"
     }
     />
     <SingleQuestion
     question={"Jak zapisać się mna kurs?"}
     answear={  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placera  suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas  aliquam, adipiscing adipiscing iaculis habitant. Viverra pretiu tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elitnLorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifen"
     }
     />
     {/* definiujemy treść komponentu w propsach */}

    <SingleQuestion
     question={"Jak zapisać się mna kurs?"}
     answear={  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placera  suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas  aliquam, adipiscing adipiscing iaculis habitant. Viverra pretiu tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elitnLorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifen"
     }
     />
    


       
    </div>
  );
};
