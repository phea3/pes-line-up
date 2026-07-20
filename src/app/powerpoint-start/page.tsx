"use client";

import { Card, CardHeader, CardBody, Divider, Chip } from "@nextui-org/react";
import Image from "next/image";
import imageUrl from "../../../public/hq720.jpg";
import image2Url from "../../../public/images.jpeg";
import image3Url from "../../../public/about-me.png";
import image4Url from "../../../public/calendar.png";

const themes = [
  {
    name: "Office",
    color: "bg-blue-500",
    description: "Default Microsoft theme",
  },
  {
    name: "Facet",
    color: "bg-purple-500",
    description: "Modern and colorful",
  },
  {
    name: "Ion",
    color: "bg-cyan-500",
    description: "Clean technology style",
  },
  {
    name: "Retrospect",
    color: "bg-orange-500",
    description: "Creative business design",
  },
];

const themes2 = [
  {
    name: "Office",
    variants: ["#3B82F6", "#111827", "#16A34A", "#7C3AED"],
  },
  {
    name: "Facet",
    variants: ["#0EA5E9", "#F97316", "#10B981", "#EF4444"],
  },
  {
    name: "Ion",
    variants: ["#0F172A", "#2563EB", "#7C3AED", "#14B8A6"],
  },
  {
    name: "Retrospect",
    variants: ["#DC2626", "#F59E0B", "#4F46E5", "#059669"],
  },
];

export default function PowerpointStart() {
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Microsoft PowerPoint</h1>

        <p className="text-default-500 mt-2">
          Lesson 1 • Getting Started with Microsoft PowerPoint
        </p>
      </div>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">🎯 Learning Objectives</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Understand what Microsoft PowerPoint is.</li>
            <li>Know where PowerPoint is used.</li>
            <li>Learn the main interface.</li>
            <li>Create your first presentation.</li>
            <li>Save your work correctly.</li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={imageUrl}
              alt="start"
              fill
              priority
              className="object-contain"
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">
            📖 What is Microsoft PowerPoint?
          </h2>

          <p>
            Microsoft PowerPoint is presentation software that allows users to
            create slides containing text, pictures, charts, tables, videos, and
            animations.
          </p>

          <Divider />

          <p>It is commonly used in:</p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Schools</li>
            <li>Business meetings</li>
            <li>Project presentations</li>
            <li>Training sessions</li>
            <li>Public speaking</li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={image2Url}
              alt="start"
              fill
              priority
              className="object-contain"
            />
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">
            🖥️ Main Parts of PowerPoint
          </h2>

          <ol className="list-decimal ml-6 space-y-2">
            <li>Title Bar</li>
            <li>Quick Access Toolbar</li>
            <li>Ribbon</li>
            <li>Slides Pane</li>
            <li>Slide Workspace</li>
            <li>Notes Section</li>
            <li>Status Bar</li>
            <li>Zoom Control</li>
          </ol>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">✍️ Activity 1</h2>

          <ol className="list-decimal ml-6 space-y-2">
            <li>Open Microsoft PowerPoint.</li>
            <li>Create a Blank Presentation.</li>
            <li>
              Change the title to <b>About Me</b>.
            </li>
            <li>Add your name.</li>
            <li>Add one more slide.</li>
            <li>
              Save the presentation as <b>My First Presentation.pptx</b>.
            </li>
          </ol>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={image3Url}
              alt="start"
              fill
              priority
              className="object-contain"
            />
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">💡 Exercise</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Create a presentation with 3 slides.</li>
            <li>Slide 1: Your Name</li>
            <li>Slide 2: Your Hobbies</li>
            <li>Slide 3: Your Dream Job</li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">🎨 Choose a Theme</h2>
        </CardHeader>

        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {themes.map((theme) => (
              <Card
                key={theme.name}
                isPressable
                shadow="sm"
                className="hover:scale-105 transition-transform"
              >
                <CardBody className="p-0">
                  {/* Theme Preview */}
                  <div
                    className={`h-36 ${theme.color} flex flex-col justify-center items-center text-white`}
                  >
                    <div className="w-20 h-2 rounded bg-white/80 mb-3" />
                    <div className="w-28 h-2 rounded bg-white/60 mb-2" />
                    <div className="w-16 h-2 rounded bg-white/40" />
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{theme.name}</h3>

                    <p className="text-sm text-default-500">
                      {theme.description}
                    </p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <div>
            <h2 className="text-2xl font-semibold">🎨 Design → Themes</h2>

            <p className="text-default-500">
              Every PowerPoint theme comes with multiple color variants.
            </p>
          </div>
        </CardHeader>

        <CardBody>
          <div className="grid md:grid-cols-2 gap-6">
            {themes2.map((theme) => (
              <Card key={theme.name} shadow="sm">
                <CardBody className="space-y-4">
                  {/* Preview */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-20 bg-default-100 flex items-center justify-center">
                      <div className="space-y-2">
                        <div className="w-28 h-3 rounded bg-default-700" />
                        <div className="w-40 h-2 rounded bg-default-400" />
                        <div className="w-24 h-2 rounded bg-default-300" />
                      </div>
                    </div>

                    <div className="p-3 flex justify-between items-center">
                      <span className="font-semibold">{theme.name}</span>

                      <Chip size="sm">Theme</Chip>
                    </div>
                  </div>

                  {/* Variants */}
                  <div>
                    <p className="text-sm font-medium mb-2">Variants</p>

                    <div className="flex gap-2">
                      {theme.variants.map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full border-2 border-default"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </CardBody>
      </Card>

      <Card>
        <CardBody className="space-y-4">
          <h2 className="text-2xl font-semibold">💡 Exercise 2</h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Create a calendar presentation with 7 slides.</li>
            <li>Slide 1: Monday & 1st</li>
            <li>Slide 2: Tuesday & 2nd</li>
            <li>Slide 3: Wednesday & 3rd</li>
            <li>Slide 4: Thurday & 4th</li>
            <li>Slide 5: Friday & 5th</li>
            <li>Slide 6: Saturday & 6th</li>
            <li>Slide 7: Sunday & 7th</li>
          </ul>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="relative h-[340px] w-full shrink-0 overflow-hidden rounded-2xl">
            <Image
              src={image4Url}
              alt="start"
              fill
              priority
              className="object-contain"
            />
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
