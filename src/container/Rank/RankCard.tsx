import classNames from "classnames/bind";
import styles from "./Rank.module.scss";
import Image from "next/image";

import axios from "axios";

import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const RankCard = (props: any) => {
  const { data } = props;

  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("");
  const [movieImg, setMovieImg] = useState("");

  const getData = async (title: string, date: string) => {
    try {
      const movieData = await axios.get(
        `${process.env.NEXT_PUBLIC_SEARCH_URL}&title=${title}&releaseDts=${date}${process.env.NEXT_PUBLIC_KEY}`
      );
      const data = movieData.data.Data[0].Result[0];
      setDirector(data.directors.director[0].directorNm);
      setActors(
        `${data.actors.actor[0].actorNm} | ${data.actors.actor[1].actorNm} | ${data.actors.actor[2].actorNm}`
      );
      setGenre(data.genre);
      setMovieImg(`${data.posters.split("|")[0]}`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData(data.movieNm, data.openDt.replaceAll("-", ""));
  }, [data]);

  return (
    <>
      <div className={cx("rank-wrap")} key={data.movieSeq}>
        <strong>{data.rank}</strong>
        {movieImg && (
          <Image
            className={cx("rank-img")}
            src={movieImg}
            alt={data.movieNm}
            width={250}
            height={350}
          />
        )}
        <dl className={cx("cont-wrap")}>
          <dt className={cx("cont-title", "visually-hidden")}>title</dt>
          <dd className={cx("title-en")}>{data.movieNm}</dd>
        </dl>
        <dl className={cx("cont-wrap")}>
          <dt className={cx("cont-title")}>Release</dt>
          <dd className={cx("cont-data")}>
            {data.openDt.replaceAll("-", ".")}
          </dd>
        </dl>
        <dl className={cx("cont-wrap")}>
          <dt className={cx("cont-title")}>Director</dt>
          <dd className={cx("cont-data")}>{director}</dd>
        </dl>
        <dl className={cx("cont-wrap")}>
          <dt className={cx("cont-title")}>Actors</dt>
          <dd className={cx("cont-data")}>{actors}</dd>
        </dl>
        <dl className={cx("cont-wrap")}>
          <dt className={cx("cont-title")}>Genre</dt>
          <dd className={cx("cont-data")}>{genre.replaceAll(",", " | ")}</dd>
        </dl>
      </div>
    </>
  );
};

export default RankCard;
