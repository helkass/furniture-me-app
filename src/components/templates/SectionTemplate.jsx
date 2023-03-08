import React from "react";

import Container from "../comps/Container";
import TitleSection from "../comps/Title";

const SectionTemplate = ({ children, title, idSection }) => {
   return (
      <section id={idSection}>
         <Container>
            <div className="flex flex-col gap-4 my-2">
               <TitleSection>{title}</TitleSection>
               {children}
            </div>
         </Container>
      </section>
   );
};

export default SectionTemplate;
