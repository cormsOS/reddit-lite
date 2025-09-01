import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic, index) => {
    return (
      <div
        key={topic.id}
        className="animate-fade-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <Link href={paths.topicShow(topic.slug)}>
          <Chip
            color="warning"
            variant="flat"
            className="hover:scale-105 transition-all duration-200 hover:shadow-glow-orange cursor-pointer bg-gradient-to-r from-reddit-orange/10 to-reddit-orange/20 text-reddit-orange border border-reddit-orange/20"
            size="md"
          >
            #{topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-row flex-wrap gap-3">
      {renderedTopics.length > 0 ? (
        renderedTopics
      ) : (
        <p className="text-custom-muted text-sm italic">No topics yet. Be the first to create one!</p>
      )}
    </div>
  );
}
