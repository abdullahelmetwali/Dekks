import { NavLink } from 'react-router-dom'
import allData from '../../json/data.json'
const Blog = () => {
    document.title = 'Blog | Dekks'
    const mainBlogs = allData.mainBlogs
    window.scrollTo({
        top: 0,
    })
    const addToSession = (blog) => {
        return sessionStorage.setItem('seen', JSON.stringify(blog))
    }
    return (
        <main className="px-[15%] my-20 tab:px-3">
            <div className="article-txt">
                <span>Blog.</span> <span className="text-[#8e8e98]">A space for updates, <br />conversations and output.</span>
            </div>
            <div>
                <form action="#" className='flex my-8'>
                    <input type="email" placeholder='Email' className='bg-[#8e8e9833] w-[18rem] p-3 text-white outline-none rounded-l-lg tab:w-full' required />
                    <button className='bg-[#47474c] px-3 rounded-r-lg hover:bg-[#515155] text-nowrap'>Subscribe 🤳</button>
                </form>
            </div>
            <section className="grid grid-cols-3 gap-4 my-12 tab:grid-cols-2 mob:grid-cols-1">
                {
                    mainBlogs.map(blog => (
                        <div key={blog.id} className={`relative p-6 rounded-xl h-[75dvh] w-full blogBox ${blog.id === 0 ? 'text-black' : 'text-white'}`} style={{ backgroundImage: `url(${blog.blogImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <NavLink to={`/blog/${blog.blogLink}`} onClick={() => {
                                addToSession(blog)
                            }}>
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
                                        <h3 className={`text-2xl font-bold mt-6 tab:w-[15rem] ${blog.id === 4 || blog.id === 5 ? 'text-black' : ''}`}>{blog.blogDescription}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    ))
                }
            </section>
        </main>
    )
}
export default Blog