import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/Button'

function UserSearch() {
	const [ query, setQuery ] = useState('');

	return (
		<div>
			<Head>
				<title>Tweet search by username</title>
			</Head>
			<div className='flex justify-center'>
				<div className='mt-12 text-center'>
					<h1 className='text-6xl leading-tight text-center font-bold font-sans max-w-[730px] mx-auto my-0'>
						Search for certain user by Twitter Handle (username)
					</h1>
					<span className='text-blue-400'>
						A Twitter handle, which is commonly known as a username, is the name you use to register on Twitter.
						Example: {' '}
						<a href='https://twitter.com/BBCWorld' target='_blank' rel='noreferrer'>
							https://twitter.com/<b>BBCWorld</b>
						</a>
					</span>
				</div>
			</div>

      <div className='flex justify-center mt-4'>
				<input
					type='text'
					placeholder='Type any username'
					className='w-[300px] border-2 border-blue-400 pl-1 py-2 mr-[-30px]'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{
					query ? <Button link={`/search/userSearch/${query}`} content='Submit' /> :
					<Button link={'/userSearch'} content='Submit' />}
			</div>
			{
				!query ? <p className='text-center text-red-500 mt-3'>{`This field can't be empty!`}</p> :
				<p className='mt-11' />}
			<div className='text-center mt-7'>
				<Button link={'/'} content='Go to main page' />
			</div>
		</div>
	);
}

export default UserSearch;
