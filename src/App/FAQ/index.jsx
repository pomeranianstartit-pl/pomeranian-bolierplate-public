import './styles.css';
import { SingleQuestion } from './SingleQuestion';
import togglearrow from '/root/projects/pomeranian-bolierplate-public/src/App/Images/toggle-arrow.svg';

export function FAQ() {
  const Questions = [
    {
      question: 'Jak mogę zapisać się na szkolenie?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, culpa. Animi quisquam est dolores vero reprehenderit fugiat repellendus, ut aliquam. Magnam perferendis id sapiente. Nulla quos ab nemo repellat ducimus.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie2?',
      answer:
        '222Lorem ipsum dolor s222222it amet, consectetur adipisicing elit. Veritatis, culpa. Animi quisquam est dolores vero reprehenderit fugiat repellendus, ut aliquam. Magnam perferendis id sapiente. Nulla quos ab nemo repellat ducimus.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie3?',
      answer:
        '3333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, culpa. Animi quisquam est dolores vero reprehenderit fugiat repellendus, ut aliquam. Magnam perferendis id sapiente. Nulla quos ab nemo repellat ducimus.',
    },
    {
      question: 'Jak mogę zapisać się na szkolenie4?',
      answer:
        '4444Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, culpa. Animi quisquam est dolores vero reprehenderit fugiat repellendus, ut aliquam. Magnam perferendis id sapiente. Nulla quos ab nemo repellat ducimus.',
    },
  ];
  return (
    <div class="faq" className="faq-whole">
      {Questions.map((el) => (
        <SingleQuestion question={el.question} answer={el.answer} />
      ))}
    </div>
  );
}
