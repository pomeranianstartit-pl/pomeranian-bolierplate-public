import { useDispatch, useSelector } from 'react-redux';
import { selectProfile, toggleProfile } from '../../../Store/testSlice';
import './styles.css';

export const CardDetails = () => {
  const profile = useSelector(selectProfile);

  return (
    <div>
      CardDetails {profile}
      {profile === 'business' && <div>Company Logo</div>}
    </div>
  );
};

export const Accounts = () => {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  return (
    <div>
      Accounts
      <div>Current profile: {profile}</div>
      <button onClick={() => dispatch(toggleProfile())}>Change profile</button>
    </div>
  );
};

export const Cards = () => {
  return (
    <div>
      Cards <CardDetails />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Accounts />
      <Cards />
    </div>
  );
};

export const ReduxTest = () => {
  // business, retail
  return (
    <div className="test-redux">
      Main Page
      <Dashboard />
    </div>
  );
};
