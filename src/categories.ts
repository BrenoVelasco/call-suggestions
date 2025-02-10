export type Category = {
  title: string;
  enabled: boolean;
  subCategories: Category[];
};

const categories: Category[] = [
  {
    title: "INTRODUCTIONS",
    enabled: true,
    subCategories: [],
  },
  {
    title: "GOODBYES",
    enabled: true,
    subCategories: [],
  },
  {
    title: "MAIN RESPONSES",
    enabled: false,
    subCategories: [
      {
        title: "You're welcome",
        enabled: false,
        subCategories: [],
      },
    ],
  },
  {
    title: "GENERAL CHATTER",
    enabled: true,
    subCategories: [
      {
        title: "Thank you",
        enabled: true,
        subCategories: [],
      },
      {
        title: "Sure, no problem",
        enabled: true,
        subCategories: [],
      },
      {
        title: "CLARIFY",
        enabled: false,
        subCategories: [
          {
            title: "Can you repeat that please?",
            enabled: true,
            subCategories: [],
          },
        ],
      },
    ],
  },
];

export default categories;
