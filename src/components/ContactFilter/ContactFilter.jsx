import { useDispatch, useSelector } from 'react-redux';
import { Label } from './ContactFilter.styled';
import { changeFilter } from 'redax/filterSlice';

export const ContactFilter = ({ title }) => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Label>
      {title}
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </Label>
  );
};
