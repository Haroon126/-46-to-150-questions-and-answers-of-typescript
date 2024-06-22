// - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let computer: {
  name: string;
  skills: {
    languages: string[];
    tools: string[];
    frameworks: string[];
  };
  model: number;
  year: number;
} = {
  name: "Lenovo",
  skills: {
    languages: ["C", "C++", "Java"],
    tools: ["Visual Studio", "Visual Studio Code", "Notepad++"],
    frameworks: ["React", "Angular", "Vue"],
  },
  model: 15,
  year: 2020,
};

console.log(computer);

console.log(computer.skills);
