import { Suspense, useLayoutEffect, useMemo, useState, lazy } from "react";

const options = {
  rootMargin: "-150px",
};

const ThreeDee = lazy(() =>
  import("./ThreeDee").then((module) => ({ default: module.ThreeDee }))
);

function App() {
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
    <section id="domov" className="threedee">
      {visible && (
        <Suspense>
          <ThreeDee />
        </Suspense>
      )}
      <div className="main">
        <h1>Lucia & Márk</h1>
        <h2 style={{ marginTop: 0 }}>22.04.2023</h2>
        <p>
          Reformovaný kostol <br />v Lučenci o 14:00
        </p>
      </div>
    </section>
  );
}

export default App;
