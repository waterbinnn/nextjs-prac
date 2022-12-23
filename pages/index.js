import MeetupList from '../components/meetups/MeetupList';

const DUMY_MEETUPS = [
  {
    id: 'm1',
    image:
      'https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_1280.jpg',
    title: 'test1',
    adress: 'test adress',
  },
  {
    id: 'm2',
    image:
      'https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_1280.jpg',
    title: 'test1',
    adress: 'test adress',
  },
];

function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export const getStaticProps = async () => {
//   return {
//     props: {
//       meetups: DUMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// };
export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMY_MEETUPS,
    },
  };
};

export default HomePage;
