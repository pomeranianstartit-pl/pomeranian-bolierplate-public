export const PlaygroundView = () => {
  const arrayWithSymbols = [
    {
      id: 1,
      //  hasClicked: false,
    },
    {
      id: 2,
      //  hasClicked: false,
    },
    {
      id: 3,
      //  hasClicked: false,
    },
    {
      id: 4,
      //  hasClicked: false,
    },
    {
      id: 5,
      // hasClicked: false,
    },
    {
      id: 6,
      // hasClicked: false,
    },
    {
      id: 7,
      //  hasClicked: false,
    },
    {
      id: 8,
      // hasClicked: false,
    },
    {
      id: 9,
      //  hasClicked: false,
    },
    {
      id: 10,
      //hasClicked: false,
    },
    {
      id: 11,
      //hasClicked: false,
    },
    {
      id: 12,
      //hasClicked: false,
    },
    {
      id: 13,
      //hasClicked: false,
    },
    {
      id: 14,
      //hasClicked: false,
    },
    {
      id: 15,
      //hasClicked: false,
    },
    {
      id: 16,
      //hasClicked: false,
    },
  ];

  return (
    <div>
      <div className="mg-stage">
        {arrayWithSymbols.map((element) => {
          return <div className="mg-stage-cell"></div>;
        })}
      </div>
    </div>
  );
};
