import { useState } from "react";

export default function UseState() {
  const [counter, setCounter] = useState(0);

  if (counter < 0) {
    alert("state tidak dapat dikurangi lagi");
    setCounter(0);
  }
  return (
    <section className="counter-container">
      <h1>UseState</h1>
      <h2>Nilai state counter</h2>
      <p>{counter}</p>
      <div className="button">
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Tambah State
        </button>
        <button type="button" onClick={() => setCounter(counter - 1)}>
          Kurangi State
        </button>
        <button type="button" onClick={() => setCounter(0)}>
          Reset State
        </button>
      </div>
    </section>
  );
}
