import React from 'react';
import LegalPageLayout, { LegalSection } from './LegalPageLayout';


const sections = [
  { id: 'acceptance', heading: 'Acceptance of terms' },
  { id: 'description', heading: 'Description of service' },
  { id: 'accounts', heading: 'Accounts & eligibility' },
  { id: 'ai-output', heading: 'AI-generated content' },
  { id: 'responsibilities', heading: 'User responsibilities' },
  { id: 'content-ownership', heading: 'Content & data ownership' },
  { id: 'prohibited', heading: 'Prohibited use' },
  { id: 'termination', heading: 'Termination' },
  { id: 'liability', heading: 'Limitation of liability' },
  { id: 'changes', heading: 'Changes to these terms' },
  { id: 'governing-law', heading: 'Governing law' },
  { id: 'contact', heading: 'Contact' },
];

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms & Conditions" lastUpdated="[DATE]" sections={sections}>
      <LegalSection id="acceptance" number={1} heading="Acceptance of terms">
        <p>
          By creating an account or otherwise using Kognitiv Lab (the "Service"), you agree to
          be bound by these Terms & Conditions. If you are using the Service on behalf of a
          school, you confirm you have authority to accept these terms for that institution.
          [Placeholder — confirm exact acceptance mechanism, e.g. checkbox at signup.]
        </p>
      </LegalSection>

      <LegalSection id="description" number={2} heading="Description of service">
        <p>
          Kognitiv Lab is a school management platform that lets teachers record academic
          performance and lets parents view their child's grades and progress. The Service
          includes Kognitiv Core, an AI feature that generates structured feedback based on
          entered grades. [Placeholder — one-paragraph description of full feature set.]
        </p>
      </LegalSection>

      <LegalSection id="accounts" number={3} heading="Accounts & eligibility">
        <p>
          Teacher accounts are issued by [the school / Kognitiv Lab — confirm which]. Parent
          access is granted via a student's admission number and a PIN issued by the school,
          rather than a self-registered parent account. [Placeholder — confirm minimum age for
          any user who registers directly, and who is responsible for keeping login credentials
          confidential.]
        </p>
      </LegalSection>

      <LegalSection id="ai-output" number={4} heading="AI-generated content">
        <p>
          Kognitiv Core generates feedback and summaries based on grade data using an AI model.
          This output is provided as a drafting aid for teachers and an informational aid for
          parents — it is not a substitute for a qualified educator's professional judgment and
          may contain errors or inaccuracies. [Placeholder — confirm whether teachers must
          review/approve AI output before it reaches parents, and clarify liability if not.]
        </p>
      </LegalSection>

      <LegalSection id="responsibilities" number={5} heading="User responsibilities">
        <ul className="list-disc pl-5 space-y-1">
          <li>Keep your login credentials confidential.</li>
          <li>Enter accurate information where you are responsible for doing so.</li>
          <li>[Placeholder — additional responsibilities specific to your school's policy.]</li>
        </ul>
      </LegalSection>

      <LegalSection id="content-ownership" number={6} heading="Content & data ownership">
        <p>
          Grade data and other academic records entered into the Service remain the property of
          [the school / the student's guardian — confirm]. Kognitiv Lab is granted a limited
          license to process this data solely to provide the Service, including generating
          Kognitiv Core feedback. [Placeholder — clarify data ownership terms with your school
          partner(s).]
        </p>
      </LegalSection>

      <LegalSection id="prohibited" number={7} heading="Prohibited use">
        <p>
          You may not use the Service to access records you are not authorized to view, attempt
          to circumvent account security, or use the Service in any way that violates applicable
          law. [Placeholder — expand with specifics relevant to your platform.]
        </p>
      </LegalSection>

      <LegalSection id="termination" number={8} heading="Termination">
        <p>
          [Placeholder — under what conditions can Kognitiv Lab suspend or terminate an account?
          What happens to a student's data if a school stops using the Service?]
        </p>
      </LegalSection>

      <LegalSection id="liability" number={9} heading="Limitation of liability">
        <p>
          [Placeholder — standard limitation-of-liability language, to be drafted or reviewed
          by a lawyer. This section carries real legal weight and should not be filled in from
          a template without review.]
        </p>
      </LegalSection>

      <LegalSection id="changes" number={10} heading="Changes to these terms">
        <p>
          We may update these Terms from time to time. [Placeholder — confirm notice method,
          e.g. email to account holders, in-app banner, and effective-date policy.]
        </p>
      </LegalSection>

      <LegalSection id="governing-law" number={11} heading="Governing law">
        <p>
          These Terms are governed by the laws of [Kenya — confirm jurisdiction with your
          legal contact].
        </p>
      </LegalSection>

      <LegalSection id="contact" number={12} heading="Contact">
        <p>
          Questions about these Terms can be sent to [CONTACT EMAIL].
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}