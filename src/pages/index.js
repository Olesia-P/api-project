/* eslint-disable @next/next/no-img-element */
import css from "./index.module.scss";
import {
  useGetRandomCatFactQuery,
  useLazyGetRandomCatFactQuery,
} from "../store/modules/apiSlice";
import { useEffect } from "react";

export default function Home() {
  // const { data: singleFactData = {} } = useGetRandomCatFactQuery();
  const [getRandomCatFact, { data: singleFactData = {} }] =
    useLazyGetRandomCatFactQuery();

  console.log(singleFactData);

  useEffect(() => {
    getRandomCatFact();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={css.container}>
      <div className={css.catFactContainer}>
        <img src="/img/note.png" alt="btgnh" />
        <div className={css.catFact}>{singleFactData.fact}</div>
      </div>
      <div className={css.stickersContainer}>
        <img src="/img/four-sticky.png" alt="btgnh" />
        <div className={css.showFactBtn} onClick={() => getRandomCatFact()}>
          show fact
        </div>
      </div>
    </div>
  );
}
