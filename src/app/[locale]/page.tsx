// import { useTranslations } from 'next-intl';
import {
  getExperienceData,
  getMeData,
  getProjectsData,
} from '@/features/loader';

export default async function Home() {
  // const t = useTranslations('HomePage');

  const projects = await getProjectsData('en');
  const meData = await getMeData('en');
  const experienceData = await getExperienceData('en');
  console.log(projects);
  console.log(meData);
  console.log(experienceData);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <h1>{t('title')}</h1> */}
    </div>
  );
}
