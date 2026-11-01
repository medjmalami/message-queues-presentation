export type Slide = {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  bullets?: string[]
  badge?: string
  note?: string
}

export const slides: Slide[] = [
  { id: 'title', title: 'Messaging Patterns', subtitle: 'Message Queue → Competing Consumers → Pub/Sub', badge: 'Implemented with RabbitMQ', note: 'Presenter name · Class' },
  { id: 'roadmap', eyebrow: 'THE STORYLINE', title: 'Every pattern changes the delivery rule', subtitle: 'Start with one receiver. Then scale it. Then copy to many.', bullets: ['1 · Message Queue — one message, one consumer', '2 · Competing Consumers — one message, one of many workers', '3 · Pub/Sub — one message, every interested subscriber', '4 · Combining them — broadcast, then scale each service'] },
  { id: 'queue', eyebrow: 'PATTERN 1', title: 'Message Queue', subtitle: 'The baseline: decouple the sender from the receiver.', bullets: ['Decouples sender and receiver', 'Buffers messages when consumers are busy', 'Each message is processed once'], badge: 'EIP name: Point-to-Point Channel' },
  { id: 'competing', eyebrow: 'PATTERN 2', title: 'Competing Consumers', subtitle: 'Put several workers behind the same queue.', bullets: ['Several consumers share one queue', 'Each message goes to ONE of them', 'Load balancing enables horizontal scaling'] },
  { id: 'limit', eyebrow: 'THE LIMIT', title: 'Same message, different services?', subtitle: 'A queue is great at choosing one receiver. That is the problem when everyone needs the event.' },
  { id: 'pubsub', eyebrow: 'PATTERN 3', title: 'Publish / Subscribe', subtitle: 'Publish once. Let the broker copy the message to every interested queue.', bullets: ['One message, many subscribers', "The publisher does not know who is listening", 'Subscribers can be added or removed without touching the publisher'], badge: 'EIP name: Publish-Subscribe Channel', note: 'In-process cousin: GoF Observer' },
  { id: 'comparison', eyebrow: 'AT A GLANCE', title: 'Choose the delivery rule', subtitle: 'Same broker. Different intent.' },
  { id: 'combine-intro', eyebrow: 'THE COMBINATION', title: 'What if Pub/Sub needs to scale?', subtitle: 'Merge the two patterns: broadcast every event, then add competing consumers behind any service that needs more throughput.', bullets: ['Pub/Sub gives each service its own queue', 'Competing Consumers scale workers behind one service queue', 'The other services remain isolated and unchanged'] },
  { id: 'scale-demo', eyebrow: 'ANIMATED BUILD', title: 'Broadcast, then load-balance', subtitle: 'Two events travel through one fanout exchange, three service queues, and three workers per queue.' },
  { id: 'takeaways', title: 'Takeaways', subtitle: 'Three patterns. One question: who should receive this message?', bullets: ['Message Queue: deliver once to one consumer.', 'Competing Consumers: deliver once, scale the work.', 'Pub/Sub: copy to every interested service.'] },
]
