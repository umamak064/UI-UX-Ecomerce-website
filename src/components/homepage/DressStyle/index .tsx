import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import React from "react";
import DressStyleCard from "./DressStyleCard";
import { motion, HTMLMotionProps } from "framer-motion";

const DressStyle = () => {
  console.log([
    integralCF.className,
    "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize",
  ]);
  return (
    <div className="px-4 xl:px-0">
      <section className="max-w-frame mx-auto bg-[#F0F0F0] px-6 pb-6 pt-10 md:p-[70px] rounded-[40px] text-center">
      <motion.h2
    {...({
    initial: { y: "100px", opacity: 0 },
    whileInView: { y: "0", opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
    className: cn([
      integralCF.className,
      "text-[32px] leading-[36px] md:text-5xl mb-8 md:mb-14 capitalize",
    ]),
    } as HTMLMotionProps<"h2">)}
    >
     BROWSE BY DRESS STYLE
     </motion.h2>

     <motion.div
  {...({
    initial: { y: "100px", opacity: 0 },
    whileInView: { y: "0", opacity: 1 },
    viewport: { once: true },
    transition: { delay: 0.6, duration: 0.6 },
    className: "flex flex-col sm:flex-row md:h-[289px] space-y-4 sm:space-y-0 sm:space-x-5 mb-4 sm:mb-5",
  } as HTMLMotionProps<"div">)}
>
  <DressStyleCard
    title="Casual"
    url="/shop#casual"
    className="md:max-w-[260px] lg:max-w-[360px] xl:max-w-[407px] h-[190px] bg-[url('/images/dress-style-1.png')]"
  />
  <DressStyleCard
    title="Formal"
    url="/shop#formal"
    className="md:max-w-[684px] h-[190px] bg-[url('/images/dress-style-2.png')]"
  />
</motion.div>

        
       
      </section>
    </div>
  );
};

export default DressStyle;
