export const GROUPS = {
  goru: 'Görüntü işleme ve takip',
  sistem: 'Sistem ve savunma yazılımı',
  'ses-dil': 'Ses, sinyal ve dil modelleri',
  web: 'Web, mobil ve güvenlik',
} as const;

export type Group = keyof typeof GROUPS;
