import { useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import allData from '../../json/data.json';
const SeenBlog = () => {
    const { blogLink } = useParams();
    const mainBlogs = allData.mainBlogs;
    const mainThreeBlogs = allData.mainBlogs.slice(0, 3)
    const seeSessionStorage = sessionStorage.getItem('seen');
    const [textCopied, setTextCopied] = useState(false)
    const SeenBlog = useMemo(() => {
        return seeSessionStorage ? JSON.parse(seeSessionStorage) : mainBlogs.find(blog => blog.blogLink === blogLink)
    }, [seeSessionStorage, blogLink, mainBlogs]);
    const addToSession = (blog) => {
        return sessionStorage.setItem('seen', JSON.stringify(blog))
    }
    window.scrollTo({
        top: 0,
    });
    const tweetContent = `${SeenBlog.blogDescription} 
    ${location} via 
    @AbdullahAmrz`
    const shareOnTwitter = () => {
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetContent)}`;
        window.open(
            tweetUrl,
            'Share on Twitter',
            'width=550,height=400,top=0,left=0'
        );
    };
    document.title = `${SeenBlog.blogDescription} | Dekks`
    return (
        <>
            <main className="px-[15%] my-24 tab:px-4">
                <div className="flex gap-4">
                    <div><img src={SeenBlog.userImg} alt={SeenBlog.userName} className="rounded-full w-12" /></div>
                    <div>
                        <h1 className="text-xl">{SeenBlog.userName}</h1>
                        <p className="text-[#a3a3a3]">
                            <span>{SeenBlog.blogDate} . </span> <span title={`Takes ${SeenBlog.blogReadTime} min to finish.`}>{SeenBlog.blogReadTime} min</span>
                        </p>
                    </div>
                </div>
                <section className="my-9">
                    <h1 className="article-txt text-[#a3a3a3]">
                        <span className="text-white">{SeenBlog.blogDescription}</span> {SeenBlog.blogIntro}
                    </h1>
                    <div className="my-20 text-xl px-[15%] mob:px-0">
                        <strong>{SeenBlog.blogData[0]}</strong>
                        <article className="text-[#a3a3a3] my-2">
                            {SeenBlog.blogData[1]}
                        </article>
                    </div>
                    <div className="my-20">
                        <div className="flex justify-center"><img src={SeenBlog.blogImgs[0]} alt={SeenBlog.blogIntro[0]} title={SeenBlog.blogImgs[1]} className="rounded-lg" /></div>
                        <p className="text-sm text-[#a3a3a3] text-center my-2">{SeenBlog.blogImgs[1]}</p>
                    </div>
                    <div className="my-20 text-xl px-[15%] mob:px-0">
                        <article className="my-6">
                            {SeenBlog.blogData[2]}
                        </article>
                        <article className="my-6">
                            {SeenBlog.blogData[3]}
                        </article>
                        <p className="my-1">
                            {SeenBlog.blogData[4]}

                        </p>
                        <p>
                            {SeenBlog.blogData[5]}
                        </p>
                        <div>
                            <p>{SeenBlog.blogItem}</p>
                            <a href="#" className="text-blue-400">{SeenBlog.blogItemLink}</a>
                        </div>
                    </div>
                </section>
            </main>
            <div className="flex justify-center gap-3">
                <button className="shareBtn" onClick={() => shareOnTwitter()}>
                    <img src="/icons/x.svg" alt="X-icon" />
                    Tweet
                </button>
                <button className="shareBtn" onClick={() => {
                    navigator.clipboard.writeText(location)
                    setTextCopied(true)
                    setTimeout(() => {
                        setTextCopied(false)
                    }, 3000)
                }}>
                    <img src="/icons/copy.svg" alt="copy-icon" />
                    Share
                </button>
            </div>
            <main className="px-[15%] tab:px-4 my-44">
                <section className="flex gap-4 my-12 tab:flex-col">
                    {
                        mainThreeBlogs.map(blog => (
                            <div key={blog.id} className={`relative p-6 rounded-xl h-[75dvh] w-1/3 tab:w-full blogBox ${blog.id === 0 ? 'text-black' : 'text-white'}`} style={{ backgroundImage: `url(${blog.blogImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <NavLink to={`/blog/${blog.blogLink}`} onClick={() => addToSession(blog)}>
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="flex relative w-full gap-3">
                                            <div><img src={blog.userImg} alt={blog.userName} title={blog.userName} className="rounded-full w-10" /></div>
                                            <div className="absolute top-1 blogData transition-all duration-300 opacity-0 left-14 ">
                                                <h2 className="font-semibold text-sm">{blog.userName}</h2>
                                                <p className="text-[#a3a3a3] text-xs"><time dateTime="2020">5</time> years ago</p>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute top-5 blogData transition-all duration-300 opacity-0 text-[#a3a3a3] font-semibold text-sm">
                                                <span>{blog.blogType}</span> <span>
                                                    <time>{blog.blogReadTime}</time> min
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold mt-6 tab:w-[15rem]">{blog.blogDescription}</h3>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                        ))
                    }
                </section>
                <NavLink to={`/blog`}>
                    <button className='bg-[#8e8e98] text-black py-1 px-3 rounded-lg hover:bg-[#9f9fa4] font-semibold'>
                        Read All
                    </button>
                </NavLink>
            </main>
            <div className="flex justify-center">
                <div
                    className={`fixed flex items-center justify-center bg-blue-900 px-2 rounded-xl py-1 gap-3 transition-all duration-300 ease-in-out ${textCopied ? 'top-5 opacity-100' : 'top-2 opacity-0'
                        }`}
                >
                    <div>
                        <img src="/icons/copy.svg" alt="copy-icon" />
                    </div>
                    URL Copied!
                </div>
            </div>
        </>
    )
}
export default SeenBlog