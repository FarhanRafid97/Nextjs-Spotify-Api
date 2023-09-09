import { getTopTracks } from '@/lib/spotify';
import { MappingInterface, TopTrackResponse } from '@/types/UserTopItems';
import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  const limit = Number(req.nextUrl.searchParams.get('limit')) ?? 0;
  const offset = Number(req.nextUrl.searchParams.get('offset')) ?? 0;
  const response = await getTopTracks({
    limit,
    offset,
  });
  const { items } = (await response.json()) as TopTrackResponse;

  const tracks: MappingInterface[] = items.slice(0, 10).map((track) => {
    const newObj = {
      artist: track.artists.map((_artist) => _artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
      images: track.album.images[0],
      preview: track.preview_url ?? '-',
    };
    return newObj;
  });

  let json_response = {
    status: 'success',
    tracks,
  };
  return NextResponse.json(json_response);
}
