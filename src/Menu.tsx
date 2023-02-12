import { useLang } from "./LangHandler";

export const Menu = () => {
  const { isHu } = useLang();

  return (
    <section id="menu" className="section">
      <h1>{isHu ? "Menü" : "Menu"}</h1>
      <h2>{isHu ? "Fehér Hattyú étterem" : "Reštaurácia Biela Labuť"}</h2>
      <span>
        {isHu
          ? "Bruschetta paradicsommal, fokhagymával és olívaolajjal"
          : "Bruschetta s paradajkami, cesnakom a olivovým olejom"}
      </span>
      <hr />
      <span>
        {isHu
          ? "Marha konsommé májgaluskával és zöldségekkel"
          : "Hovädzie consommé s pečeňovými haluškami a zeleninou"}
      </span>
      <hr />
      <span>
        {isHu
          ? "Cordon bleu és sertés szűzpecsenye medalionok, rizs és sült burgonya"
          : "Cordon bleu a medailónky z panenky, ryža a opekané zemiaky"}
      </span>
      <hr />
      <span>
        {isHu
          ? "Mascarpone krém friss apró gyümölccsel és süteménymorzsával tálalva"
          : "Mascarpone krém podávaný s čerstvým drobným ovocím a cookies mrveničkou"}
      </span>
    </section>
  );
};
