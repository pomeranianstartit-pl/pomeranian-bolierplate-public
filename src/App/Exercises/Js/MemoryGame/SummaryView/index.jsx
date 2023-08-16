export const SummaryView = ({ myTime, amount }) => {
  return (
    <div className="mg-summary">{`Gratulację! Wszystkie pary zostały odnalezione w ${myTime} sekund, przy użyciu ${amount} ruchów!`}</div>
  );
};
