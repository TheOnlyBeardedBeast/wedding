import { useLang } from "./LangHandler";

export const Photos = () => {
  const { isHu } = useLang();

  return (
    <section id="photos" className="section">
      <h1>{isHu ? "Fotók" : "Fotky"}</h1>
      <h2>
        {isHu
          ? "A fotók az esküvő után lesznek elérhetőek"
          : "Fotky budú dostupné po svadbe"}
      </h2>
    </section>
  );
};
