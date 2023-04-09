interface TopItems {
  href: string;
  limit: integer;
  next: string;
  offset: integer;
  previous: string;
  total: integer;
  items: (TopArtists | TopTracks)[];
}

interface TopArtists {
  external_urls: { spotify: string };
  followers: { href: string | null; total: integer };
  genres: string[];
  href: string;
  id: string;
  images: Image[{ url: string; height: integer; width: integer }];
  name: string;
  popularity: integer;
  type: string;
  uri: string;
}

interface TopTracks {
  album: {
    album_type: string;
    total_tracks: integer;
    available_markets: string[];
    external_urls: { spotify: string };
    href: string;
    id: string;
    images: [{ url: string; height: integer; width: integer }];
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: { reason: string };
    type: string;
    uri: string;
    copyrights: { text: string; type: string };
    external_ids: { isrc: string; ean: string; upc: string };
    genres: string[];
    lable: string;
    popularity: integer;
    album_group: string;
    artists: {}[];
  };
  artists: { external_urls: { spotify: string }; href: string; id: string; name: string; type: string; uri: string }[];
  available_markets: string[];
  disc_number: integer;
  duration_ms: integer;
  explicit: boolean;
  external_ids: { isrc: string; ean: string; upc: string };
  external_urls: { spotify: string };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {};
  restrictions: { reason: string };
  name: string;
  popularity: integer;
  preview_url: string | null;
  track_number: integer;
  type: string;
  uri: string;
  is_local: boolean;
}
