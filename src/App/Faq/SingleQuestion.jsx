import React from 'react';
export function SingleQuestion({ answer, question }) {
  return (
    <div className="akapit-lorem">
      <img src="/ikonka-rozwin.svg" alt="ikonka" />
      <div className="button-text">Jak mogę zapisać się na szkolenie?</div>
      <p className="p2-z-lorem ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum
        ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in
        cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing
        adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque
        ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit
      </p>
      <p className="akapit-lorem">{answer}</p>
    </div>
  );
}
