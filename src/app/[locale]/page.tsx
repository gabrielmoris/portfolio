// import { useTranslations } from 'next-intl';
import { getProjectsData } from '@/features/loader';

export default async function Home() {
  // const t = useTranslations('HomePage');

  const projects = await getProjectsData('en');
  console.log(projects);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <h1>{t('title')}</h1> */}
    </div>
  );
}
