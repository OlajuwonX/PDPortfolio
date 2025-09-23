import {AboutData} from "../data/data";
import ScrollReveal from "../components/ui/scrollreveal";

const About = () => {
    return (
        <div className="py-10 px-4 md:px-10 md:py-15 lg:px-15 lg:py-20 text-gray-800 dark:text-gray-200">
            <ScrollReveal delay={0.1}>
                <p className="text-2xl md:text-4xl font-bold pb-5 md:pb-5 lg:pb-7">From Blueprints to Codeprints</p>
            </ScrollReveal>
            {AboutData.map(({id, details}) => (
                <ScrollReveal delay={0.2 * id + 0.1}>
                    <p key={id}
                       className="text-[16px] md:text-[18px] tracking-[1px] pb-3 leading-5 md:leading-6 lg:leading-7 w-full md:w-[85%] lg:w-[75%]">
                        {details}
                    </p>
                </ScrollReveal>
            ))}
        </div>
    )
}
export default About
