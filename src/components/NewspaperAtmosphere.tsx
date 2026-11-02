import type { CSSProperties } from 'react';

const motes = [
  { x: '4%', y: '18%', delay: '-13s', duration: '24s', dx: '22px', dy: '-72px', size: '2px', tone: 'dust' },
  { x: '11%', y: '72%', delay: '-4s', duration: '21s', dx: '-18px', dy: '-84px', size: '3px', tone: 'dust' },
  { x: '18%', y: '36%', delay: '-18s', duration: '27s', dx: '30px', dy: '-64px', size: '2px', tone: 'ember' },
  { x: '25%', y: '88%', delay: '-9s', duration: '23s', dx: '-24px', dy: '-76px', size: '2px', tone: 'dust' },
  { x: '33%', y: '14%', delay: '-2s', duration: '29s', dx: '16px', dy: '80px', size: '3px', tone: 'dust' },
  { x: '41%', y: '61%', delay: '-16s', duration: '25s', dx: '-20px', dy: '-90px', size: '2px', tone: 'ember' },
  { x: '48%', y: '28%', delay: '-7s', duration: '22s', dx: '25px', dy: '88px', size: '2px', tone: 'dust' },
  { x: '56%', y: '83%', delay: '-21s', duration: '28s', dx: '-15px', dy: '-70px', size: '3px', tone: 'dust' },
  { x: '63%', y: '45%', delay: '-11s', duration: '24s', dx: '18px', dy: '-82px', size: '2px', tone: 'ember' },
  { x: '70%', y: '9%', delay: '-5s', duration: '26s', dx: '-24px', dy: '90px', size: '2px', tone: 'dust' },
  { x: '78%', y: '76%', delay: '-19s', duration: '23s', dx: '20px', dy: '-74px', size: '3px', tone: 'dust' },
  { x: '86%', y: '31%', delay: '-1s', duration: '30s', dx: '-16px', dy: '78px', size: '2px', tone: 'ember' },
  { x: '93%', y: '64%', delay: '-15s', duration: '25s', dx: '22px', dy: '-88px', size: '2px', tone: 'dust' },
  { x: '97%', y: '12%', delay: '-8s', duration: '27s', dx: '-20px', dy: '72px', size: '3px', tone: 'dust' },
];

export default function NewspaperAtmosphere() {
  return (
    <div className="paper-atmosphere" aria-hidden="true">
      {motes.map((mote, index) => (
        <span
          className={`paper-mote paper-mote--${mote.tone}`}
          key={index}
          style={{
            left: mote.x,
            top: mote.y,
            width: mote.size,
            height: mote.size,
            animationDelay: mote.delay,
            animationDuration: mote.duration,
            '--drift-x': mote.dx,
            '--drift-y': mote.dy,
          } as CSSProperties}
        />
      ))}
      <span className="scorched-vignette" />
    </div>
  );
}
