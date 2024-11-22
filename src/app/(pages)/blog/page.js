import Head from 'next/head';
import React from 'react';

const Blog = () => {
    return (<>
        <Head>
            <title>Our Blog - Stay Updated with the Latest News</title>
            <meta name="description" content="Read our latest blog posts on web development, design, and business strategies. Stay updated with valuable insights." />
        </Head>
        <div className="bg-gray-100 text-gray-800 font-sans leading-relaxed tracking-wide">

            {/* Blog Header Section */}
            <header className="text-center py-20 bg-background dotted-background text-white">
                <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                <p className="mt-4 text-xl max-w-2xl mx-auto">
                    Insights, tips, and stories from our team to help your business thrive.
                </p>
            </header>

            {/* Blog Posts Section */}
            <section className="container mx-auto px-6 py-16 dark:bg-gray-900 dark:text-gray-300">
                <h2 className="text-4xl font-semibold mb-8 text-center">Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Blog Post 1 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">The Importance of SEO for Your Business</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Discover how search engine optimization can improve your online presence and drive more traffic to your website.
                            SEO is a crucial part of your digital marketing strategy, allowing you to reach a broader audience and convert visitors into customers.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Effective SEO strategies involve keyword research, on-page optimization, and building high-quality backlinks.
                            By focusing on these areas, you can enhance your website's visibility in search engine results and stay ahead of your competition.
                        </p>
                    </article>

                    {/* Blog Post 2 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">Understanding the MERN Stack</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            A comprehensive guide to the MERN stack, its components, and how to use it to build modern web applications.
                            MERN stands for MongoDB, Express, React, and Node.js, each playing a critical role in the full-stack development process.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            With the MERN stack, developers can build dynamic, responsive web applications efficiently, using JavaScript throughout the entire stack.
                            This consistency reduces context switching and improves development speed and efficiency.
                        </p>
                    </article>

                    {/* Blog Post 3 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">Getting Started with Next.js</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Explore the benefits of Next.js, including server-side rendering and static site generation, for building React applications.
                            Next.js enhances the performance of React apps by allowing developers to pre-render pages at build time or request time, improving loading times and SEO.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Additionally, Next.js provides features like API routes, image optimization, and automatic code splitting, making it a powerful choice for modern web applications.
                        </p>
                    </article>

                    {/* Blog Post 4 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">An Introduction to DevOps</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Learn about DevOps practices, tools, and how it bridges the gap between development and operations teams.
                            DevOps aims to streamline the software development lifecycle by integrating development and operations teams to improve collaboration and efficiency.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Key DevOps practices include continuous integration, continuous delivery, and infrastructure as code, all contributing to faster release cycles and higher quality software.
                        </p>
                    </article>

                    {/* Blog Post 5 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">Why Your Business Needs a Website</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            In today’s digital age, having a website is essential for any business. A website serves as your online storefront, providing customers with information about your products and services 24/7.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Additionally, a well-designed website can enhance your brand's credibility, improve customer engagement, and drive sales. Investing in a professional website is a smart move for any business owner.
                        </p>
                    </article>

                    {/* Blog Post 6 */}
                    <article className="bg-white dark:bg-background rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold mb-2">Digital Marketing Strategies</h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            Explore effective digital marketing strategies to enhance your online presence and reach potential customers. Digital marketing encompasses various tactics, including content marketing, social media marketing, email marketing, and more.
                        </p>
                        <p className="text-gray-700 dark:text-gray-400 mb-4">
                            By leveraging these strategies, businesses can build brand awareness, engage with customers, and drive traffic to their websites, ultimately leading to increased conversions and revenue.
                        </p>
                    </article>
                </div>
            </section>

            {/* Comments Section */}
            {/* <section className="container mx-auto px-6 py-10">
                <h3 className="text-3xl font-semibold mb-4">Leave a Comment</h3>
                <div className="bg-white dark:bg-background p-6 rounded-lg shadow-md">
                    <textarea 
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600" 
                        rows="4" 
                        placeholder="Write your comment here..."
                    />
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300">
                        Submit
                    </button>
                    </div>
            </section> */}
        </div>
    </>);
};

export default Blog;
