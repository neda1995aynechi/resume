// api/landing.js
import { getAboutData } from "@/utils/axiosInstance";

const aboutHandler = async (req, res) => {
  try {
    const aboutData = await getAboutData();
    res.status(200).json(aboutData);
  } catch (error) {
    console.error("Error fetching landing data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default aboutHandler;
