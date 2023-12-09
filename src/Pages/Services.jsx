import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import img1 from '../Assets/services_icon/1.png';
import img2 from '../Assets/services_icon/2.png';
import img3 from '../Assets/services_icon/3.png';
import img4 from '../Assets/services_icon/4.png';
import img5 from '../Assets/services_icon/5.png';
import img6 from '../Assets/services_icon/6.png';

const Services = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return isMobile ? (
                <Card_mobile card={card} key={card.id} />
              ) : (
                <Card_desktop card={card} key={card.id} />
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const Card_desktop = ({ card }) => {
  return (
    <div className="services-card" key={card.id}>
      <div className="row g-0">
        <div className="col-md-6">
          <div className="card-body">
            <div className="services-title">{card.title}</div>
            <p className="services-text">{card.text}</p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="services-img" src={card.url} alt="" />
        </div>
      </div>
    </div>
  );
};

const Card_mobile = ({ card }) => {
  return (
    <div className="services-card-mobile" key={card.id}>
      <div className="row g-0">
        <div className="col-md-8">
          <img className="services-img-mobile" src={card.url} alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="services-title">{card.title}</div>
            <p className="services-text">{card.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    url: img1,
    title: "Video Editing",
    text:
      "Elevating video content through cutting, splicing, motion graphics, and effects for a polished and captivating final product.",
  },
  {
    url: img2,
    title: "Content Strategy",
    text:
      "Strategically planning and executing the creation and distribution of content to achieve specific business or marketing goals, involving audience identification and theme development.",
  },
  {
    url: img3,
    title: "Lead Generation",
    text:
      "Drawing in and converting potential customers into leads by implementing strategies to capture contact information and guide prospects through the sales funnel.",
  },
  {
    url: img4,
    title: "Content Writing",
    text:
      "Crafting written material, including articles, blog posts, and marketing copy, to convey information clearly and engage the target audience",
  },
  {
    url: img5,
    title: "Graphic Design",
    text:
      "Developing visually appealing content using elements like images, typography, and colors for branding and marketing materials.",
  },
  {
    url: img6,
    title: "Social Media Growth Management",
    text:
      "Directing strategies to boost a brand's presence and engagement on social media platforms, encompassing content posting, audience interaction, and analytical optimization.",
  },
];

export default Services;
