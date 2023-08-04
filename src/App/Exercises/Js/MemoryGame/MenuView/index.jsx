import { Button } from '../Button';
import { SelectButtons } from '../SelectButtons';
import { Menu } from '../Menu';

export const MenuView = () => {
  return (
    <div>
      <div className="mg-menu">
        <Menu label="LICZBA ELEMENTÓW">
          <SelectButtons
            options={[
              { value: 1, label: '8 elementów', isActive: true },
              { value: 2, label: '16 elementów', isActive: false },
              { value: 3, label: '20 elementów', isActive: false },
            ]}
          />
        </Menu>

        <Menu label="PRZYCISKI STERUJĄCE">
          <Button>Start</Button>
        </Menu>
      </div>
    </div>
  );
};
