import { Nav, ScrollProgress, useReveal } from "./primitives";
import { Contact, Hero, RoleIntro } from "./sections";
import { CaseEmbedContext } from "./case-embed";
import { WORK_CASE_COMPONENTS } from "./work-cases";
import { getRole, type RolePath } from "@/data/roles";

// One page per role: same hero and footer as the homepage, the role intro
// (with CV button and an in-page index), then every case of this role
// rendered in full — no clicking through to a separate case page. The page is "isolated":
// the only way out is the footer's single homepage button.
export function RolePage({ path }: { path: RolePath }) {
  useReveal();
  const role = getRole(path);
  return (
    <main className="bg-background text-foreground">
      <ScrollProgress />
      <Nav isolated />
      <Hero isolated title={role.name} />
      <RoleIntro role={role} />
      <CaseEmbedContext.Provider value={true}>
        {role.cases.map((slug) => {
          const CaseComponent = WORK_CASE_COMPONENTS[slug];
          return CaseComponent ? (
            <div key={slug} id={slug} className="scroll-mt-16 border-t border-hairline">
              <CaseComponent />
            </div>
          ) : null;
        })}
      </CaseEmbedContext.Provider>
      <Contact isolated cvUrl={role.cvUrl} />
    </main>
  );
}

export function roleHead(path: RolePath) {
  const role = getRole(path);
  return {
    meta: [
      { title: role.metaTitle },
      { name: "description", content: role.metaDescription },
      { property: "og:title", content: role.metaTitle },
      { property: "og:description", content: role.metaDescription },
      { name: "twitter:title", content: role.metaTitle },
      { name: "twitter:description", content: role.metaDescription },
    ],
  };
}
