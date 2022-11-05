import { useState, useEffect } from "react";

export default function UseEffect() {
  const [times, setTimes] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTimes(times + 1);
    }, 1000);
  }, [times]);

  return (
    <section className="use-effect">
      <h1>Use Effect</h1>
      <p>Sekarang Sudah {times} Detik</p>
    </section>
  );
}
