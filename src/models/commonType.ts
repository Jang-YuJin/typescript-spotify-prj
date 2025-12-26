export interface ExternalURLs {
    spotify?: string;
};

export interface Image {
    url: string;
    height: number | null;
    width: number | null;
};

export interface Followers {
    href?: string | null;
    total?: number;
};

export interface Explicit_content {
    filter_enabled?: boolean;
    filter_locked?: boolean;
};