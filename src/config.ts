import type { Question } from "./data";

export const teamName: string = "Stable Circuits Robotics";

/** Whether to enable the inventory management system */
export const inventory: boolean = true;

/** Whether to enable the safety reporting system */
export const safety: boolean = true;

/** Build Your Own Safety Report */
export const safetyForm: Array<Question> = [{"label": "Who got injured?", "name": "name", "required": true}, {"label": "Describe the Injury", "name": "injury", "required": true}, {"label": "How did it occur?", "name": "description", "required": true}, {"label": "What was done to resolve the issue?", "name": "resolution", "required": true }];

/** Whether to enable the timecard system */
export const timecard: boolean = true;

/** Add custom list items (formatted name, link) */
export const customItems: Array<Record<string, string>> = [{name: "Scout", link: "https://StableScout2023.netlify.com"}, {name: "Website", link: "https://www.stablecircuits6305.com"}];