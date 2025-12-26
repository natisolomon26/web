// components/header/TopHeader.tsx
import Image from 'next/image';

export default function TopHeader() {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2">
        <div className="flex items-center gap-2">

          {/* Logo */}
          <div className="relative h-14 w-44">
            <Image
              src="/images.png"
              alt="EvaSUE Ethiopia"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-600 max-w-md">
              የኢትዮጵያ ወንጌላዊያን ተማሪዎችና ምሩቃን ማህበር (ኢቫሱ)
            </p>
            <p className="text-sm text-gray-600 max-w-md">
                Evangelical Students’ and Graduates’ Union of Ethiopia 
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
