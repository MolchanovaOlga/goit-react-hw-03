import css from './SearchBox.module.css';

const SearchBox = ({ inputFilterVal, handleImputFilterVal }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={inputFilterVal}
        onChange={handleImputFilterVal}
      />
    </div>
  );
};

export default SearchBox;
