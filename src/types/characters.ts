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

