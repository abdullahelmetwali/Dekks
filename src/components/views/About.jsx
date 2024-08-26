const About = () => {
    document.title = 'About | Dekks';
    window.scrollTo({
        top : 0
    })
    return (
        <main className="px-[15%] my-36 tab:px-4">
            <div>
                <h3 className="text-[#55555b] text-xl">About</h3>
                <h1 className="data-txt tracking-wide">
                    We are an experience design studio called International Magic.
                </h1>
                <div className="my-20">
                    <p className="text-[#a3a3a3]">Dekks is build by <a href="https://github.com/abdullahelmetwali" ><strong className="text-blue-600">Abdullah ElMetwali</strong></a>,<br /> I&apos;m focusing on high-quality services <br /> for creatives.</p>
                </div>
            </div>
        </main>
    )
}
export default About