import Lanyard from "../../components/Lanyard/Lanyard";
import './about.css'
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col md:flex-row items-center gap-6 text-white px-6 py-4">
        
        {/* Foto */}
        <motion.div
          key="lanyard"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="flex justify-center items-center"
        >
          <Lanyard src="/assets/lanyard card/yaysir masyal.png" />
        </motion.div>

        {/* Code Editor */}
        <motion.div
          key="code"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
         <CodeEditor
  lang="js"
  theme="github-dark"
  title="AboutMe.js"
  copyButton
  className="bg-[#17153B]"
>
{`const aboutMe = {
  name: "Yasyir Masy'al",
  education: {
    highSchool: "Vocational High School in Visual Communication Design",
    current: "Diploma in Computer Engineering"
  },
  background: ["visual arts", "technology"],
  interest: "front-end development"
};

console.log("Hello! I am", aboutMe.name);
`}
</CodeEditor>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

export default About;
