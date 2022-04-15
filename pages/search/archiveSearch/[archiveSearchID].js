import React from 'react';
import { useRouter } from "next/router";
import ErrorPage from '../../../components/ErrorPage';
import Button from '../../../components/Button';
import Head from 'next/head';


function Archive(props) {
	const data = props.data.data;
  const { query } = useRouter();

	return (
		<>
		<Head>
			<title>Twitter archive search</title>
		</Head>
		{data ? (	
		<div>
			<div className='text-center max-w-[750px] my-0 mx-auto'>
				<h1 className=' text-6xl leading-tight text-center font-bold font-sans mt-16'>
					Result of searching the keyword of <span className='text-blue-400'>{query.archiveSearchID}</span>
				</h1>
			</div>
			<div className='m-12'>
				{data.map((tweet) => {
					return (
					<ul key={tweet.id} className='border-b-2 border-blue-400'>
						<li>{tweet.text}</li>
						<li><span className='text-blue-400'>Created at:</span> {tweet.created_at}</li>
						<li><span className='text-blue-400'>Creator ID:</span> {tweet.author_id}</li>
						<li><span className='text-blue-400'>Tweet ID: </span>{tweet.id}</li>
					</ul>
					) 
				})}
			</div>
			<div className="mt-3 mb-7 text-center">
            <Button link="/fullArchiveSearch" content="Search another one!" />
      </div>
		</div>) : <ErrorPage/>
		}
		</>
	);
}

export default Archive;

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.twitter.com/2/tweets/search/recent?max_results=30&tweet.fields=created_at&expansions=attachments.poll_ids,attachments.media_keys,author_id,geo.place_id,in_reply_to_user_id,referenced_tweets.id,entities.mentions.username,referenced_tweets.id.author_id&media.fields=duration_ms,height,media_key,non_public_metrics,organic_metrics,preview_image_url,promoted_metrics,public_metrics,type,url,width&place.fields=country,country_code,full_name,geo,id,name,place_type&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld&query=${context
			.query.singleSearchID}
    `,
		{
			headers : {
				Authorization :
					'Bearer AAAAAAAAAAAAAAAAAAAAABHQbAEAAAAAY85AM96DsgY204w%2FFVo6W33IU0k%3DkZi6sFSUrxtjz1FnwQFSgKNvY7B7rPza35xPceJ5ujxaNQ6F7s'
			}
		}
	);
	const data = await res.json();

	return {
		props : { data: data }
	};
}
