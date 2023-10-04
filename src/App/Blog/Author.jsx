// arg - argument zwykle nazywany jako "props"
export function Author(arg) {
  return (
    <div>
      <p className="authName">{arg.name}</p>
      <p className="authPos">{arg.position}</p>
    </div>
  );
}
