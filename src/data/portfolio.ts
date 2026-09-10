import type { Project } from "@/types/portfolio";

export const contact = {
  email: "iriskayequiambao@gmail.com",
  facebook: "eyerieskey",
  instagram: "eyerieskey",
};

export const projects: {
  uiDesign: Project[];
  brandIdentity: Project[];
} = {
  uiDesign: [
    {
      title: "MACCII",
      category: "UI Design",
      description:
        "Metro Angeles Chamber of Commerce and Industry, Inc. — UI contributed during internship/trainee journey.",
      images: ["/images/ui-design/maccii/placeholder.svg"],
      link: "#", // TODO: you will provide live URL
    },
    {
      title: "SUPER-AIRE",
      category: "UI Design",
      description:
        "Superaire Airconditioning — clean, user-friendly marketing + product interface.",
      images: ["/images/ui-design/superaire/placeholder.svg"],
      link: "#", // TODO: you will provide live URL
    },
    {
      title: "CHEF VINCE GARCIA",
      category: "UI Design",
      description:
        "Chef Vince Garcia — restaurant brand website UI.",
      images: ["/images/ui-design/chef-vince/placeholder.svg"],
      link: "#", // TODO: you will provide live URL
    },
  ],
  brandIdentity: [
    {
      title: "Knit Knots",
      category: "Brand Identity",
      description:
        "Small handmade crochet business (2023) — lilac/white/purple, cute yet refined.",
      images: ["/images/knit-knots/knit-knots-left-img.png"],
      accentColor: "#9290c3",
    },
    {
      title: "Techvance",
      category: "Brand Identity",
      description:
        "Modern digital solutions company — deep teal/blue, trustworthy and scalable.",
      images: ["/images/techvance/techvance-1.png"],
      accentColor: "#0c4056",
    },
  ],
};
