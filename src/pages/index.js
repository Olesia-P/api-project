/* eslint-disable @next/next/no-img-element */
import css from "./index.module.scss";
import { useGetRandomCatFactQuery } from "../store/modules/apiSlice";

export default function Home() {
  const { data: singleFactData } = useGetRandomCatFactQuery();

  console.log(singleFactData);

  return (
    <div className={css.container}>
      <div className={css.catFactContainer}>
        <img src="/img/note.png" alt="btgnh" />
        {/* <div className={css.catFact}>{fact}</div> */}
      </div>
      <div className={css.stickersContainer}>
        <img src="/img/four-sticky.png" alt="btgnh" />
        <div
          className={css.showFactBtn}
          // onClick={() => useGetRandomCatFactQuery()}
        >
          show fact
        </div>
      </div>
    </div>
  );
}
