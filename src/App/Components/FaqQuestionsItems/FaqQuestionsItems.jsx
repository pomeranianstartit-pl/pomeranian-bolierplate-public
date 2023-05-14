import './styles.css';
import { FaqQuestions } from '../SingleQuestion/SingleQuestion';

export const FaqQuestionsItems = () => {
  const questions = [
    {
      question: 'Jak mogę zapisać sie na szkolenie?',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
      // width: '40vw',
      // margin: '2em 0em',
      // boxSizing: 'border-box',
      // padding: '18px 24px',
      // backgroundColor: '#FFFFFF',
      // borderLeft: '5px solid #C8CBD1',
      // borderRadius: '8px',
      // filter:
      //   'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.07)) drop-shadow(0px 3px 46px rgba(0, 0, 0, 0.06))',
    },
  ];
  return (
    <div>
      {questions.map((el) => (
        <FaqQuestions
          question={el.question}
          answer={el.answer}
          // width={el.width}
          // margin={el.margin}
          // boxSizing={el.boxSizing}
          // padding={el.padding}
          // backgroundColor={el.backgroundColor}
          // borderLeft={el.borderLeft}
          // borderRadius={el.borderRadius}
          // filter={el.filter}
        />
      ))}
    </div>
  );
};
