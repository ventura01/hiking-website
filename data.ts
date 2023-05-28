type LinksProps = { id: number; name: string; href: string };

export const links: LinksProps[] = [
  { id: 1, name: "home", href: "#home" },
  { id: 2, name: "features", href: "#features" },
  { id: 2, name: "testimonials", href: "#testimonials" },
  { id: 3, name: "contact", href: "#contact" },
];

export type TestimonialsProps = {
    text: string;
    name: string;
    image: string;
  };
export const testimonials: TestimonialsProps[] = [
    {
      text: "\“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
      name: "Anisha Li",
      image: "/images/avatar-anisha.png",
    },
    {
      text: "\“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
      name: "Ali Bravo",
      image: "/images/avatar-ali.png",
    },
    {
      text: "\“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
      name: "Richard Watts",
      image: "/images/avatar-richard.png",
    },
    {
      text: "\“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
      name: "Shanai Gough",
      image: "/images/avatar-shanai.png",
    },
  ];