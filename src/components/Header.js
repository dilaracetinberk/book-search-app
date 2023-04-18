
function Header({handleSubmit, onChange, search}) {
 


  return (
    <div className="header">
      <div className="header-content">
        <h1>Book Search App</h1>
        <form className="header-form"
        onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Search Books"
            value={search}
            onChange={onChange}
            required
          />
          <button type="submit" className="form-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
