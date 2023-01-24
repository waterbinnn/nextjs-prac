import classNames from "classnames/bind";
import styles from "./Rank.module.scss";
import RankCard from "./RankCard";

const cx = classNames.bind(styles);

const Rank = (props: any) => {
  const { BoxOfficeData, MovieData } = props;
  const chartData = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;

  return (
    <>
      <h1>Chart</h1>
      <section>
        <h2>Box Office Chart</h2>
        <div className={cx("rank-container")}>
          {chartData.map((data: any) => (
            <>
              <RankCard data={data} />
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Rank;
