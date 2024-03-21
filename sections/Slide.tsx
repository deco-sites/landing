import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface SlideProps {
  label?: string;
  repeat?: number;
  icon?: AvailableIcons;
  image?: {
    src?: ImageWidget;
    /** @description text alternative */
    label?: string;
  }[];
}

export interface Props {
  title?: string;
  content?: SlideProps[];
  sort?: boolean;
}

export default function Slide({
  title = "Edit this heading however you want",
  content = [
    {
      label: "Label",
      repeat: 30,
      icon: "ChevronRight",
      image: [
        {
          src:
            "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/03fbcc78-ca86-4616-a59a-b8aa18331a9c",
          label: "Logo",
        },
      ],
    },
  ],
}: Props) {
  const slideContent = content?.map(({ label, icon, image, repeat = 1 }) => {
    return (
      <div class="flex items-center mx-4">
        {Array(repeat).fill(0).map(() => (
          <>
            {label && (
              <span class="text-sm font-extralight text-base-content whitespace-nowrap px-5">
                {label}
              </span>
            )}
            {icon && (
              <Icon
                id={icon}
                name={icon}
                class="px-5"
                width={24}
                height={24}
              />
            )}
            {image && image.map((img) => (
              <Image
                src={img.src || ""}
                alt={img.label || ""}
                class="px-5"
                width={110}
                height={25}
              />
            ))}
          </>
        ))}
      </div>
    );
  });
  return (
    <div class="flex flex-col gap-6">
      <p class="text-center text-lg leading-7">{title}</p>
      <div class="bg-secondary relative w-full overflow-hidden h-11">
        <div class="animate-sliding absolute top-0 left-0 flex flex-nowrap h-11">
          {slideContent}
        </div>
      </div>
    </div>
  );
}
