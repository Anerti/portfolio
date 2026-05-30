"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const softSkills = [
  { skill: "Curiosité", value: 87 },
  { skill: "Travail équipe", value: 72 },
  { skill: "Adaptabilité", value: 77 },
  { skill: "Gestion temps", value: 63 },
  { skill: "Esprit analytique", value: 77 },
];

const langSkills = [
  { skill: "Java", value: 90 },
  { skill: "JavaScript", value: 91 },
  { skill: "Python", value: 63 },
  { skill: "Bash", value: 58 },
  { skill: "SQL", value: 83 },
];

const frameworkSkills = [
  { skill: "Spring Boot", value: 79 },
  { skill: "ExpressJS", value: 63 },
  { skill: "Git", value: 61 },
  { skill: "PostgreSQL", value: 72 },
  { skill: "Burp Suite", value: 61 },
  { skill: "Linux", value: 85 },
];

const itSkills = [
  { skill: "Backend", value: 92 },
  { skill: "Frontend", value: 48 },
  { skill: "DevOps", value: 43 },
  { skill: "Cybersécu.", value: 78 },
  { skill: "IA", value: 53 },
  { skill: "Réseau", value: 60 },
];

const langData = [
  { skill: "Expression", malagasy: 57, francais: 69, anglais: 45 },
  { skill: "Écoute", malagasy: 70, francais: 77, anglais: 49 },
  { skill: "Lecture", malagasy: 74, francais: 95, anglais: 87 },
  { skill: "Écriture", malagasy: 67, francais: 85, anglais: 54 },
  { skill: "Moyenne", malagasy: 67, francais: 82, anglais: 59 },
];

const slides = [
  { id: "soft", label: "Soft Skills" },
  { id: "hard", label: "Hard Skills" },
  { id: "langues", label: "Langues" },
  { id: "general", label: "Générales" },
];

const hardTabs = [
  { id: "lang", label: "Languages" },
  { id: "framework", label: "Frameworks & Tools" },
];

