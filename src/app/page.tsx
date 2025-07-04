import { Competence } from "@/app/_components/competence";
import { CtoPartner } from "@/app/_components/cto-partner";
import { Services } from "./_components/services";
import { CaseStudies } from "@/app/_components/case-studies";
import React from "react";
import { Management } from "./_components/management";
import { CompanyOverview } from "./_components/company-overview";

export default function Home() {
  // "use cache";
  return (
    <div className="flex flex-col min-h-svh">
      <section className="relative">
        <CtoPartner />
      </section>
      <section className="relative">
        <CaseStudies />
      </section>
      <section className="relative">
        <Services />
      </section>
      <section className="relative">
        <Competence />
      </section>
      <section className="relative">
        <Management />
      </section>
      <section className="relative">
        <CompanyOverview />
      </section>
    </div>
  );
}
