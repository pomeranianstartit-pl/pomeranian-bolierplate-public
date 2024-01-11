export function BusinessCard({ firstname, position, mail, phone }) {
  return (
    <div className="Business_card">
      <p className="BC-b ">
        <span className="BC-cr">Masz pytania?</span>
        <p className="BC-b">Nasz specjalista chętnie Ci pomoże.</p>
      </p>
      <p className="BC-mt326">{firstname}</p>
      <p className="BC-cr BC-mt0">{position}</p>
      <p className=" BC-mt11">{mail}</p>
      <p className="BC-lh3575 BC-mt0 ">{phone}</p>
    </div>
  );
}
