import { AppRegistrationRounded } from '@mui/icons-material';
import { Header } from '../header';
import { Input } from '../input';
import { Label } from '../label';

export const CheckBoxOption = ({
  constants,
  name,
  headerText = '',
  labelText,
  register,
}) => {
  return (
    <>
      <Header children={headerText} />
      <Label children={labelText} />
      {constants.map((option, index) => (
        <Input
          key={index}
          type="checkbox"
          name={name}
          value={option.value}
          text={option.text}
          register={register}
        />
      ))}
    </>
  );
};
