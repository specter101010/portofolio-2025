import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Sriwijaya University",
    subtitle: "Diploma in Computer Engineering (2022–2025)",
    description:
      "Relevant Projects: Real-Time Worker Safety Monitoring System using ESP32, GPS, and sensors.",
    icon: "/assets/education/unsri.png", // ganti sesuai logo kamu
  },
  {
    title: "Dibimbing.id",
    subtitle: "Web Development Bootcamp (Jan–Jun 2023)",
    description:
      "Learned and practiced HTML, CSS, JavaScript, React.js, and Bootstrap. Focused on responsive design, user interaction, and frontend best practices.",
    icon: "/assets/education/dibimbing.png", // ganti sesuai logo kamu
  },
  {
    title: "SMKN 7 Palembang",
    subtitle: "Senior High School in Visual Communication Design",
    description:
      "Passionate about developing strong visual communication skills using design tools and creative techniques.",
    icon: "/assets/education/smkn7.png", // ganti sesuai logo kamu
  },
];

function Education() {
  return (
    <div className="border-l-2 border-blue-500 pl-6 space-y-10 relative">
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <span className="absolute left-[-31px] top-[0px] w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300 ease-in" />

          <div className="flex items-start justify-between pr-20">
            <div className="w-140 mr-40">
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white transition duration-300">
                {item.subtitle}
              </p>
              <p className="text-xs text-muted-foreground italic mt-1 group-hover:text-blue-400 transition duration-300">
                {item.description}
              </p>
            </div>

            {/* Logo muncul saat hover */}
            <img
                src={item.icon}
                alt={`${item.title} logo`}
                className={`absolute  top-[-50px] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-4
                    ${item.title === "SMKN 7 Palembang" ? "w-30 h-30 right-[20px]" : "w-50 h-50 right-[-10px]"}`}
                />

          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Education;
