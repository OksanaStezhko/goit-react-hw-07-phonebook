import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { changeFilter } from '../../redux/contactActions';
import { getFilter } from '../../redux/contactSelectors';

import Filter from './Filter';

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: ({ currentTarget }) => {
      return dispatch(changeFilter(currentTarget.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
