import Image from "next/image";

export default function Kfuq({ className }: { className?: string }) {
  return (
    <>
      <Image
        src={"/icons/apple-icon-152x152.webp"}
        width={152}
        height={152}
        alt={'kfuq'}
        style={{width: '152', height: '152'}}
        loading={'eager'}
      />
    </>
  );
}
