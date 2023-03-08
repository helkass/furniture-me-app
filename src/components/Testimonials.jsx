import React from "react";

import profile from "../assets/profile.svg";

import SectionTemplate from "./templates/SectionTemplate";
import { AiFillStar } from "react-icons/ai";

const reviewers = [
   {
      image: profile,
      name: "Serena Nixon",
      city: "New Mexico",
      rating: 5,
      comment: {
         title: "Great Quality",
         desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
      },
   },
   {
      image: profile,
      name: "Rihanna Buchanan",
      city: "Oklahoma",
      rating: 5,
      comment: {
         title: "Great Quality",
         desc: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage",
      },
   },
   {
      image: profile,
      name: "Oskar Rush",
      city: "Colorado",
      rating: 5,
      comment: {
         title: "Great Quality",
         desc: "and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero",
      },
   },
   {
      image: profile,
      name: "Rico Bryan",
      city: "Alaska",
      rating: 5,
      comment: {
         title: "Great Quality",
         desc: "written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
      },
   },
];

const Testimonials = () => {
   const [active, setActive] = React.useState(0);
   const comment = reviewers[active];

   return (
      <SectionTemplate title="testimonials" idSection="testimonial">
         <div className="flex gap-3 sm:flex-row flex-col gap-12 sm:gap-0">
            <div className="sm:w-1/2 sm:px-3 p-0 flex flex-col gap-4 justify-center items-center">
               {reviewers.map((review, idx) => (
                  <div
                     onClick={() => setActive(idx)}
                     key={idx}
                     className={`flex ${
                        idx == active && "shadow-xl"
                     } gap-3 w-9/12 items-center cursor-pointer h-16 px-6 rounded-xl`}>
                     <img
                        src={review.image}
                        className="rounded-full w-[40px]"
                     />
                     <div>
                        <p>{review.name}</p>
                        <span className="text-[12px] text-black/60">
                           {review.city}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
            <div className="sm:w-1/2 px-3 flex flex-col transition-all ease-in-out duration-700 gap-5 justify-center text-center items-center">
               <p className="font-semibold text-xl">{comment.comment.title}</p>
               <div className="flex gap-2 flex-nowrap">
                  {[...Array(comment.rating)].map((_, i) => (
                     <AiFillStar color="yellow" key={i} size={25} />
                  ))}
               </div>
               <p>{comment.comment.desc}</p>
            </div>
         </div>
      </SectionTemplate>
   );
};

export default Testimonials;
