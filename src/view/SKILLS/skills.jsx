import SkillPopover from "@/components/skil/SkillPopover";

function Skills() {
  return (
    <div className="flex flex-wrap gap-4 justify-center p-5">
      {/* --- Web & Frontend --- */}
      <SkillPopover
        iconSrc="/assets/skills/html.png"
        skillName="HTML"
        description="Markup language for web content structure."
        level="Advanced"
      />
      <SkillPopover
        iconSrc="/assets/skills/css.png"
        skillName="CSS"
        description="Stylesheet language for designing web pages."
        level="Advanced"
      />
      <SkillPopover
        iconSrc="/assets/skills/javascript.png"
        skillName="JavaScript"
        description="Core language for web interaction and logic."
        level="Advanced"
      />
      <SkillPopover
        iconSrc="/assets/skills/react.png"
        skillName="React"
        description="JavaScript library for building UIs."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/reactbits.png"
        skillName="React Bits"
        description="Advanced UI patterns and reusable React logic."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/tailwind.png"
        skillName="Tailwind CSS"
        description="Utility-first CSS framework."
        level="Advanced"
      />
      <SkillPopover
        iconSrc="/assets/skills/bootstrap.png"
        skillName="Bootstrap"
        description="Front-end framework for responsive design."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/animateui.png"
        skillName="Animate UI"
        description="Animated UI component library for React."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/netlify.png"
        skillName="Netlify"
        description="Web hosting for static and JAMstack sites."
        level="Intermediate"
      />

      {/* --- Design Tools --- */}
      <SkillPopover
        iconSrc="/assets/skills/figma.png"
        skillName="Figma"
        description="Collaborative UI/UX design tool."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/canva.png"
        skillName="Canva"
        description="Online design tool for quick graphics."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/coreldraw.png"
        skillName="Corel Draw"
        description="Vector-based graphic design software."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/illustrator.png"
        skillName="Adobe Illustrator"
        description="Professional vector graphic software."
        level="Basic"
      />
      <SkillPopover
        iconSrc="/assets/skills/photoshop.png"
        skillName="Photoshop"
        description="Image editing and manipulation tool."
        level="Intermediate"
      />

      {/* --- Backend --- */}
      <SkillPopover
        iconSrc="/assets/skills/php.png"
        skillName="PHP"
        description="Server-side scripting language."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/laravel.png"
        skillName="Laravel"
        description="PHP framework for web development."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/codeigniter.png"
        skillName="CodeIgniter"
        description="Lightweight PHP MVC framework."
        level="Basic"
      />
      <SkillPopover
        iconSrc="/assets/skills/nodejs.png"
        skillName="Node.js"
        description="JavaScript runtime for backend apps."
        level="Intermediate"
      />

      {/* --- Version Control --- */}
      <SkillPopover
        iconSrc="/assets/skills/git.png"
        skillName="Git"
        description="Version control system for source code."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/github.png"
        skillName="GitHub"
        description="Hosting for Git repositories with collaboration."
        level="Intermediate"
      />

      {/* --- Other --- */}
      <SkillPopover
        iconSrc="/assets/skills/ktx.png"
        skillName="KTX Texture"
        description="Compressed texture format used in 3D engines."
        level="Basic"
      />

      {/* --- Hardware & Embedded --- */}
      <SkillPopover
        iconSrc="/assets/skills/esp32.png"
        skillName="Embedded Systems"
        description="ESP32-based projects with sensors and actuators."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/iot.png"
        skillName="IoT & Sensor Integration"
        description="Integrating sensors like GPS, heart rate, temperature."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/wireless.png"
        skillName="Wireless Communication"
        description="WiFi, GSM (SIM800L/7600), and GPS modules."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/electronics.png"
        skillName="Basic Electronics"
        description="Circuit design, soldering, and module wiring."
        level="Intermediate"
      />
      <SkillPopover
        iconSrc="/assets/skills/backend.png"
        skillName="Backend Integration"
        description="Send sensor data to server using HTTP/REST API."
        level="Intermediate"
      />
      <SkillPopover
  iconSrc="/assets/skills/gpt.png"
  skillName="GPT Prompting"
  description="Crafting effective prompts to interact with AI tools like ChatGPT for development assistance and automation."
  level="Intermediate"
/>
<SkillPopover
  iconSrc="/assets/skills/word.png"
  skillName="Microsoft Word"
  description="Skilled in document formatting, layout, and professional report creation."
  level="Advanced"
/>
<SkillPopover
  iconSrc="/assets/skills/powerpoint.png"
  skillName="PowerPoint"
  description="Capable of creating engaging and professional presentations."
  level="Advanced"
/>
<SkillPopover
  iconSrc="/assets/skills/obs.png"
  skillName="OBS Studio"
  description="Experienced in using OBS for screen recording, streaming, and video production."
  level="Intermediate"
/>
<SkillPopover
  iconSrc="/assets/skills/docker.png"
  skillName="Docker"
  description="Basic understanding of containerization and deployment using Docker."
  level="Beginner"
/>
<SkillPopover
  iconSrc="/assets/skills/mqtt.png"
  skillName="MQTT"
  description="Knowledge of MQTT protocol for lightweight IoT communication."
  level="Intermediate"
/>
<SkillPopover
  iconSrc="/assets/skills/emqx.png"
  skillName="EMQX"
  description="Experience in configuring EMQX as an MQTT broker for real-time data."
  level="Intermediate"
/>
<SkillPopover
  iconSrc="/assets/skills/nginx.png"
  skillName="NGINX"
  description="Basic knowledge of web server configuration and reverse proxy setup with NGINX."
  level="Beginner"
/>
<SkillPopover
  iconSrc="/assets/skills/ngrok.png"
  skillName="Ngrok"
  description="Experience in creating secure tunnels for local servers and testing webhooks using Ngrok."
  level="Beginner"
/>

<SkillPopover
  iconSrc="/assets/skills/excel.png"
  skillName="Microsoft Excel"
  description="Basic skills in data entry, formatting, and formula usage."
  level="Beginner"
/>

    </div>
  );
}

export default Skills;
