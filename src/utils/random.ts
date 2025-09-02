/**
 * Utility functions for generating random data to make the app feel more dynamic
 */

// Generate random upvotes (1-999)
export function getRandomUpvotes(): number {
  return Math.floor(Math.random() * 999) + 1;
}

// Generate random comment upvotes (1-100)
export function getRandomCommentUpvotes(): number {
  return Math.floor(Math.random() * 100) + 1;
}

// Generate random time ago (1-24 hours)
export function getRandomTimeAgo(): string {
  const hours = Math.floor(Math.random() * 24) + 1;
  return `${hours}h ago`;
}

// Generate random comment time ago (1-12 hours)
export function getRandomCommentTimeAgo(): string {
  const hours = Math.floor(Math.random() * 12) + 1;
  return `${hours}h ago`;
}

// Generate random member count (1.0k - 9.9k)
export function getRandomMemberCount(): string {
  return `${(Math.random() * 9 + 1).toFixed(1)}k`;
}

// Generate random online count (10-200)
export function getRandomOnlineCount(): number {
  return Math.floor(Math.random() * 190) + 10;
}

// Generate random percentage for trending (5-95%)
export function getRandomTrendingPercentage(): number {
  return Math.floor(Math.random() * 90) + 5;
}

// Generate random days for account age
export function getRandomAccountAge(): string {
  const days = Math.floor(Math.random() * 365) + 1;
  if (days === 1) return "1 day";
  if (days < 30) return `${days} days`;

  const months = Math.floor(days / 30);
  if (months === 1) return "1 month";
  if (months < 12) return `${months} months`;

  const years = Math.floor(months / 12);
  return years === 1 ? "1 year" : `${years} years`;
}
