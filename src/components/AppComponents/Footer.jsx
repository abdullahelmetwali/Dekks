import Dekks from "/icons/dekksWhite.svg";
import X from "/icons/x.svg";
import Insta from "/icons/insta.svg";
import React from "react";
import { NavLink } from "react-router-dom";
const Footer = React.memo(() => {
  const footerLists = [
    { id: 0, listHead: "Dekks", listData: ["Product", "Plans", "Blog"] },
    { id: 1, listHead: "Company", listData: ["About", "Press", "Jobs"] },
    { id: 2, listHead: "Legal", listData: ["Privacy", "Terms", "Cookies"] },
  ];

  return (
    <footer className="px-[15%] py-8 mt-32 tab:px-4">
      <section className="flex gap-16 mob:flex-col tab:gap-8">
        <div>
          <img loading="lazy" src={Dekks} alt="Dekks Logo" title="Dekks" className="ml-1" />
          <form
            action="#"
            className="flex my-4"
            aria-label="Subscribe to our newsletter"
          >
            <input
              type="email"
              placeholder="Email"
              className="bg-[#8e8e9833] w-[18rem] p-3 text-white outline-none rounded-l-lg tab:w-full"
              required
            />
            <button className="bg-[#47474c] font-semibold px-3 rounded-r-lg hover:bg-[#515155] text-nowrap">
              Subscribe
            </button>
          </form>
          <span className="text-xs text-[#8e8e98] ml-1">
            Get news and updates.
            <span className="text-white cursor-pointer"> GDPR</span> ready
          </span>
        </div>
        <div className="flex justify-around p-1 w-2/3 tab:justify-between">
          {footerLists.map((list) => (
            <nav key={list.id}>
              <h2 className="text-[#8e8e98] mb-2">{list.listHead}</h2>
              <ul>

                {list.listData.map((item, index) => (
                  <li key={index} className="text-[#55555b]">
                    {
                      list.listHead === 'Legal' ?
                        <NavLink to={`/legal/${item.toLowerCase()}`} title={item}>
                          {item}
                        </NavLink>
                        :
                        item === 'Press' ?
                          <a href="/data/Abdullah ElMetwali.zip" download={true} title="Download Abdullah ElMetwali CV" className="flex gap-1">Press <span><img loading="lazy" src="/icons/download.svg" alt="download" /></span></a>
                          :
                          item === 'Jobs' ?
                            <span>
                              {item}
                              <span className="bg-[#f53b3b] px-1 text-[10px] rounded-xl ml-1 text-black">Soon</span>
                            </span>
                            :
                            item === 'Product' ?
                              <NavLink to={`/`} title={item}>
                                {item}
                              </NavLink>
                              :
                              <NavLink to={`/${item.toLowerCase()}`} title={item}>
                                {item}
                              </NavLink>
                    }

                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </section>
      <div className="text-center mt-20">
        <div className="flex justify-center my-8 gap-4">
          <a href="https://www.instagram.com/abdullahelmetwali/" title="Instagram">
            <img loading="lazy"
              src={Insta}
              alt="instagram"
              className="opacity-50 hover:opacity-100"
            />
          </a>
          <a href="https://x.com/AbdullahAmrz" title="Twitter">
            <img loading="lazy"
              src={X}
              alt="twitter"
              className="opacity-50 hover:opacity-100"
            />
          </a>
        </div>
        <div>
          <a
            href="https://abdullahelmetwali.netlify.app/"
            target="_blank"
            className="company tracking-widest text-lg  mob:text-base"
          >
            ABDULLAH <br /> ELMETWALI
          </a>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";
export default Footer;
