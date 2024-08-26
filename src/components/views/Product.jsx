import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AnimationBox from "../ProductComponents/AnimationBox";
import allData from '../../json/data.json'
const Product = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [seeIfAnimate, setSeeIfAnimate] = useState(false);
    const productsData = [
        "Decks",
        "Presentations",
        "Moodboards",
        "Portfolios",
        "Proposals",
        "Keynotes",
        "Pitches",
        "Slides",
    ];
    const firstSecData = allData.productData[0];
    const secondSecData = allData.productData[1];
    const thirdSecData = allData.productData[2];
    const mainThreeBlogs = allData.mainBlogs.slice(0, 3);
    const addToSession = (blog) => {
        return sessionStorage.setItem('seen', JSON.stringify(blog))
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % productsData.length);
        }, 1100);

        return () => clearInterval(interval);
    }, [productsData.length]);
    return (
        <>
            <section className={`my-36 overflow-hidden font-semibold px-[15%] mob:px-3 ${seeIfAnimate ? ' sticky top-36 z-0' : ''}`}>
                <div>
                    <div>
                        <span className="text-lg font-semibold">Dekks</span>
                        <span className="bg-purple-800 mx-2 p-1 rounded-lg text-sm">coming soon</span>
                    </div>
                    <div><h2 className="hero-txt">Next Generation</h2></div>
                </div>
                <div className="relative w-fit top-10 mob:top-4 mb-44">
                    {productsData.map((data, index) => (
                        <div
                            key={index}
                            className={`filter text-7xl mob:text-[3.5rem] rounded-lg px-3 py-1 absolute transform transition-all duration-300 ease-in-out 
                    ${activeIndex === index ? 'opacity-100 z-20 -bottom-14 bg-[#222]' : 'opacity-10 z-0 -bottom-16 bg-[#333]'}`}
                        >
                            {data}
                        </div>

                    ))}
                </div>
                <div>
                    <form action="#" className='flex my-8'>
                        <input type="email" placeholder='Get full access ...' className='bg-[#8e8e9833] w-[18rem] p-3 text-white outline-none rounded-l-lg tab:w-full' required />
                        <button className='bg-[#47474c] px-3 rounded-r-lg hover:bg-[#515155] text-nowrap'>Notify Me ✌️</button>
                    </form>
                    <span className='text-xs text-[#8e8e98]'>Be first on launch and updates. <span className="text-white cursor-pointer">GDBR</span> ready</span>
                </div>
            </section>
            <AnimationBox seeIfAnimate={seeIfAnimate} setSeeIfAnimate={setSeeIfAnimate} />
            <main className="px-[15%] tab:px-4">
                <ul className="flex items-center justify-between">
                    <li>
                        <a href="https://nmbrs.net/" target="_blank"><img loading="lazy" src="/imgs/logo2.avif" alt="numbers logo" title="Numbers" className="w-14 opacity-10 hover:opacity-50" /></a>
                    </li>
                    <li className="company text-xl mob:text-base">
                        <a href="https://maworldgroup.com/" target="_blank" >
                            MANAGEMENT<span className=" opacity-40 mx-2">+</span>ARTISTS</a>
                    </li>

                    <li className="text-2xl mob:text-base opacity-40 hover:opacity-80 font-black">
                        <a href="https://032c.com/" target="_blank">032c</a>
                    </li>
                    <li className="company text-xl mob:text-base">
                        <a href="https://trauminc.com/" target="_blank" >TRAUM INC</a>
                    </li>
                    <li className="company text-xl mob:text-base">
                        <a href="https://intmagic.com/" target="_blank" >INT. <br /> MAGIC</a>
                    </li>
                </ul>
            </main>
            <section className="px-[15%] my-24 tab:px-4">
                <article className="article-txt text-[#8e8e98] font-semibold">
                    <span className="text-white">For creators, by creators</span> <span>👈</span> The all-in-one presentation app for creative troops and solo forces. Create, share and view ideas in an engaging and powerful new way. A design driven deck engine, that speeds up and simplifies presentations for everyone, with any content on any screen. Present hands-off, remote or IRL.
                </article>
                <div className="my-10 text-[#8e8e98]">
                    <p>Dekks is coming this spring. Are you an enterprise with special requirements? <br /><a href="#" className="text-blue-500 hover:text-blue-600">Tell us how</a> we can meet your company policy.</p>
                </div>
            </section>
            <main className="px-[15%] tab:px-4">
                <section className="flex gap-4 py-8 mob:flex-col">
                    {
                        firstSecData.map((sec) => (
                            <div key={sec.id} className="bg-[#1c1c1e] flex flex-col justify-between p-10 rounded-2xl h-auto gap-12 mob:p-5">
                                <div>
                                    <h1 className="text-xl font-bold text-[#8e8e98]">{sec.head}</h1>
                                    <article className="text-[#8e8e98] font-bold text-4xl tab:text-2xl my-6">
                                        <span className="text-white">{sec.article[0]}</span>{sec.article[1]}
                                    </article>
                                    <p className="text-sm text-[#8e8e98] w-[11rem]">{sec.description}</p>
                                </div>
                                <div>
                                    <img loading="lazy" src={sec.img} alt={sec.head} title={sec.head} className="w-full" />
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
            <section className="px-[15%] my-48 tab:px-4">
                <h1 className="data-txt">
                    Everything you need to collaborate tighter, create faster and present better.
                </h1>
            </section>
            <main className="px-[15%] my-10 tab:px-4">
                <section className="flex gap-4 py-8 mob:flex-col">
                    {
                        secondSecData.map((sec) => (
                            <div key={sec.id} className="bg-[#1c1c1e] flex flex-col justify-between p-10 rounded-2xl h-auto gap-12 mob:p-5">
                                <div>
                                    <h1 className="text-xl font-bold text-[#8e8e98]">{sec.head}</h1>
                                    <article className="text-[#8e8e98] font-bold text-4xl tab:text-2xl my-6">
                                        <span className="text-white">{sec.article[0]}</span>{sec.article[1]}
                                    </article>
                                    <p className="text-sm text-[#8e8e98] w-[11rem]">{sec.description}</p>
                                </div>
                                <div>
                                    <img loading="lazy" src={sec.img} alt={sec.head} title={sec.head} className="w-full" />
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>
            <main className="px-[15%] tab:px-4 my-28">
                <div>
                    <h1 className="text-[2rem]  font-bold tab:text-2xl">
                        Under the hood <span className="text-[#8e8e98]">⚡ Made for <br className="tab:hidden" /> speed and zero bottlenecks.</span>
                    </h1>
                </div>
                <section className="grid grid-cols-4 gap-4 tab:grid-cols-2 py-6">
                    {
                        thirdSecData.map(div => (
                            <div key={div.id} className="p-4 rounded-xl bg-[#1c1c1e] grid gap-1 items-center">
                                <div><img loading="lazy" src={`/imgs/item${div.id + 1}.png`} alt={div.head} title={div.head} className="w-14" /></div>
                                <p className="text-[#8e8e98] my-2">
                                    <span className="text-white">{div.head}.</span> {div.description}
                                </p>
                            </div>
                        ))
                    }
                </section>
            </main>
            <main className="px-[15%] tab:px-4 my-28">
                <h1 className="text-3xl font-bold">Blog <span className="text-[#8e8e98]">🎓 What&apos;s new?</span></h1>
                <section className="flex gap-4 my-12 overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory slider">
                    {
                        mainThreeBlogs.map(blog => (
                            <div key={blog.id} className={`relative p-6 rounded-xl h-[75dvh] w-1/3 tab:w-full blogBox tab:h-[35dvh] ${blog.id === 0 ? 'text-black' : 'text-white'}`} style={{ backgroundImage: `url(${blog.blogImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <NavLink to={`/blog/${blog.blogLink}`} onClick={() => addToSession(blog)}>
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="flex relative w-full gap-3">
                                            <div><img loading="lazy" src={blog.userImg} alt={blog.userName} title={blog.userName} className="rounded-full w-10" /></div>
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
        </>
    )
}
export default Product