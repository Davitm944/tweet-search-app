/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Head from 'next/head'; 

function singleSearch() {
	const [ query, setQuery ] = useState('');
	return (
		<div>
			<Head>
				<title>Tweet search with ID</title>
			</Head>
			<div className='flex justify-center'>
				<div className='mt-12 text-center'>
					<h1 className='text-6xl leading-tight text-center font-bold font-sans max-w-[890px]'>
						Search for certain tweet using tweet ID
					</h1>
					<span className='text-blue-400'>
						The tweet ID can be found on the url after you click on the tweet. Example: {' '}
						<a href='https://twitter.com/BBCWorld/status/1513848197269135360' target='_blank' rel='noreferrer'>
							https://twitter.com/BBCWorld/status/<b>1513848197269135360</b>
						</a>
					</span>
				</div>
			</div>

			<div className='flex justify-center mt-4'>
				<input
					type='text'
					placeholder='Type tweet ID'
					className='w-[300px] border-2 border-blue-400 pl-1 py-2 mr-[-30px]'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{
					query ? <Button link={`/search/${query}`} content='Submit' /> :
					<Button link={'/singleSearch'} content='Submit' />}
			</div>
			{
				!query ? <p className='text-center text-red-500 mt-3'>{`This field can't be empty!`}</p> :
				<p className='mt-11' />}
			<div className='text-center mt-2'>
				<h1 className='text-2xl text-blue-400'>{`ID's you can test`}</h1>
				<ul>
					<li>1513848197269135360</li>
					<li>1514971483893911555</li>
					<li>1514954272634454018</li>
				</ul>
			</div>
			<div className='text-center mt-7'>
				<Button link={'/'} content='Go to main page' />
			</div>
		</div>
	);
}

export default singleSearch;