export function Skills() {
  const [current, setCurrent] = useState(0);
  const [hardTab, setHardTab] = useState(0);

  return (
    <section id="skills" className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24">
      <Image
        src="/tree-bg.svg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-contain opacity-[0.08]"
        aria-hidden
      />
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 3
      </span>
      <h2 className="section-title mt-3">Compétences</h2>
      <div className="mt-1 mb-16 h-0.5 w-16 bg-accent" />

      <div className="relative mx-auto w-full">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Soft Skills
              </h3>
              <div className="h-[350px] sm:h-[420px] lg:h-[480px] [&_svg]:outline-none">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    data={softSkills}
                    cx="50%"
                    cy="50%"
                    outerRadius="85%"
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                  >
                    <PolarGrid stroke="#495057" strokeOpacity={0.3} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: "#262A2D", fontSize: 13, fontFamily: "Space Grotesk" }}
                      tickSize={6}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#212529",
                        border: "1px solid #495057",
                        borderRadius: 0,
                        fontSize: 12,
                        fontFamily: "Space Grotesk",
                        color: "#F8F9FA",
                      }}
                      labelStyle={{ fontFamily: "Orbitron", fontSize: 10, color: "#ADB5BD" }}
                      formatter={(value) => [`${value}%`, "Niveau"]}
                    />
                    <Radar
                      name="Soft Skills"
                      dataKey="value"
                      fill="#6C757D"
                      fillOpacity={0.15}
                      dot={{ r: 3, fill: "#F8F9FA", stroke: "#6C757D", strokeWidth: 0.5 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <div className="mb-3 flex items-center justify-center gap-2">
                <button
                  onClick={() => setHardTab(0)}
                  className={`rounded-sm px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
                    hardTab === 0
                      ? "bg-sidebar-primary text-sidebar shadow-[0_0_4px] shadow-sidebar-primary"
                      : "text-muted-foreground hover:text-foreground border border-sidebar-border"
                  }`}
                >
                  Languages
                </button>
                <button
                  onClick={() => setHardTab(1)}
                  className={`rounded-sm px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
                    hardTab === 1
                      ? "bg-sidebar-primary text-sidebar shadow-[0_0_4px] shadow-sidebar-primary"
                      : "text-muted-foreground hover:text-foreground border border-sidebar-border"
                  }`}
                >
                  Frameworks & Tools
                </button>
              </div>
              <div className="h-[350px] sm:h-[420px] lg:h-[480px] [&_svg]:outline-none">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    data={hardTab === 0 ? langSkills : frameworkSkills}
                    cx="50%"
                    cy="50%"
                    outerRadius="80%"
                    margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
                  >
                    <PolarGrid stroke="#495057" strokeOpacity={0.3} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: "#262A2D", fontSize: 11, fontFamily: "Space Grotesk" }}
                      tickSize={5}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#212529",
                        border: "1px solid #495057",
                        borderRadius: 0,
                        fontSize: 12,
                        fontFamily: "Space Grotesk",
                        color: "#F8F9FA",
                      }}
                      labelStyle={{ fontFamily: "Orbitron", fontSize: 10, color: "#ADB5BD" }}
                      formatter={(value) => [`${value}%`, "Niveau"]}
                    />
                    <Radar
                      name="Hard Skills"
                      dataKey="value"
                      fill="#6C757D"
                      fillOpacity={0.15}
                      dot={{ r: 3, fill: "#F8F9FA", stroke: "#6C757D", strokeWidth: 0.5 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Langues
              </h3>
              <div className="flex items-center justify-center gap-6 text-[10px] font-heading uppercase tracking-[0.1em]">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#5BC0BE" }} />
                  Malagasy
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full bg-[#6C757D]" />
                  Français
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#E6A817" }} />
                  Anglais
                </span>
              </div>
              <div className="h-[350px] sm:h-[420px] lg:h-[480px] [&_svg]:outline-none">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={langData} cx="50%" cy="50%" outerRadius="75%">
                    <PolarGrid gridType="polygon" stroke="#495057" strokeOpacity={0.3} />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: "#262A2D", fontSize: 12, fontFamily: "Space Grotesk" }}
                      tickSize={5}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#212529",
                        border: "1px solid #495057",
                        borderRadius: 0,
                        fontSize: 12,
                        fontFamily: "Space Grotesk",
                        color: "#F8F9FA",
                      }}
                      labelStyle={{ fontFamily: "Orbitron", fontSize: 10, color: "#ADB5BD" }}
                    />
                    <Radar
                      name="Malagasy"
                      dataKey="malagasy"
                      fill="#5BC0BE"
                      fillOpacity={0.15}
                      dot={{ r: 3, fill: "#F8F9FA", stroke: "#5BC0BE", strokeWidth: 0.5 }}
                    />
                    <Radar
                      name="Français"
                      dataKey="francais"
                      fill="#6C757D"
                      fillOpacity={0.15}
                      dot={{ r: 3, fill: "#F8F9FA", stroke: "#6C757D", strokeWidth: 0.5 }}
                    />
                    <Radar
                      name="Anglais"
                      dataKey="anglais"
                      fill="#E6A817"
                      fillOpacity={0.12}
                      dot={{ r: 3, fill: "#F8F9FA", stroke: "#E6A817", strokeWidth: 0.5 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Compétences Générales
              </h3>
              <div className="mx-auto w-full">
                <p className="mb-1 text-center font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  IT
                </p>
                  <div className="h-[350px] sm:h-[420px] lg:h-[480px] [&_svg]:outline-none">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart
                        data={itSkills}
                        cx="50%"
                        cy="50%"
                        outerRadius="80%"
                        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                      >
                        <PolarGrid stroke="#495057" strokeOpacity={0.25} />
                        <PolarAngleAxis
                          dataKey="skill"
                          tick={{ fill: "#262A2D", fontSize: 12, fontFamily: "Space Grotesk" }}
                          tickSize={4}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "#212529",
                            border: "1px solid #495057",
                            borderRadius: 0,
                            fontSize: 12,
                            fontFamily: "Space Grotesk",
                            color: "#F8F9FA",
                          }}
                          labelStyle={{ fontFamily: "Orbitron", fontSize: 10, color: "#ADB5BD" }}
                      formatter={(value) => [`${value}%`, "Niveau"]}
                        />
                        <Radar
                          name="IT"
                          dataKey="value"
                          fill="#6C757D"
                          fillOpacity={0.15}
                          dot={{ r: 3, fill: "#F8F9FA", stroke: "#6C757D", strokeWidth: 0.5 }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`
                rounded-sm px-4 py-2 font-heading text-[11px] uppercase tracking-[0.15em] transition-all duration-300
                ${current === i
                  ? "bg-sidebar-primary text-sidebar shadow-[0_0_6px] shadow-sidebar-primary"
                  : "text-muted-foreground hover:text-foreground border border-sidebar-border"}
              `}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
