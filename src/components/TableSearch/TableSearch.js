import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
      }

    return (
      <>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            onChange={valueChangeHandler}
            value={value}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              onClick={() => props.onSearch(value)}
            >
              Найти
            </button>
          </div>
        </div>

        <p className="text-center">
          Поиск покажет любые подходящие значения. Если совпадения нет, то все данные.
        </p>
        <p className="text-center">Чтобы отсортировать, нажмите на заголовок.</p>
        <p className="text-center">При клике на строку в конце страницы будет отображена детальная информация.</p>
      </>
    );
}