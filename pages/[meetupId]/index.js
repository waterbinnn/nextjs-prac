import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupPage() {
  return (
    <>
      <MeetupDetail
        image="https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_1280.jpg"
        title="title"
        address="address"
        description="description"
      />
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_1280.jpg',
        title: 'title',
        address: 'address',
        description: 'description',
      },
    },
  };
};

export default MeetupPage;
