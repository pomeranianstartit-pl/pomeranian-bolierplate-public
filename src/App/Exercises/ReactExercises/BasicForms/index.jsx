import { useState } from 'react';

export const Exercise = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    gender: '',
    password: '',
    agreements: false,
    pets: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, 'form data');
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  //   const simpleReg = /^(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^wds:])([^s]){8,16}$/;

  return (
    <div>
      <h1>Formularz przykładowy!</h1>

      <form onSubmit={handleSubmit}>
        {/* INPUT - TEXT */}
        <div>
          <label htmlFor="name">Imię</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div>
          <label htmlFor="surname">Nazwisko</label>
          <input
            id="surname"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* RADIO GROUP */}
        <div>
          <label>Płeć</label>
          <div>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              onChange={handleFormChange}
              checked={formData.gender === 'female'}
            />
            <label htmlFor="female">Kobieta</label>
          </div>

          <div>
            <input
              id="men"
              type="radio"
              name="gender"
              value="men"
              onChange={handleFormChange}
              checked={formData.gender === 'men'}
            />
            <label htmlFor="men">Mężczyzna</label>
          </div>

          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="other"
              onChange={handleFormChange}
              checked={formData.gender === 'other'}
            />
            <label htmlFor="other">Inna</label>
          </div>

          {/* INPUT - password */}
          <div>
            <label htmlFor="password">Hasło</label>
            <input
              pattern="^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$"
              id="password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
          </div>
        </div>

        {/* INPUT - checkbox */}
        <div>
          <input
            id="agreements"
            type="checkbox"
            name="agreements"
            checked={formData.agreements}
            onChange={handleFormChange}
            required
          />
          <label htmlFor="agreements">Zgody*</label>
        </div>

        <div>
          <label htmlFor="pets">Zwierzęta:</label>
          <select id="pets" name="pets" onChange={handleFormChange} required>
            <option value="">Wybierz zwierzę</option>
            <option value="dog">Pies</option>
            <option value="cat">Kot</option>
            <option value="snake">Wąż</option>
          </select>
        </div>

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};
