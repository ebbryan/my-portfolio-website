import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { PersonalDetails } from "./aboutme.interface";
import { getPersonalDetails } from "./personalDetailsObj";
// import personalDetails from "./personalDetails.json" assert { type: "json" };

const SiteAboutMeSection = () => {
  const details: PersonalDetails = getPersonalDetails();

  return (
    <section className="flex justify-center items-center min-h-screen p-5">
      <div className="w-full bg-white/60 flex flex-col gap-3">
        <div className="flex items-center justify-center md:items-start md:justify-start">
          <h1 className="text-4xl font-black flex gap-3 text-center">
            About
            <span className="text-orange-500">Me</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Basic Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Basic Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(details.basicInfo).map(([label, value]) => (
                  <div key={label}>
                    <h1 className="font-bold">{label}:</h1>
                    <p className="break-words whitespace-pre-wrap">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(details.contactInfo).map(([label, value]) => (
                  <div key={label}>
                    <h1 className="font-bold">{label}:</h1>
                    {label.includes("Email") ? (
                      <a
                        href={`mailto:${value}`}
                        className="text-blue-500 hover:underline break-words whitespace-pre-wrap"
                      >
                        {value}
                      </a>
                    ) : label.includes("Phone") ? (
                      <a
                        href={`tel:${value}`}
                        className="text-blue-500 hover:underline break-words whitespace-pre-wrap"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="break-words whitespace-pre-wrap">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h1 className="font-bold">Current Role:</h1>
                  <p className="break-words whitespace-pre-wrap">
                    {details.experience.currentRole}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">Years of Experience:</h1>
                  <p className="break-words whitespace-pre-wrap">
                    {details.experience.years}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">Available For:</h1>
                  <p className="break-words whitespace-pre-wrap">
                    {details.experience.availableFor}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages & Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Languages & Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h1 className="font-bold">Languages:</h1>
                  <p className="break-words whitespace-pre-wrap">
                    {details.languages.join(", ")}
                  </p>
                </div>
                <div>
                  <h1 className="font-bold">Skills:</h1>
                  <ul className="list-disc pl-5">
                    {details.skills.map((skill) => (
                      <li
                        key={skill}
                        className="break-words whitespace-pre-wrap"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SiteAboutMeSection;
