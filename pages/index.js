import Button from '../components/Button';
import Head from 'next/head';

export default function Home() {
	return (
    <>
			<Head>
				<title>Twitter API in use</title>
			</Head>
		<div className='flex align-middle justify-center'>
			<div className='max-w-[890px] text-center'>
				<p className=' text-6xl leading-tight text-center font-bold font-sans mt-40'>
					Explore Twitter API, which is officialy available and can be found{' '}
					<a href='https://developer.twitter.com/en' target='blank' className='text-blue-400'>
						here
					</a>
				</p>
				<span className='block mt-5 font-medium text-gray-700'>
					Currnetly we offer 2 ways of searching, but soon will be added more functionality.
				</span>
				<div className='mt-8'>
					<Button content='Single tweet search' link='/singleSearch' />
					<Button content='Full-archive search' link='/fullArchiveSearch' />
				</div>
			</div>
		</div>
    </>
	);
}
