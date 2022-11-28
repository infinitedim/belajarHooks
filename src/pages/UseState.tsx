import type { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import type { SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import type { ReactSweetAlert } from "sweetalert2-react-content";

export default function UseState(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const MySwal: typeof Swal & ReactSweetAlert = withReactContent(Swal);

  useEffect((): void => {
    if (counter < 0) {
      MySwal.fire({
        title: <h2>State Tidak Bisa Lebih Kecil dari 0</h2>,
        icon: "error",
        background: "#102048",
        confirmButtonText: "Tutup Pop-up",
      });
      setCounter(0);
    }
  }, [counter]);

  return (
    <section className="use-state">
      <h1>UseState & UseEffect</h1>
      <h2>Nilai state counter</h2>
      <p>{counter}</p>
      <div className="button">
        <button
          type="button"
          onClick={(): void => setCounter(counter + 1)}
        >
          Tambah State
        </button>
        <button
          type="button"
          onClick={(): void => setCounter(counter - 1)}
        >
          Kurangi State
        </button>
        <button
          type="button"
          onClick={(): void | Promise<SweetAlertResult<any>> =>
            counter === 0
              ? MySwal.fire({
                  icon: "error",
                  title: <h2>State Sudah Direset</h2>,
                  background: "#102048",
                  confirmButtonText: "Tutup Pop-up",
                })
              : setCounter(0)
          }
        >
          Reset State
        </button>
      </div>
    </section>
  );
}
