// api/landing.js
import { getLandingSocialData } from "@/utils/axiosInstance";
const landingSocialsHandler = async (req, res) => {
  try {
    const socialData = await getLandingSocialData();
    res.status(200).json(socialData);
  } catch (error) {
    console.error("Error fetching landing data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default landingSocialsHandler;
