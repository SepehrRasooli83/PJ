// app/api/youtube-videos/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

import { FilterType } from '../../types/FilterType';

export async function GET(request: Request) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const { searchParams } = new URL(request.url);

  //filtering inputs
  const q = searchParams.get('q') || ''; // Get 'q' param or default to an empty string
  const filterType = searchParams.get('filterType') || '';
  const maxResults = 27;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: apiKey,
        part: 'snippet',
        q: q, // Use the dynamic 'q' parameter
        type: 'video', // Only return videos
        maxResults: maxResults, // Dynamic maxResults
        order: 'relevance', // Order by relevance
      },
    });

    let videos = [];
    //Filteration process based on the filter type:
    switch(filterType){
        case FilterType.Title:
            // Filter results where the 'title' contains the query term
            videos = response.data.items.filter((item: any) =>
            q ? item.snippet.title.toLowerCase().includes(q.toLowerCase()) : true);
            break;
        case FilterType.Channel:
            // Filter results where the 'channel' contains the query term
            videos = response.data.items.filter((item: any) =>
            q ? item.snippet.channelTitle.toLowerCase().includes(q.toLowerCase()) : true);
            break;
        case FilterType.Description:
            // Filter results where the 'description' contains the query term
            videos = response.data.items.filter((item: any) =>
            q ? item.snippet.description.toLowerCase().includes(q.toLowerCase()) : true);
            break;
    }

    //returning final result
    const result = videos.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
}
