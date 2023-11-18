import { useState } from 'react';
import './styles.css';

export const Exercise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    pet: '',
    agreements: false,
  });

  const handleChangeValue = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(formData, 'formData');
  };

  return (
    <form onSubmit={handleFormSubmission}>
      {/* Nazwa użytkownika */}
      <div className="inputField">
        <label htmlFor="name">Username</label>
        <input
          minLength={10}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChangeValue}
          required
        />
      </div>

      {/* Nazwa użytkownika */}
      <div className="inputField">
        <label htmlFor="email">Email</label>
        <input
          // validate by pattern = email
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeValue}
          disabled={formData.name.length < 10}
          required
        />
      </div>

      {/* Hasło */}
      <div className="inputField">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangeValue}
          disabled={formData.name.length < 10}
          required
        />
      </div>

      {/* Płeć */}
      <div className="inputSelect">
        <div className="inputField">
          <input
            type="radio"
            id="female"
            name="gender"
            checked={formData.gender === 'female'}
            value={'female'}
            onChange={handleChangeValue}
          />
          <label htmlFor="female">Female</label>
        </div>

        <div className="inputField">
          <input
            type="radio"
            id="male"
            name="gender"
            checked={formData.gender === 'male'}
            value="male"
            onChange={handleChangeValue}
          />
          <label htmlFor="male">Male</label>
        </div>

        <div className="inputField">
          <input
            type="radio"
            id="other"
            name="gender"
            checked={formData.gender === 'other'}
            value="other"
            onChange={handleChangeValue}
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>

      <div>
        <label htmlFor="pet">Choose a pet:</label>

        <select
          name="pet"
          id="pet"
          value={formData.pet}
          onChange={handleChangeValue}
        >
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
          <option value="mouse">Mouse</option>
        </select>
      </div>

      <div>
        <label htmlFor="agreements">Do you accept agreements?</label>
        <input
          type="checkbox"
          id="agreements"
          name="agreements"
          checked={formData.agreements}
          onChange={handleChangeValue}
          required
        />
      </div>

      <div>
        <input type="submit" name="Send" />
      </div>
    </form>
  );
};

// [...event.target.options].filter(o => o.selected).map(o => o.value)