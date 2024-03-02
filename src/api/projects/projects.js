/* eslint-disable import/no-anonymous-default-export */
// api/landing.js
import { getProjectsData } from "@/utils/axiosInstance";

export default async (req, res) => {
  try {
    const projectData = await getProjectsData();
    res.status(200).json(projectData);
  } catch (error) {
    console.error("Error fetching landing data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
