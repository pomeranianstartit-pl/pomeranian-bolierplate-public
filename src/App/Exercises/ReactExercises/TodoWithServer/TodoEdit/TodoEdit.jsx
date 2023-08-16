export function TodoEdit(handleFetchTodoData, setEditingMode) {

    return (
        <div className="todo-form">
            <div className="todo-form__field">
                <label className="todo-form__field__label">Tytuł</label>
                <input
                    type="text"
                    placeholder="Kup ser"
                //   className={
                //     titlePassLength
                //       ? 'todo-form__field__input--ok'
                //       : 'todo-form__field__input--error'
                //   }
                //   value={title}
                //   onChange={(event) => {
                //     setTitle(event.target.value);
                //     resetSuccessMessage();
                //   }}
                />
                {/* {!titlePassLength && (
          <p className="todo-form__field__warning">Za duża liczba znaków</p>
        )} */}
            </div>
            <div className="todo-form__field">
                <label className="todo-form__field__label">Treść</label>
                <textarea
                    placeholder="Kup ser w biedronce"
                    rows={10}
                    cols={66}
                //   value={note}
                //   onChange={(event) => {
                //     setNote(event.target.value);
                //     resetSuccessMessage();
                //   }}
                />
                {/* {!notePassLength && (
          <p className="todo-form__field__warning">Za duża liczba znaków</p>
        )} */}
                {/* </div>
      {isInProgress && <p>Zapisywanie to do...</p>}
      {isSuccess && (
        <p className="todo-form__success-message">
          Todo "{prevTitle}" dodało się!
        </p>
      )} */}
            </div>
            <button
                className="big-button"
                onClick={() => {
                    setEditingMode(false)
                    handleFetchTodoData()
                }}
            >
                COFNIJ
            </button>
        </div>
    );
}
