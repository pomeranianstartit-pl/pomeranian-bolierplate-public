import './styles.css';

export const BandsData = (props) => {
  const { band, yearFormed, albums, mostFamousSong } = props;

  return (
    <div>
      {/* {'Testowy tekst czy go widać?'} */}
      {band}
      {yearFormed} {albums} {mostFamousSong}
    </div>
  );
};
