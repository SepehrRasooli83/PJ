import axios from "axios";
import { NextResponse } from "next/server";
import { parseStringPromise } from 'xml2js'; // Importing xml2js for parsing XML

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const q = searchParams.get("q") || "";

  try {
    // Fetch the RSS feed for the given tag
    const response = await axios.get(`https://medium.com/feed/tag/${q}`);

    // Parse the XML response to JSON using xml2js
    const parsedData = await parseStringPromise(response.data);

    // Extract articles from the parsed XML
    const articles = parsedData.rss.channel[0].item;

    // Map the articles to a simpler format for the frontend
    const result = articles.map((item: any) => ({
      id: item.guid[0], // Unique ID (GUID)
      title: item.title[0], // Article title
      link: item.link[0], // Article link
      summary: item.description[0], // Article summary/description
      published: item.pubDate[0], // Published date
      author: item.author ? item.author[0] : "Unknown", // Author name (if available)
    }));

    // Return the result as JSON
    return NextResponse.json(result);

  } catch (error) {
    console.error("Error in fetching articles", error);
    return NextResponse.json({ error: "Error fetching articles" });
  }
}
