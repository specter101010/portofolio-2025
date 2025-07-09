import { useState } from "react";

const experiences = [
    {
        title: "Live Stream Technical Operator ",
        year: "2024",
        role: "Streaming Operator",
        date: "May 2024",
        tools: ["OBS Studio", "Audio Mixer", "Scene Management"],
        description:
          "Operated and managed live streaming for the Musyawarah Besar event of the Himpunan Diploma Komputer (HIMDIKO) at Universitas Sriwijaya. Handled transitions, overlays, and audio synchronization using OBS Studio.",
        image: "/assets/experience/obs.png",
      },
  {
    title: "IoT Intern at XYZ Lab",
    year: "2023",
    role: "IoT Intern",
    date: "Jul 2023 – Sep 2023",
    tools: ["ESP32", "GPS", "Heart Rate Sensor"],
    description: "Developed an IoT-based worker safety system using ESP32, GPS, and heart rate sensor.",
    image: "/assets/experience/iot.png",
  },
  {
    title: "Freelance Web Designer",
    year: "2022",
    role: "Web Designer",
    date: "Mar 2022 – Dec 2022",
    tools: ["Figma", "Tailwind", "HTML"],
    description: "Designed clean and responsive landing pages for small business clients.",
    image: "/assets/experience/webdesign.png",
  },
  {
    title: "Freelance Web Designer",
    year: "2022",
    role: "Web Designer",
    date: "Mar 2022 – Dec 2022",
    tools: ["Figma", "Tailwind", "HTML"],
    description: "Designed clean and responsive landing pages for small business clients.",
    image: "/assets/experience/webdesign.png",
  },
  {
    title: "Freelance Web Designer",
    year: "2022",
    role: "Web Designer",
    date: "Mar 2022 – Dec 2022",
    tools: ["Figma", "Tailwind", "HTML"],
    description: "Designed clean and responsive landing pages for small business clients.",
    image: "/assets/experience/webdesign.png",
  },
  // Tambahkan lebih banyak data sesuai kebutuhan...
];

function Experience() {
  const [selected, setSelected] = useState(0); // default: item pertama

  return (
    <div className="bg-[#0f172a] p-6 rounded-lg shadow-lg w-full h-full">
      <h2 className="text-white text-2xl font-bold mb-4">Experience</h2>

      <div className="grid grid-cols-2 gap-6 h-full overflow-hidden">
        {/* List kiri */}
  {/* List kiri */}
<div className="overflow-y-auto pr-2 space-y-2 h-[18rem]">
  {experiences.map((exp, index) => (
    <div
      key={index}
      className={`p-3 rounded-md cursor-pointer border ${
        selected === index
          ? "border-blue-500 bg-[#1e293b]"
          : "border-gray-700 hover:bg-[#1e253b]"
      } transition`}
      onClick={() => setSelected(index)}
    >
      <h3 className={`font-medium ${selected === index ? "text-blue-400 font-bold" : "text-white"}`}>
        {exp.title}
      </h3>
      <p className={`text-xs ${selected === index ? "text-blue-300" : "text-muted-foreground"}`}>
        {exp.year}
      </p>
    </div>
  ))}
</div>


        {/* Detail kanan */}
        <div className="bg-[#1e293b] rounded-md p-4 flex flex-col gap-3 text-white h-[18rem] overflow-y-auto">
          <div className="flex items-center gap-4">
            <img
              src={experiences[selected].image}
              alt={experiences[selected].title}
              className="w-40 h-40 object-cover rounded-md border border-gray-500"
            />
            <div>
              <h3 className="text-lg font-semibold">
                {experiences[selected].title}
              </h3>
              <p className="text-sm text-muted-foreground italic">
                {experiences[selected].role} | {experiences[selected].date}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-300">{experiences[selected].description}</p>
          <div>
            <h4 className="text-sm font-semibold text-blue-400">Tools Used:</h4>
            <ul className="text-xs text-gray-400 list-disc ml-5 mt-1">
              {experiences[selected].tools.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Experience;
