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
  { skill: "Résolution", value: 90 },
  { skill: "Communication", value: 75 },
  { skill: "Travail équipe", value: 85 },
  { skill: "Adaptabilité", value: 80 },
  { skill: "Gestion temps", value: 70 },
  { skill: "Esprit critique", value: 88 },
];

const hardSkills = [
  { skill: "Java", value: 90 },
  { skill: "JavaScript", value: 75 },
  { skill: "Python", value: 70 },
  { skill: "Bash", value: 80 },
  { skill: "SQL", value: 85 },
  { skill: "Spring Boot", value: 90 },
  { skill: "ExpressJS", value: 65 },
  { skill: "Git", value: 85 },
  { skill: "PostgreSQL", value: 88 },
  { skill: "Burp Suite", value: 75 },
  { skill: "Linux", value: 82 },
];

const itSkills = [
  { skill: "Backend", value: 92 },
  { skill: "Frontend", value: 60 },
  { skill: "DevOps", value: 70 },
  { skill: "Cybersécu.", value: 80 },
  { skill: "IA", value: 50 },
  { skill: "Réseau", value: 65 },
];

const langData = [
  { skill: "Expression", malagasy: 100, francais: 85, anglais: 70 },
  { skill: "Écoute", malagasy: 100, francais: 90, anglais: 75 },
  { skill: "Lecture", malagasy: 90, francais: 88, anglais: 80 },
  { skill: "Écriture", malagasy: 85, francais: 80, anglais: 65 },
  { skill: "Moyenne", malagasy: 94, francais: 86, anglais: 73 },
];

const slides = [
  { id: "soft", label: "Soft Skills" },
  { id: "hard", label: "Hard Skills" },
  { id: "langues", label: "Langues" },
  { id: "general", label: "Générales" },
];

export function Skills() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="skills" className="relative flex min-h-screen flex-col justify-center overflow-hidden scroll-mt-24">
      <Image
        src="/tree-bg.svg"
        alt=""
        fill
        className="pointer-events-none object-contain opacity-[0.08]"
        aria-hidden
      />
      <span className="inline-flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-[0.25em] text-accent">
        <span className="inline-block size-1.5 rounded-full bg-accent/60" />
        INPUT 3
      </span>
      <h2 className="section-title mt-3">Compétences</h2>
      <div className="mt-1 mb-16 h-0.5 w-16 bg-accent" />

      <div className="relative mx-auto w-full max-w-lg">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Soft Skills
              </h3>
              <ResponsiveContainer width="100%" height={420}>
                <RadarChart
                  data={softSkills}
                  cx="50%"
                  cy="50%"
                  outerRadius="90%"
                  margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                  <PolarGrid stroke="#495057" strokeOpacity={0.3} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "#ADB5BD", fontSize: 13, fontFamily: "Space Grotesk" }}
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
                    stroke="#6C757D"
                    fill="#6C757D"
                    fillOpacity={0.15}
                    strokeWidth={1.5}
                    dot={{ r: 4, fill: "#6C757D", stroke: "#F8F9FA", strokeWidth: 1 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Hard Skills
              </h3>
              <ResponsiveContainer width="100%" height={420}>
                <RadarChart
                  data={hardSkills}
                  cx="50%"
                  cy="50%"
                  outerRadius="88%"
                  margin={{ top: 10, right: 50, bottom: 10, left: 50 }}
                >
                  <PolarGrid stroke="#495057" strokeOpacity={0.3} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "#ADB5BD", fontSize: 11, fontFamily: "Space Grotesk" }}
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
                    stroke="#6C757D"
                    fill="#6C757D"
                    fillOpacity={0.15}
                    strokeWidth={1.5}
                    dot={{ r: 4, fill: "#6C757D", stroke: "#F8F9FA", strokeWidth: 1 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Langues
              </h3>
              <div className="flex items-center justify-center gap-6 text-[10px] font-heading uppercase tracking-[0.1em]">
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#CED4DA" }} />
                  Malagasy
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#6C757D" }} />
                  Français
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-2 rounded-full" style={{ backgroundColor: "#212529" }} />
                  Anglais
                </span>
              </div>
              <ResponsiveContainer width="100%" height={420}>
                <RadarChart data={langData} cx="50%" cy="50%" outerRadius="80%">
                  <PolarGrid gridType="polygon" stroke="#495057" strokeOpacity={0.3} />
                  <PolarAngleAxis
                    dataKey="skill"
                    tick={{ fill: "#ADB5BD", fontSize: 12, fontFamily: "Space Grotesk" }}
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
                    stroke="#CED4DA"
                    fill="#CED4DA"
                    fillOpacity={0.15}
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#CED4DA", stroke: "#F8F9FA", strokeWidth: 1 }}
                  />
                  <Radar
                    name="Français"
                    dataKey="francais"
                    stroke="#6C757D"
                    fill="#6C757D"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    dot={{ r: 4, fill: "#6C757D", stroke: "#F8F9FA", strokeWidth: 1 }}
                  />
                  <Radar
                    name="Anglais"
                    dataKey="anglais"
                    stroke="#212529"
                    fill="#495057"
                    fillOpacity={0.12}
                    strokeWidth={2}
                    dot={{ r: 4.5, fill: "#212529", stroke: "#F8F9FA", strokeWidth: 1 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="min-w-0 w-full shrink-0">
              <h3 className="mb-1 text-center font-heading text-sm tracking-wide text-foreground">
                Compétences Générales
              </h3>
              <div className="mx-auto max-w-xs">
                <div>
                  <p className="mb-1 text-center font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    IT
                  </p>
                  <ResponsiveContainer width="100%" height={420}>
                    <RadarChart
                      data={itSkills}
                      cx="50%"
                      cy="50%"
                      outerRadius="90%"
                      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    >
                      <PolarGrid stroke="#495057" strokeOpacity={0.25} />
                      <PolarAngleAxis
                        dataKey="skill"
                        tick={{ fill: "#ADB5BD", fontSize: 12, fontFamily: "Space Grotesk" }}
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
                        stroke="#6C757D"
                        fill="#6C757D"
                        fillOpacity={0.15}
                        strokeWidth={1.5}
                        dot={{ r: 4, fill: "#6C757D", stroke: "#F8F9FA", strokeWidth: 1 }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrent(i)}
              className={`
                rounded-sm px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.15em] transition-all duration-300
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
