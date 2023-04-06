interface Playlist {
  href: string;
  items: PlaylistItemArray[];
  limit: integer;
  next: string;
  offset: integer;
  previous: string;
  total: integer;
}

interface PlaylistItemArray {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: [{ url: string; height: integer; width: integer }];
  name: string;
  owner: {};
  public: boolean;
  snaphshot_id: string;
  tracks: { href: string; total: integer };
  type: string;
  uri: string;
}
