/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from '../../../components/ErrorPage';
import Button from '../../../components/Button';

function User(props) {
	const data = props.data.data;
	const { query } = useRouter();
	return (
    <>
    {data ? 
		(<div>
			<Head>
				<title>Tweet search by username</title>
			</Head>
			<div className='text-center max-w-[750px] my-0 mx-auto'>
				<h1 className=' text-6xl leading-tight text-center font-bold font-sans mt-16'>
					Result of searching the username of <span className='text-blue-400'>{query.userSearchID}</span>
				</h1>
			</div>
			<div className='mt-12 flex justify-center'>
				<div className='flex'>
					<div className='w-[100px] '>
						{
							data.profile_image_url ? <img src={data.profile_image_url} alt='img' className='w-full' /> :
							<p>This user have not profile photo</p>}
					</div>
					<div className='pl-12'>
            <p>Username: <span className='text-blue-400'>{data.username}</span></p>
            <p>User ID: <span className='text-blue-400'>{data.id}</span></p>
            {data.location ? 
            <p>Location: <span className='text-blue-400'>{data.location}</span></p> : <p>Location: <span className='text-red-500'>Unknown</span></p>}
            <p>Name: <span className='text-blue-400'>{data.name}</span></p>
            {data.description ? 
            <p>Description: <span className='text-blue-400'>{data.description}</span></p> : <></>}
            <p>Created At: <span className='text-blue-400'>{data.created_at}</span></p>
          </div>
				</div>
			</div>
      <div className='text-center mt-7'>
			  <Button link={'/'} content='Go to main page' />
			</div>
		</div>) : <ErrorPage/>}
    </>
	);
}

export default User;

export async function getServerSideProps(context) {
	const res = await fetch(
		`https://api.twitter.com/2/users/by/username/${context.query
			.userSearchID}?user.fields=created_at,description,location,profile_image_url`,
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

// {context.query.singleSearchID}
