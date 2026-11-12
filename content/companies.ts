import { ameropa, beehivve, brasscollective, me, smartseer } from './images';

export const companies = {
  smartseer: { logo: smartseer, brandColor: '#0001AC' },
  ameropa: { logo: ameropa, brandColor: '#dde1ac' },
  beehivve: { logo: beehivve, brandColor: '#000000' },
  freelancer: { logo: me, brandColor: '#b7e4c7' },
  music: { logo: brasscollective, brandColor: '#000000' },
} as const;

export type CompanyId = keyof typeof companies;
