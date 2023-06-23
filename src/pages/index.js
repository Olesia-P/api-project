import css from "./index.module.scss";
import { useGetRandomCatFactQuery } from "../store/modules/apiSlice";

export default function Home() {
  const { data: singleFactData } = useGetRandomCatFactQuery();

  return (
    <div className={css.container}>
      <div className={css.catFactContainer}>
        <img src="/img/note.png" />
        <div className={css.catFact}>{singleFactData.fact}</div>
      </div>
      <div className={css.stickersContainer}>
        <img src="/img/four-sticky.png" />
        <div
          className={css.showFactBtn}
          onCanPlayThrough={() => useGetRandomCatFactQuery()}
        >
          show fact
        </div>
      </div>
    </div>
  );
}
