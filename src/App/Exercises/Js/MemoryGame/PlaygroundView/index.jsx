export const PlaygroundView = () => {
  const arrayWithSymbols = [
    {
      id: 1,
      char: 'A',
      hasClicked: false,
    },
    {
      id: 2,
      char: 'A',
      hasClicked: false,
    },
    {
      id: 3,
      char: 'C',
      hasClicked: false,
    },
    {
      id: 4,
      char: 'C',
      hasClicked: false,
    },
    {
      id: 5,
      char: 'E',
      hasClicked: false,
    },
    {
      id: 6,
      char: 'E',
      hasClicked: false,
    },
    {
      id: 7,
      char: 'H',
      hasClicked: false,
    },
    {
      id: 8,
      char: 'H',
      hasClicked: false,
    },
    {
      id: 9,
      char: '%',
      hasClicked: false,
    },
    {
      id: 10,
      char: '%',
      hasClicked: false,
    },
    {
      id: 11,
      char: '2',
      hasClicked: false,
    },
    {
      id: 12,
      char: '2',
      hasClicked: false,
    },
    {
      id: 13,
      char: '5',
      hasClicked: false,
    },
    {
      id: 14,
      char: '5',
      hasClicked: false,
    },
    {
      id: 15,
      char: '@',
      hasClicked: false,
    },
    {
      id: 16,
      char: '@',
      hasClicked: false,
    },
  ];

  //const shuffledArray = shuffleArray(arrayWithSymbols);

  return (
    <div>
      <div className="mg-stage">
        {arrayWithSymbols.map((element) => {
          return (
            <div key={element.id} className="mg-stage-cell">
              {element.char}
            </div>
          );
        })}
      </div>
    </div>
  );
};
