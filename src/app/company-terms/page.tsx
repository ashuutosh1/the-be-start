"use client";

import React, { useState } from "react";
import TermsPage from "./terms-condition/page";
import PrivacyPage from "./privacy-policies/page";
import SecurityPage from "./security-safety/page";
import CopyrightPage from "./copyright/page";
import HelpPage from "./help-center/page";
import MarketingPage from "./marketing/page";
import ReportBugPage from "./report-bugs/page";
import AboutPage from "./about-us/page";
import Logo from "../../../public/Landing-assets/term-logo-light.png";
import Image from 'next/image';

function CompanyTerms() {
  const [activeSection, setActiveSection] = useState("terms");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case "terms":
        return <TermsPage />;
      case "privacy":
        return <PrivacyPage />;
      case "security":
        return <SecurityPage />;
      case "copyright":
        return <CopyrightPage />;
      case "help":
        return <HelpPage />;
      case "marketing":
        return <MarketingPage />;
      case "bugs":
        return <ReportBugPage />;
      case "about":
        return <AboutPage />;
      default:
        return <TermsPage />;
    }
  };

  return (
    <div className="bg-gray-50 text-black flex">
      {/* Sidebar for large screens (Fixed Sidebar) */}
      <div className="lg:w-60 fixed top-0 left-0 h-screen bg-white max-lg:hidden shadow-xl p-5 overflow-y-auto">
        <Image src={Logo} alt="bemaxo-logo" className="max-w-40 h-auto my-4" />
        <div className="flex flex-col gap-6 items-center pt-10">
          {[
            { key: "terms", label: "Terms of Services" },
            { key: "privacy", label: "Privacy Policies" },
            { key: "security", label: "Safety and Security" },
            { key: "copyright", label: "Copyright Issues & Claims" },
            { key: "help", label: "Help Centre" },
            { key: "marketing", label: "Marketing and Ads" },
            { key: "bugs", label: "Report Bugs" },
            { key: "about", label: "About Us" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`w-full text-base font-semibold text-gray-800 hover:bg-gray-200 border-black rounded-xl p-2 ${activeSection === key ? "bg-purple-300" : ""
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Section (Scrollable) */}
      <div className="flex-1 lg:ml-64 px-6 max-lg:py-5 h-screen overflow-y-auto">
        {renderContent()}
      </div>

      {/* Dropdown for small screens */}
      <div className="lg:hidden flex fixed top-0 left-0 right-0 bg-white p-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full bg-white border border-gray-300 text-gray-500 px-4 py-2 rounded-lg shadow-md flex justify-between items-center"
        >
          {"Bemaxo "}
          <span className="ml-2">{dropdownOpen ? "▲" : "▼"}</span>
        </button>

        {dropdownOpen && (
          <div className="absolute w-fit mt-12 bg-white border-2">
            {[
              { key: "terms", label: "Terms of Services" },
              { key: "privacy", label: "Privacy Policies" },
              { key: "security", label: "Safety and Security" },
              { key: "copyright", label: "Copyright Issues & Claims" },
              { key: "help", label: "Help Centre" },
              { key: "marketing", label: "Marketing and Ads" },
              { key: "bugs", label: "Report Bugs" },
              { key: "about", label: "About Us" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => {
                  setActiveSection(key);
                  setDropdownOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyTerms;
