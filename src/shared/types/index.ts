export interface PlanetInfo {
  id: number;
  name: Languages;
  radius: Weight;
  weight: Weight;
  distance: number;
  day_length: DayLength;
  satellite_count: SatelliteCount;
  temperature: TempatureInfo;
  description: Languages;
  rotation_period: RotationPeriod;
}

interface SatelliteCount {
  count: number;
  names: string[] | [];
}

interface RotationPeriod {
  hours: number;
  days: number;
}

interface Languages {
  en: string;
  ru: string;
}

interface Weight {
  value: number;
  multiply: number;
}

interface DayLength {
  days: number;
  hours: number;
  minutes: number;
}

interface TempatureInfo {
  min: number;
  max: number;
}
