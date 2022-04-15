/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState } from "react";
import ErrorPage from "../../components/ErrorPage";
import Button from "../../components/Button";
import Head from "next/head";

function Tweet(props) {
  const data = props.data.data;
  const { query } = useRouter();
  return (
    <>
			<Head>
				<title>Tweet search with ID</title>
			</Head>
      {data ? (
        <div>
          <div className="text-center max-w-[750px] my-0 mx-auto">
            <h1 className=" text-6xl leading-tight text-center font-bold font-sans mt-16">
              Result of searching the post ID of{" "}
              <span className="text-blue-400">{query.singleSearchID}</span>
            </h1>
          </div>

          <div className="max-w-[800px] text-center mx-auto my-0 mt-6">
            <div className="max-w-[800px] flex justify-center">
              {data.entities && data.entities.urls[0].images ? (
                <img src={data.entities.urls[0].images[0].url} alt="img" />
              ) : (
                <p className="text-2xl">Title</p>
              )}
            </div>
            <div className="text-left mt-3">
              <p className="text-blue-400 text-center mb-2">{data.text}</p>
              {data.entities ? (
                <p>{data.entities.urls[0].description}</p>
              ) : (
                <p> No description available for this Tweet</p>
              )}
              {data.entities && data.entities.urls[0].unwound_url ? (
                <p>
                  Additional{" "}
                  <a
                    className="text-blue-400"
                    target="_blank"
                    rel="noreferrer"
                    href={data.entities.urls[0].unwound_url}
                  >
                    Link
                  </a>
                </p>
              ) : (
                <></>
              )}
              <span>
                Created At:{" "}
                <span className="text-blue-400">{data.created_at}</span>
              </span>
              <p>
                Publisher id:{" "}
                <span className="text-blue-400">{data.author_id}</span>
              </p>
            </div>
          </div>
          <div className="mt-5 text-center">
            <Button link="/singleSearch" content="Search another one!" />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}

export default Tweet;

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.twitter.com/2/tweets/${context.query.singleSearchID}?tweet.fields=author_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,text`,
    {
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAABHQbAEAAAAAY85AM96DsgY204w%2FFVo6W33IU0k%3DkZi6sFSUrxtjz1FnwQFSgKNvY7B7rPza35xPceJ5ujxaNQ6F7s"
      }
    }
  );
  const data = await res.json();

  return {
    props: { data: data }
  };
}
