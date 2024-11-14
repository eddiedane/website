import Image from 'next/image';
import Link from 'next/link';
import { IoAccessibility } from 'react-icons/io5';
import { FaAccessibleIcon } from 'react-icons/fa6';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import mysqlLogo from '@/app/assets/images/skills/mysql.png';
import mongodbLogo from '@/app/assets/images/skills/mongodb.png';
import postgresLogo from '@/app/assets/images/skills/postgresql.png';
import nextLogo from '@/app/assets/images/skills/next.png';
import reactLogo from '@/app/assets/images/skills/react.svg';
import goLogo from '@/app/assets/images/skills/go.svg';
import nodeLogo from '@/app/assets/images/skills/node.svg';
import pythonLogo from '@/app/assets/images/skills/python.svg';
import gitLogo from '@/app/assets/images/skills/git.svg';
import kubernetesLogo from '@/app/assets/images/skills/kubernetes.svg';
import dockerLogo from '@/app/assets/images/skills/docker.svg';
import awsLogo from '@/app/assets/images/skills/aws.svg';

type Skill = {
  name: string;
  className?: string;
  categories: string[];
  link: string;
  strong?: 1 | 2 | 3 | 4 | 5;
};

const ALL = 'over the years';
const FRONTEND = 'frontend';
const BACKEND = 'backend';
const FULLSTACK = 'fullstack';
const DATABASE = 'database';
const DEVOPS_INFRA = 'devops & infra';
const AUTOMATION_DATA_EXTRACTION = 'data extraction & automation';
const OTHER = 'others';

