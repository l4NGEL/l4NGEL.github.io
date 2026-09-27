import AutoTrackPipeline from './AutoTrackPipeline.astro';
import CrowdCorrelation from './CrowdCorrelation.astro';
import StereoPipeline from './StereoPipeline.astro';
import TacNetTopology from './TacNetTopology.astro';
import AvioArchitecture from './AvioArchitecture.astro';
import GeoIngest from './GeoIngest.astro';

// Frontmatter'daki `diagram` alanı bu anahtarlardan birini gösterir.
export const DIAGRAMS = {
  autotrack: AutoTrackPipeline,
  crowd: CrowdCorrelation,
  stereo: StereoPipeline,
  tacnet: TacNetTopology,
  avio: AvioArchitecture,
  geo: GeoIngest,
} as const;
