import './Checkboxes.css';

export function Checkboxes({ list, onChange }) {
  console.log('checkbox list: ', list);

  function handleClick(fieldName, isChecked) {
    onChange(fieldName, !isChecked);
  }

  return list.map((item) => {
    return (
      <div
        key={item.value}
        className="checkboxes__item"
        onClick={() => handleClick(item.value, item.isChecked)}
      >
        <div
          className={`checkboxes__item__check-mark ${
            item.isChecked ? 'checkboxes__item__check-mark--checked' : ''
          }`}
        >
          {item.isChecked && <>&#10003;</>}
        </div>
        {item.label}
      </div>
    );
  });
}