export default function Skills() {
  return (
    <section
      id='skills'
      className={cn(
        'min-h-screen',
        'bg-stone-50 dark:bg-stone-800',
        'flex flex-col justify-center items-center',
        'gap-6',
        'snap-center snap-always',
      )}
    >
      <div className='container px-5 flex flex-col items-center gap-2 text-center'>
        <h2
          className={cn(
            'font-extrabold tracking-tighter',
            'xl:text-4xl md:text-3xl text-2xl',
            'text-stone-800 dark:text-stone-100',
            'text-center md:text-left',
            'leading-5',
          )}
        >
          Building Blocks<span className='hidden sm:inline'> of My Work</span>
        </h2>
        <p className='prose prose-sm prose-stone dark:prose-invert !leading-4 tracking-tight md:max-w-[30em]'>
          My continuous evolving skill set is a reflection of both my curiosity and ability to adapt
          to different technologies and environments.
        </p>
      </div>
      <div className='container md:!max-w-[36em] lg:!max-w-[56em] xl:!max-w-[62em] w-full'>
        <div className='px-5 md:px-0 grid grid-cols-12 grid-rows-5 xl:grid-rows-4 gap-2 sm:gap-3 lg:gap-4 md:!max-h-[24em] lg:!max-h-max xl:!max-h-[20em]'>
          <div className='skills-block col-span-6 sm:col-span-5 xl:col-span-4 row-span-2 xl:row-span-3 flex-col gap-1'>
            <Image
              src={goLogo}
              alt='The go programming language'
              className='w-10/12 sm:w-8/12 h-auto'
            />
            <span
              className={cn(
                'font-extrabold',
                'uppercase',
                'relative top-3',
                'tracking-wider',
                'text-stone-600',
                'sm:text-xl',
              )}
            >
              simplicity
            </span>
          </div>
          <div className='skills-block col-span-2 xl:col-span-1 row-span-1'>
            <Image src={nextLogo} alt='Next.js' className='w-14 md:w-12 lg:w-14 h-auto' />
          </div>
          <div className='skills-block col-span-4 sm:col-span-3 xl:col-span-2 row-span-1 flex justify-center items-center'>
            <span
              className={cn(
                'text-3xl sm:text-4xl xl:text-3xl',
                'font-semibold',
                'text-stone-950',
                'tracking-widest',
                'bg-gradient-to-r from-black to-cyan-400 bg-clip-text text-transparent',
              )}
            >
              MERN
            </span>
          </div>

          <div className='skills-block col-span-2 xl:col-span-1 row-span-1'>
            <Image
              src={reactLogo}
              alt='React, the library for web and native user interfaces'
              className='sm:w-14 w-16 md:12 h-auto'
            />
          </div>

          <div className='skills-block row-span-1 col-span-4 sm:col-span-7 xl:col-span-4 relative'>
            <IoAccessibility className='absolute w-9 sm:w-12 h-auto left-5 xl:left-3 sm:left-10 text-purple-800/80' />
            <span
              className={cn(
                'bg-gradient-to-br',
                'text-center font-extrabold text-xl leading-tight lg:leading-5',
                'from-purple-600  to-blue-500',
                'bg-clip-text',
                'text-transparent',
                'sm:block hidden',
              )}
            >
              web <br /> accessibility
            </span>
            <FaAccessibleIcon className='absolute w-9 sm:w-12 h-auto right-5 xl:right-3 sm:right-10 text-blue-800/80' />
          </div>

          <div className='skills-block col-span-2 xl:col-span-1 row-span-2 flex-col items-center gap-4'>
            <Image src={nodeLogo} alt='Node' className='w-14 h-auto' />
            <Image src={pythonLogo} alt='Python' className='w-10 sm:w-14 h-auto' />
          </div>

          <div className='skills-block col-span-5 xl:col-span-4 row-span-2 xl:row-span-3 flex-col flex-wrap gap-2'>
            <div className='flex justify-center items-center gap-4'>
              <Image src={mysqlLogo} alt='MySQL' className='w-10 sm:w-16 xl:w-20 h-auto' />
              <Image src={postgresLogo} alt='PostgreSQL' className='w-10 sm:w-16 xl:w-20 h-auto' />
            </div>
            <Image src={mongodbLogo} alt='MongoDB' className='w-32 sm:w-36 xl:w-48 h-auto' />
          </div>

          <div className='skills-block col-span-5 xl:col-span-3 row-span-1 gap-2 sm:gap-3'>
            <Image src={kubernetesLogo} alt='Kubernetes' className='w-7 sm:w-10 h-auto' />
            <Image src={dockerLogo} alt='Docker' className='w-24 sm:w-32 h-auto' />
          </div>

          <div className='skills-block row-span-2 col-span-5 xl:col-span-3 xl:row-span-2'>
            <Image src={awsLogo} alt='AWS' className='w-24 sm:w-32 lg:w-52 h-auto' />
          </div>

          <div className='skills-block row-span-1 col-span-4 xl:col-span-3'>
            <span className='text-2xl sm:text-3xl lg:text-4xl tracking-widest font-extrabold text-stone-950'>
              AGILE
            </span>
          </div>

          <div className='skills-block col-span-3 xl:col-span-2 row-span-1'>
            <Image src={gitLogo} alt='Git' className='w-16 sm:w-24 md:w-20 lg:w-24 h-auto' />
          </div>
        </div>
        <div>
          <Tabs defaultValue={BACKEND} className='mt-2'>
            <TabsList className='bg-transparent gap-4 p-0 m-0 overflow-x-auto scrollbar-hidden px-5 md:px-0 w-full justify-start'>
              {getAllCategories().map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={cn(
                    'p-0',
                    'font-semibold',
                    'data-[state=active]:shadow-none data-[state=active]:bg-transparent',
                    'text-stone-400 data-[state=active]:text-stone-900 dark:data-[state=active]:text-stone-300',
                  )}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {getAllCategories().map((category) => (
              <TabsContent key={category} value={category} className='m-0'>
                <ul className='inline-flex gap-5 overflow-x-auto px-5 md:px-0 scrollbar-hidden w-full'>
                  {getSkills()
                    .filter((skill) => skill.categories.includes(category))
                    .map((skill) => (
                      <li key={skill.name}>
                        <Link
                          href={skill.link}
                          target='_blank'
                          className={cn('hover:underline underline-offset-2', {
                            'font-black': skill.strong === 5,
                            'font-extrabold': skill.strong === 4,
                            'font-semibold': skill.strong === 3,
                            'font-medium': skill.strong === 2,
                            'font-normal': skill.strong === 1,
                          })}
                        >
                          {skill.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function getSkills() {
  const FRONTEND = 'frontend';
  const BACKEND = 'backend';
  const FULLSTACK = 'fullstack';
  const DATABASE = 'database';
  const DEVOPS_INFRA = 'devops & infra';
  const AUTOMATION_DATA_EXTRACTION = 'data extraction & automation';
  const OTHER = 'others';

  const skillsData: Skill[] = [
    { name: 'AWS', strong: 2, categories: [DEVOPS_INFRA], link: 'https://aws.amazon.com/' },
    { name: 'Django', categories: [FULLSTACK], link: 'https://www.djangoproject.com/' },
    { name: 'Docker', strong: 5, categories: [DEVOPS_INFRA], link: 'https://www.docker.com/' },
    { name: 'Express', strong: 3, categories: [BACKEND], link: 'https://expressjs.com/' },
    { name: 'Fiber', strong: 4, categories: [BACKEND], link: 'https://gofiber.io/' },
    { name: 'Figma', strong: 3, categories: [OTHER], link: 'https://www.figma.com/' },
    { name: 'Flask', categories: [BACKEND], link: 'https://flask.palletsprojects.com/' },
    { name: 'Git', strong: 5, categories: [DEVOPS_INFRA], link: 'https://git-scm.com/' },
    { name: 'Golang', strong: 5, categories: [BACKEND], link: 'https://golang.org/' },
    { name: 'Kubernetes', categories: [DEVOPS_INFRA], link: 'https://kubernetes.io/' },
    { name: 'Laravel', categories: [BACKEND, FULLSTACK], link: 'https://laravel.com/' },
    { name: 'MongoDB', categories: [DATABASE], link: 'https://www.mongodb.com/' },
    { name: 'MySQL', strong: 5, categories: [DATABASE], link: 'https://www.mysql.com/' },
    { name: 'Next.js', strong: 4, categories: [FRONTEND, FULLSTACK], link: 'https://nextjs.org/' },
    { name: 'Node.js', strong: 4, categories: [BACKEND], link: 'https://nodejs.org/' },
    { name: 'Nuxt', categories: [FRONTEND, FULLSTACK], link: 'https://nuxtjs.org/' },
    { name: 'PHP', categories: [BACKEND, FULLSTACK], link: 'https://www.php.net/' },
    {
      name: 'Playwright',
      strong: 4,
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://playwright.dev/',
    },
    { name: 'PostgreSQL', categories: [DATABASE], link: 'https://www.postgresql.org/' },
    {
      name: 'Puppeteer',
      strong: 3,
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://pptr.dev/',
    },
    {
      name: 'Python',
      strong: 4,
      categories: [BACKEND, AUTOMATION_DATA_EXTRACTION],
      link: 'https://www.python.org/',
    },
    { name: 'React', strong: 4, categories: [FRONTEND], link: 'https://reactjs.org/' },
    { name: 'Redis', strong: 3, categories: [DATABASE], link: 'https://redis.io/' },
    { name: 'Scrapy', categories: [AUTOMATION_DATA_EXTRACTION], link: 'https://scrapy.org/' },
    /* {
      name: 'Selenium',
      categories: [AUTOMATION_DATA_EXTRACTION],
      link: 'https://www.selenium.dev/',
    }, */
    { name: 'Ts.ED', strong: 3, categories: [BACKEND], link: 'https://tsed.io/' },
    { name: 'Vue', strong: 2, categories: [FRONTEND], link: 'https://vuejs.org/' },
  ];

  skillsData.forEach((skill) => {
    skill.categories.push(ALL);
  });

  return skillsData.sort((a, b) => a.name.localeCompare(b.name));
}

function getAllCategories() {
  return [
    ALL,
    BACKEND,
    FRONTEND,
    FULLSTACK,
    DATABASE,
    DEVOPS_INFRA,
    AUTOMATION_DATA_EXTRACTION,
    OTHER,
  ];
}
