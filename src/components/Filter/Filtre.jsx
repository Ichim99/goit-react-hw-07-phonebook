import PropTypes from 'prop-types';
import style from './Filter.module.css';


export const Filter = ({filter, addFilter}) => (
<div className={style.filter}>
        <input
          type="text"
          name="filter"
          className={style.filterInput}
          value={filter}
          onChange={addFilter}
          placeholder="Enter name"
        />
      </div>
);

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    addFilter: PropTypes.func,
  };