import { members } from '@/lib/data';
import ChristmasCard from '@/components/ChristmasCard';
import { notFound } from 'next/navigation';

export default async function Page(props: any) {
  const { params } = props;
  const member = members.find(m => m.idx === params.id);

  if (!member) {
    notFound();
  }

  return <ChristmasCard member={member} />;
}
