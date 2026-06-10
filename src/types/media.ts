export interface MediaItem {
  Id: string;
  Name: string;
  Type: string;
  ProductionYear?: number;
}

export interface DownloadItem {
  nzo_id: string;
  filename: string;
  percentage: string;
  status: string;
  timeleft: string;
  mb: string;
  priority: string;
}

export interface SearchResult {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  media_type: string;
  release_date?: string;
}
