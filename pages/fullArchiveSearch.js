import Head from 'next/head';
import React, { useState } from 'react';
import Button from '../components/Button.jsx';

function FullArchiveSearch() {
	const [ query, setQuery ] = useState('');
	return (
		<div>
			<Head>
				<title>Twitter archive search</title>
			</Head>
			<div className='flex justify-center'>
				<div className='mt-12 text-center'>
					<h1 className='text-6xl leading-tight text-center font-bold font-sans max-w-[800px]'>
						Search for tweet using word or expression (keyword, hashtag, etc.)
					</h1>
				</div>
			</div>
			<div className='flex justify-center mt-4'>
				<input
					type='text'
					placeholder='Type any word'
					className='w-[300px] border-2 border-blue-400 pl-1 py-2 mr-[-30px]'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				{
					query ? <Button link={`/search/archiveSearch/${query}`} content='Submit' /> :
					<Button link={'/fullArchiveSearch'} content='Submit' />}
			</div>
			{
				!query ? <p className='text-center text-red-500 mt-3'>{`This field can't be empty!`}</p> :
				<p className='mt-11 mb-16' />}
			<div className='text-center mt-7'>
				<Button link={'/'} content='Go to main page' />
			</div>
		</div>
	);
}

export default FullArchiveSearch;
