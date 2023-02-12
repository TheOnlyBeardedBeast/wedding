import { useLang } from "./LangHandler";

export const Info = () => {
  const { isHu } = useLang();

  return (
    <section id="info" className="section">
      <h1>{isHu ? "Információk" : "Informácie"}</h1>

      {isHu ? (
        <p>
          Aki nászunkra szép ajándékot adna,
          <br />
          A reánk szánt összeget tegye borítékba:
          <br /> A legtöbbet ezzel segít nekünk,
          <br /> Támogatva induló közös életünk.
        </p>
      ) : (
        <p>
          Milá hosťka, milý hosť,
          <br /> dávame vám na známosť,
          <br /> že pri svadobnom stole miesta je pre vás dosť.
          <br /> Nie tak pre vaše vecné dary,
          <br /> namiesto nich poteší nás peňažný dar, hoc aj malý.
        </p>
      )}

      <hr />

      <a
        target="_blank"
        href="https://www.google.com/maps/place/Kostol+Reformovanej+kres%C5%A5anskej+cirkvi/@48.3288048,19.66949,15z/data=!4m2!3m1!1s0x0:0xa294993e6a71932a?sa=X&ved=2ahUKEwj2-oud4ov9AhUbiv0HHe-zAUAQ_BJ6BAhvEAg"
      >
        <span>
          {isHu
            ? "Losonci Református templom"
            : "Kalvínský kostol (Kostol Reformovanej kresťanskej cirkvi)"}
        </span>
        <span>J. Kármána 64, 984 01 Lučenec</span>
      </a>
      <hr />
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Re%C5%A1taur%C3%A1cia+Biela+Labu%C5%A5/@48.3266423,19.6538985,15z/data=!4m2!3m1!1s0x0:0x4fb0c12594b5338e?sa=X&ved=2ahUKEwjVzqDd44v9AhXmXvEDHSefALcQ_BJ6BAh4EAg"
      >
        <span>{isHu ? "Fehér Hattyú étterem" : "Reštaurácia Biela Labuť"}</span>
        <span>Mestský park, 1707, 984 01 Lučenec</span>
      </a>
    </section>
  );
};
