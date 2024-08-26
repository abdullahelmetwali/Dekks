import { useContext } from "react";
import { UpdateState } from "../../utilites/UpdateState";
import allData from '../../json/data.json'
function Plans() {
  const { toggleSubscribeBoxState } = useContext(UpdateState)
  document.title = 'Plans | Dekks'
  const plans = allData.allPlans
  window.scrollTo({
    top: 0,
  });
  return (
    <>
      <main className="px-[15%] my-10 py-4 tab:px-3">
        <div className="text-center font-bold">
          <h3 className="text-[#55555b] text-xl">Dekks</h3>
          <h1 className="hero-txt tracking-wide">Plans</h1>
        </div>
        <section className="flex justify-center gap-4 my-8  overflow-x-auto whitespace-no-wrap scroll-snap-x-mandatory tab:justify-start slider">
          {
            plans.map(plan => (
              <div key={plan.id} className="bg-[#1c1c1e] p-4 w-full rounded-lg grid gap-16 text-nowrap">
                <div>
                  <div className="flex justify-between items-center tab:gap-8">
                    <h1 className="text-3xl font-bold text-[#8e8e98]">{plan.planName}</h1>
                    <span className="bg-[#742eff] rounded-lg p-1 text-xs text-nowrap">coming soon</span>
                  </div>
                  <h3 className="text-[#55555b] font-black text-5xl mt-8">– ––</h3>
                </div>
                <div>
                  <ul className="mr-10 text-[#55555b]">
                    {
                      plan.planFeatures.map((feature, index) => (
                        <li key={index} >
                          ✔ {feature}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div >
                  {
                    plan.planAction === 'Notify Me' ? <button className="planBtn" onClick={(e) => {
                      e.stopPropagation()
                      toggleSubscribeBoxState()
                    }}> {plan.planAction}</button> :
                      <button className="planBtn">
                        <a href="mailto:abdullahelmetwali@icloud.com">{plan.planAction}</a>
                      </button>
                  }
                </div>
              </div>
            ))
          }
        </section>
      </main>
      <main className="px-[15%] my-12 tab:px-4">
        <ul className="flex items-center justify-between">
          <li>
            <a href="https://nmbrs.net/" target="_blank"><img src="/imgs/logo2.avif" alt="numbers logo" title="Numbers" className="w-14 opacity-10 hover:opacity-50" /></a>
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
    </>
  )
}
export default Plans;
