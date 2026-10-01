export interface LearningPath {
  id: string;
  name: string;
  icon: string;
  categoryQuery: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: "design",
    name: "Design",
    icon: "Compass",
    categoryQuery: "UI/UX Design",
  },
  {
    id: "development",
    name: "Development",
    icon: "Code2",
    categoryQuery: "Web Development",
  },
  {
    id: "it-software",
    name: "IT & Software",
    icon: "Laptop",
    categoryQuery: "Data Science",
  },
  {
    id: "business",
    name: "Business",
    icon: "Building2",
    categoryQuery: "Freelance & Entrepreneurship",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: "Megaphone",
    categoryQuery: "Marketing",
  },
  {
    id: "photography",
    name: "Photography",
    icon: "Camera",
    categoryQuery: "Photography",
  },
];
