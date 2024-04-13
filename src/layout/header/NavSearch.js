import { useState, useEffect, useRef } from "react";

const NavSearch = () => {
  const [toggle, setToggle] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        !event.target.classList.contains("fa-search")
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-search py-10">
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        ref={searchRef}
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setToggle(false);
        }}
        className={toggle ? "" : "hide"}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </div>
  );
};
export default NavSearch;
