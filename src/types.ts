//* Data Types

export interface Sections {
  title: string;
  color: string;
  image: string;
  description: string;
}

//* Craracter Section types

export interface CharactersData {
  id: number;
  name: string;
  status: string;
  species: string;
  type ?: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  }; 
  image: string;
  episode: string[];
}


//* Episode Section types

export type Episodes = {
  name:string;
  episode: string;
  id: number;
}

export interface EpisodesData {
  id: number;
  name: string;
  episode: string;
  characters: string[];
}

export interface SeasonsData {
  season: string;
  image: string;
}


//* Props Types

export interface HomeMainProps {
  isActive: boolean;
  setIsLoading: (val: boolean) => void;
}

export interface MenuCardProps {
  section: Sections;
  isActive: boolean;
  setIsLoading: (val:boolean) => void;
}

export type PaginationProps = { 
  page:number;
  setPage: (page:number) => void;
}


//! Characters props

export interface CharactersProps  {
  page: number;
  setPage: (page:number) => void;
}

export interface CharacterCardProps {
  character: CharactersData;
}


export interface CharacterModalProps { 
  setOpenModal: ( openModal:boolean ) => void;
  character: CharactersData;
}

//! Episode props

export interface EpisodeCardProps {
  index: number;
  image: string;
  season: string;
  episodes: Episodes[];
}


export interface EpisodeProps {
  episode: string;
  name: string;
}
