import Head from "next/head";
// import { useEffect, useState } from "react";

const ReviewsPage = () => {
  // const [reviews, setReviews] = useState();
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/comments"
  //     );
  //     const data = await response.json();

  //     setRewiews(data);
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <Head>
        <title>Отзывы наших клиентов</title>
        <meta name="title" content="Отзывы наших клиентов" />
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className="reviews">
          {!reviews &&
            reviews.slice(0, 20).map((r) => {
              return (
                <div key={r.id} className="review">
                  {r.id} ;{`${r.body.slice(0, 90)}...`}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default ReviewsPage;
