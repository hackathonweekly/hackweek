import { members } from '@/lib/data';
import ChristmasCard from '@/components/ChristmasCard';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const member = members.find(m => m.idx === params.id);
  if (!member) {
    return {
      title: '找不到这个圣诞卡片',
      description: '这个圣诞卡片可能不存在或者已经被删除了',
    };
  }

  const title = `${member.name}的圣诞卡片`;
  const description = member.intro || '来看看我的圣诞卡片吧！';
  const ogImage = `${process.env.NEXT_PUBLIC_APP_URL}/api/og?id=${params.id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page(props: any) {
  const { params } = props;
  const member = members.find(m => m.idx === params.id);

  if (!member) {
    notFound();
  }

  return <ChristmasCard member={member} />;
}
