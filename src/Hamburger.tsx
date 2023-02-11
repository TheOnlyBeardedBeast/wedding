import { useCallback, useState } from "react";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((_open) => !_open);
  }, [setOpen]);

  return (
    <>
      <button
        onClick={toggle}
        className={open ? "hamburger open" : "hamburger"}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={open ? "navigation open" : "navigation"}>
        <ul>
          <li>
            <a onClick={toggle} href="#domov">
              Domov
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#info">
              Informácie
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#menu">
              Menu
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#fotky">
              Fotky
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
