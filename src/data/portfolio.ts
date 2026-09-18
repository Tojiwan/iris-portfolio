import type { Project } from "@/types/portfolio";

export const contact = {
  email: "iriskayequiambao@gmail.com",
  facebook: "https://facebook.com/eyeriskey",
  instagram: "https://instagram.com/eyeriskey",
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
      images: [
        "/images/MACCII/MACCII-left-1.PNG",
        "/images/MACCII/MACCII-left-2.PNG",
        "/images/MACCII/MACCII-right-top.png",
        "/images/MACCII/MACCII-right-b.png.png",
      ],
      link: "https://maccii.org.ph",
    },
    {
      title: "SUPER-AIRE",
      category: "UI Design",
      description:
        "Superaire Airconditioning — clean, user-friendly marketing + product interface.",
      images: [
        "/images/Super-Aire/super-aire-left-top.png",
        "/images/Super-Aire/siper-aire-left-bottom.png",
        "/images/Super-Aire/super-aire-right-1.PNG",
        "/images/Super-Aire/super-aire-right-2.PNG",
      ],
      link: "https://super-aire.com.ph",
    },
    {
      title: "CHEF VINCE GARCIA",
      category: "UI Design",
      description:
        "Chef Vince Garcia — restaurant brand website UI.",
      images: [
        "/images/Chef-Vince/chefvince-left.PNG",
        "/images/Chef-Vince/chefvince-middle-top.png",
        "/images/Chef-Vince/chefvince-middle-bottom.png",
        "/images/Chef-Vince/chefvince-right.PNG",
      ],
      link: "https://chefvinceculinarygroup.com",
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
