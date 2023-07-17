import './styles.css';

import { QuestionAndAnswear } from '../Components/QuestionAndAnswear/QuestionAndAnswear';

export function FAQ() {
  const QUESTIONS = [
    {
      question: 'Pytanie1',
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, enim molestias. Molestiae obcaecati amet, maiores mollitia impedit temporibus perferendis? Et architecto nulla quos labore suscipit necessitatibus similique, eaque explicabo eos?m ',
    },

    {
      question: 'Pytanie2',
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, enim molestias. Molestiae obcaecati amet, maiores mollitia impedit temporibus perferendis? Et architecto nulla quos labore suscipit necessitatibus similique, eaque explicabo eos?',
    },
    {
      question: 'Pytanie3',
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, enim molestias. Molestiae obcaecati amet, maiores mollitia impedit temporibus perferendis? Et architecto nulla quos labore suscipit necessitatibus similique, eaque explicabo eos? ipsum',
    },
  ];

  return (
    <div>
      {QUESTIONS.map((el) => (
        <QuestionAndAnswear question={el.question} answer={el.answer} />
      ))}
    </div>
  );
}
