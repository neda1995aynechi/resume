// api/landing.js
import { getLandingData } from "@/utils/axiosInstance";

const landingHandler = async (req, res) => {
  try {
    const landingData = await getLandingData();
    res.status(200).json(landingData);
  } catch (error) {
    console.error("Error fetching landing data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default landingHandler;
