import Rank from "../container/Rank/Rank";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import axios from "axios";

//todo : 날짜 utils

type BoxOfficeResult = {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList: [
    {
      rnum: string;
      rank: string;
      rankInten: string;
      rankOldAndNew: string;
      movieCd: string;
      movieNm: string;
      salesAmt: string;
      salesShare: string;
      salesInten: string;
      salesChange: string;
      salesAcc: string;
      audiCnt: string;
      audiInten: string;
      audiAcc: string;
      scrnCnt: string;
      showCnt: string;
    }
  ];
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const BoxOfficeData = await axios.get<BoxOfficeResult>(
    `${process.env.NEXT_PUBLIC_Chart_URL}&targetDt=20230123`
  );

  return {
    props: {
      BoxOfficeData: BoxOfficeData.data,
      // MovieData: MovieData.data,
    },
  };
};

export default Rank;
