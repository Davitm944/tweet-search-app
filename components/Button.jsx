import Link from 'next/link';

function Button(props) {
	return (
    <div className='px-7 py-3 mx-6 bg-blue-400 inline rounded-md text-gray-100 hover:bg-blue-700 transition-all ease-in-out  duration-200'>
		<Link href={props.link}>
			<a>{props.content}</a>
		</Link>
    </div>
	);
}

export default Button;
