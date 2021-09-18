import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I am currently a student majoring in Computer Science and an Front End Engineer Intern at Sagara
					Technology. Throughout my university experience, from making my first PyGame, making MySQL
					databases, creating recognition systems, to building web applications, and nothing makes me happier
					than seeing the program runs without any errors. I am looking forward to further enhance my skills
					and also my career in the computer science field.
				</p>
				<p>
					(This is a sample Next.js blog website - you can contact me on{' '}
					<a href="https://www.linkedin.com/in/jason-sianandar-1a9a40202/">LinkedIn</a>, or you can also check
					my <a href="https://github.com/JSianandar">Github Portfolio</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
