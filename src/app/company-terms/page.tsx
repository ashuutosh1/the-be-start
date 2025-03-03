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
    <div className="bg-gray-50 text-black">
      <div className="flex max-lg:flex-col max-w-6xl mx-auto px-4 max-lg:px-2">

        {/* Dropdown for small screens */}
        <div className="lg:hidden flex relative mt-10">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded-lg shadow-md flex justify-between items-center"
          >
            Select Section
            <span className="ml-2">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
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

        {/* Sidebar for large screens */}
        <div className="lg:min-w-60 max-lg:hidden px-5 my-16 bg-white rounded-2xl shadow-xl">
          <div className="flex flex-col px-2 py-10 gap-6 items-center justify-center">
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
                className={`w-full text-base font-semibold text-gray-800 hover:border border-black rounded-xl p-2 ${activeSection === key ? "bg-gray-200" : ""
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex-1 px-6 max-lg:p-0">{renderContent()}</div>
      </div>
    </div>
  );
}

export default CompanyTerms;
