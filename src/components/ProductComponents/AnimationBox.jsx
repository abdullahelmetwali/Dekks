import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function AnimationBox({seeIfAnimate , setSeeIfAnimate}) {
    const boxColors = ['#9DB2BF', '#526D82', '#27374D', '#0E8388'];
    const boxShapes = ['triangle', 'circle', 'circle', 'square'];

    const [animate, setAnimate] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(prevAni => !prevAni);
        }, 2000);

        function animationScroll() {
        const section = document.getElementById("animateSection");
        const box3 = document.querySelectorAll('.BOX-3');
        const box4 = document.querySelectorAll('.BOX-4');
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sectionTop <= viewportHeight && sectionTop >= 0) {
            setAnimate(true);
            setSeeIfAnimate(true)
            box3.forEach(box => box.style.animation = 'BOX3 6500ms 0s infinite ease-in-out')
            box4.forEach(box => box.style.animation = 'BOX4 6500ms 0s infinite ease-in-out')
        } else {
            setAnimate(false);
            setSeeIfAnimate(false)
            clearTimeout(timer);
            box3.forEach(box => box.style.animation = '')
            box4.forEach(box => box.style.animation = '')
        }
    }

        window.addEventListener("scroll", animationScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", animationScroll);
        }
    }, [seeIfAnimate , setSeeIfAnimate]);

    return (
        <main className="relative overflow-hidden px-6 my-10 mob:px-2" id="animateSection">
            <div className="bg-[#323235] w-full rounded-tr-lg rounded-tl-lg flex p-2">
                <span className="circled"></span>
                <span className="circled"></span>
                <span className="circled"></span>
            </div>
            <section className="relative overflow-hidden px-2 bg-[#232324] h-dvh">
                <div className={`flex relative gap-1 p-2 mob:p-1 transition-all duration-1000 ${animate ? '-top-[30rem]' : 'top-0'}`}>
                    {
                        [...Array(6)].map((_, index) => (
                            <div key={index} className={`bg-[#8e8e98] w-full h-[100px] rounded-lg flex items-center justify-center ${index === 4 || index === 5 ? 'mob:hidden' : ''}`}>
                                <div className={`${index % 2 ? 'triangle' : 'square'}`} aria-label={index % 2 === 0 ? 'Square shape' : 'Triangle shape'}></div>
                            </div>
                        ))
                    }
                </div>
                <section className={`flex flex-wrap gap-1 transform transition-all duration-1000 relative mb-1 ${animate ? '-translate-y-[30rem] ' : ''}`}>
                    {
                        boxColors.map((color, index) => (
                            <div key={index} className={`flex justify-center items-center rounded-xl BOX-${index + 1}`} style={{ backgroundColor: color }}>
                                <div className={boxShapes[index]} aria-label={`${boxShapes[index]} shape, ${color} color`}></div>
                            </div>
                        ))
                    }
                </section>
                <div className={`w-full h-16 rounded-lg bg-[#144272] transform transition-all duration-1000 relative my-1 ${animate ? '-translate-y-[30rem] ' : ''}`}></div>
                <div className={`flex relative p-2 mob:p-1 gap-1 transition-all duration-1000 w-full ${!animate ? '-bottom-[0]' : 'bottom-[30rem]'}`}>
                    {
                        [...Array(6)].map((_, secondIn) => (
                            <div key={secondIn} className={`bg-[#8e8e98] w-full h-[100px] rounded-lg flex items-center justify-center ${secondIn === 4 || secondIn === 5 ? 'mob:hidden' : ''}`}>
                                <div className={`${secondIn % 2 ? 'triangle' : 'square'}`} aria-label={secondIn % 2 === 0 ? 'Square shape' : 'Triangle shape'}></div>
                            </div>
                        ))
                    }
                </div>
                <section className={`flex flex-wrap gap-1 transform transition-all duration-1000 relative w-full ${!animate ? '-bottom-[0]' : 'bottom-[30rem]'}`}>
                    {
                        boxColors.map((color, index) => (
                            <div key={index} className={`flex justify-center items-center rounded-xl BOX-${index + 1}`} style={{ backgroundColor: color }}>
                                <div className={boxShapes[index]} aria-label={`${boxShapes[index]} shape, ${color} color`}></div>
                            </div>
                        ))
                    }
                </section>
            </section>
        </main>
    );
}

export default AnimationBox;
