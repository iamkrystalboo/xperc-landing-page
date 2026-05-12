import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/xperc-logo.png"
        alt="xperc logo"
        width={176}
        height={65}
        priority
        className="h-[55px] w-auto"
      />
    </div>
  );
}
