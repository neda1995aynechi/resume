// api/landing.js
import { getArticleData, getArticleTitleData } from "@/utils/axiosInstance";

export async function getArticle(req, res) {
  try {
    const articleData = await getArticleData();
    res.status(200).json(articleData);
  } catch (error) {
    console.error("Error fetching article data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getArticleTitle(req, res) {
  try {
    const articleTitleData = await getArticleTitleData();
    res.status(200).json(articleTitleData);
  } catch (error) {
    console.error("Error fetching article title data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
