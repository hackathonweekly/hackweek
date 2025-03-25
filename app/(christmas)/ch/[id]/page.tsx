import { members } from '@/lib/data';
import { Metadata, ResolvingMetadata } from 'next';
import ChristmasCard from '@/components/images/christmasCard';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const member = members.find(m => m.idx === id);

  if (!member) {
    return {
      title: '未找到用户',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${member.name}的圣诞卡片`,
    description: member.intro || `这是${member.name}的圣诞卡片`,
    openGraph: {
      images: [`/api/og?id=${id}`, ...previousImages],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const member = members.find(m => m.idx === id);

  if (!member) {
    notFound();
  }

  return (
    <ChristmasCard member={member} />
  );
}
