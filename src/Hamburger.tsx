import { useCallback, useState } from "react";
import { useLang } from "./LangHandler";

export const Hamburger = () => {
  const { isHu } = useLang();
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
            <a onClick={toggle} href="#home">
              {isHu ? "Főoldal" : "Domov"}
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#info">
              {isHu ? "Információk" : "Informácie"}
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#menu">
              {isHu ? "Menü" : "Menu"}
            </a>
          </li>
          <li>
            <a onClick={toggle} href="#photos">
              {isHu ? "Fotók" : "Fotky"}
            </a>
          </li>
          <li>
            <a
              href={
                isHu ? "https://luciamark.love" : "https://hu.luciamark.love"
              }
            >
              {isHu ? "Szlovák verzió" : "Maďarská verzia"}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
