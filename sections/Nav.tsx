import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Nav {
  logo: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links?: {
      label?: string;
      url?: string;
    }[];
    buttons?: {
      label?: string;
      url?: string;
      style?: {
        background?: Color;
        color?: "text-base-content" | "text-base-100";
        border?: "yes" | "no";
      };
    }[];
  };
}

type Color =
  | "dark"
  | "light";

export const ColorType: Record<Color, string> = {
  "dark": "bg-base-content",
  "light": "bg-base-100",
};

export default function Nav({
  logo: {
    src =
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt = "Logo",
  } = {},
  navigation: {
    links = [
      { label: "Home", url: "/" },
      { label: "About us", url: "/about" },
      { label: "Princing", url: "/pricing" },
      { label: "Contact", url: "/contact" },
    ],
    buttons = [
      { label: "Change me", url: "/changeme" },
      { label: "Change me", url: "/changeme" },
    ],
  } = {},
}: Nav) {
  return (
    <nav class="flex items-center gap-8 px-16 py-4">
      <Image src={src || ""} width={100} height={28} alt={alt} />
      <ul class="flex items-center justify-between w-full">
        <ul class="flex gap-8">
          {links.map((link) => (
            <li>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        <ul class="flex gap-4">
          {buttons.map((button) => (
            <li>
              <a
                href={button.url}
                class={`px-6 py-3 ${
                  button.style?.border
                    ? ColorType[button.style?.background || "dark"]
                    : ""
                } ${button.style?.color} ${
                  button.style?.border === "yes"
                    ? "border-2 border-base-content rounded-full"
                    : ""
                }`}
              >
                {button.label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
