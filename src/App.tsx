import { Suspense, useLayoutEffect, useMemo, useState, lazy } from "react";
import { useLang } from "./LangHandler";

const options = {
  rootMargin: "-150px",
};

const ThreeDee = lazy(() =>
  import("./ThreeDee").then((module) => ({ default: module.ThreeDee }))
);

function App() {
  const { isHu } = useLang();
  const [visible, setVisible] = useState(true);

  const observer = useMemo(() => {
    return new IntersectionObserver((e: IntersectionObserverEntry[]) => {
      setVisible(e[0].isIntersecting);
    }, options);
  }, []);

  useLayoutEffect(() => {
    observer.observe(document.querySelector(".threedee")!);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="threedee">
      {visible && (
        <Suspense>
          <ThreeDee />
        </Suspense>
      )}
      <div className="main">
        <h1>Lucia & Márk</h1>
        <h2>{isHu ? "2023.04.22" : "22.04.2023"}</h2>
        <p>
          {isHu ? (
            <>
              Református templom
              <br />
              Losonc 14:00
            </>
          ) : (
            <>
              Reformovaný kostol
              <br />v Lučenci o 14:00
            </>
          )}
        </p>
      </div>
    </section>
  );
}

export default App;
